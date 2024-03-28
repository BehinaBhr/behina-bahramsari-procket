import "./TaskForm.scss";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import FormField from "../FormField/FormField";
import FormSelect from "../FormSelect/FormSelect";
import TaskStatusButton from "../TaskStatusButton/TaskStatusButton";
import EditAndBackButtonHeader from "../EditAndBackButtonHeader/EditAndBackButtonHeader";

const TaskForm = ({ title, formSubmitHandler, task = null, options = null }) => {
  const { taskId } = useParams();
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isCompleted, setIsCompleted] = useState(null);
  const [goalId, setGoalId] = useState(null);
  const [errors, setErrors] = useState({});

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (task) {
      setDescription(task.description);
      setDueDate(task.due_date);
      setIsCompleted(task.is_completed);
      setGoalId(task.goal_id);
    }
  }, [task]);

  const onSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if (description === "" || description === null) {
      errors["description"] = ["This field is required"];
    }
    if (dueDate === "" || dueDate === null) {
      errors["due_date"] = ["This field is required"];
    }
    if (isCompleted === null) {
      errors["is_completed"] = ["This field is required"];
    }
    if (goalId === null) {
      errors["goal_id"] = ["This field is required"];
    }

    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        await formSubmitHandler({
          description: description,
          due_date: dueDate,
          is_completed: isCompleted,
          goal_id: goalId,
        });

        setSubmitSuccess(true);
        setTimeout(() => {
          task ? navigate(`/tasks/${taskId}`) : navigate(`/tasks`);
        }, 3000);
      } catch (error) {
        console.error(error);
        setSubmitSuccess(false);
      }
    }
  };

  return (
    <section className="task-form">
      <EditAndBackButtonHeader title={title} edit_button_to={null} />

      <hr className="task-form__divider" />

      <form onSubmit={onSubmit}>
        <div className="task-form__details">
          <h2>Goal Details</h2>
          <FormField
            className="task-form__input"
            field_name="description"
            errors={errors}
            errorSetter={setErrors}
            value={description}
            valueSetter={setDescription}
          />
          <div className="task-form__input-group">
            <FormField
              className="task-form__input"
              key="due_date"
              field_name="due_date"
              errors={errors}
              errorSetter={setErrors}
              value={dueDate}
              valueSetter={setDueDate}
              type="date"
            />
            <TaskStatusButton
              className="task-form__input"
              key="is_completed"
              field_name="is_completed"
              errors={errors}
              errorSetter={setErrors}
              value={isCompleted}
              valueSetter={setIsCompleted}
            />
            {options && (
              <FormSelect
                className="task-form__input"
                key="goal_id"
                field_name="goal_id"
                options={options}
                errors={errors}
                errorSetter={setErrors}
                valueSetter={setGoalId}
              />
            )}
          </div>
        </div>

        <div className="task-form__buttons-group">
          <Link className="task-form__button task-form__button-cancel" onClick={() => navigate(-1)}>
            Cancel
          </Link>
          <button className="task-form__button task-form__button-add">Save</button>
        </div>
        {submitSuccess && <div className="task-form__success-message">The task is successfully updated!</div>}
      </form>
    </section>
  );
};

export { TaskForm };
