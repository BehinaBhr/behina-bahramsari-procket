import { useState } from "react";
import "./NewProcrastination.scss";
import { BASE_URL } from "../../utils/constant-variables";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import FormSelect from "../../components/FormSelect/FormSelect";
import FormField from "../../components/FormField/FormField";

function NewProcrastination({ task, onCancel, onSuccess }) {
  const [reason, setReason] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();
  const { taskId } = useParams();

  const onSubmit = async (e) => {
    e.preventDefault();
    let errors = {};

    if (reason === "" || reason === null) {
      errors["reason"] = ["This field is required"];
    }
    if (dueDate === "" || reason === null) {
      errors["due_date"] = ["This field is required"];
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        await axios.put(`${BASE_URL}/api/tasks/${task.id}`, {
          description: task.description,
          due_date: dueDate,
          is_completed: task.is_completed,
        });
        await axios.post(`${BASE_URL}/api/procrastinations/`, {
          reason: reason,
          task_id: task.id,
        });
        setTimeout(() => {
          taskId ? navigate(`/tasks/${task.id}`) : navigate(`/tasks`);
          onSuccess();
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const procastinationReasons = [
    "Not being in the mood",
    "No rush, plenty of time",
    "Nothing bad will happen",
    "No motivation",
    "Forgetting",
    "Sickness or poor health",
    "Overthinking the task",
    "Delaying one task to perfect another",
  ];

  const selectOptions = procastinationReasons.map((reason) => {
    return { value: reason, text: reason };
  });

  return (
    <section className="new-procrastination-modal__background">
      <section className="new-procrastination-modal">
        <section className="new-procrastination-modal__content">
          <h1 className="new-procrastination-modal__content-header">Why do you want to postpone this task?</h1>
          <p className="new-procrastination-modal__content-body">Select from one of the following reasons</p>
        </section>
        <form onSubmit={onSubmit}>
          <FormSelect
            className="task-form__input"
            field_name="reason"
            options={selectOptions}
            errors={errors}
            errorSetter={setErrors}
            value={reason}
            valueSetter={setReason}
            with_title={false}
          />

          <FormField
            className="goal-form__input"
            key="due_date"
            field_name="due_date"
            errors={errors}
            errorSetter={setErrors}
            value={dueDate}
            valueSetter={setDueDate}
            type="date"
          />
          <div className="new-procrastination-modal__buttons">
            <button
              className="new-procrastination-modal__button new-procrastination-modal__button-cancel"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button className="new-procrastination-modal__button new-procrastination-modal__button-save">Save</button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default NewProcrastination;
