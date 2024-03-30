import "./NewProcrastination.scss";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormSelect from "../../components/FormSelect/FormSelect";
import FormField from "../../components/FormField/FormField";
import FailedSubmitError from "../FailedSubmitError/FailedSubmitError";
import SuccessfulSubmitMessage from "../SuccessfulSubmitMessage/SuccessfulSubmitMessage";
import { createProcrastinations, updateTask } from "../../utils/apiUtils.js";

function NewProcrastination({ task, onCancel, onSuccess }) {
  const [reason, setReason] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();
  const { taskId } = useParams();
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setDueDate(task.due_date);
  }, [task]);

  const onSubmit = async (e) => {
    setSubmitError("");

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
        await updateTask(task.id, {
          description: task.description,
          due_date: dueDate,
          is_completed: task.is_completed,
        });
        await createProcrastinations({ reason: reason, task_id: task.id });

        setSubmitSuccess(true);
        setTimeout(() => {
          taskId ? navigate(`/tasks/${task.id}`) : navigate(`/tasks`);
          onSuccess();
        }, 3000);
      } catch (error) {
        setSubmitError(error.response.data.message);
        setSubmitSuccess(false);
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
          <h1 className="new-procrastination-modal__content-header">Postpone 😥</h1>
          <p className="new-procrastination-modal__content-body">
            Please select your reason for postponing this task and the new due date.
          </p>
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
        {submitSuccess && (
          <SuccessfulSubmitMessage
            className="new-procrastination-modal__message"
            message="Your task is successfully updated!"
          />
        )}
        {submitError && <FailedSubmitError className="new-procrastination-modal__message" error={submitError} />}
      </section>
    </section>
  );
}

export default NewProcrastination;
