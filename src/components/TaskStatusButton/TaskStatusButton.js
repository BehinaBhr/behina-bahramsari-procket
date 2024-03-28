import "./TaskStatusButton.scss";
import FieldError from "../FieldError/FieldError";
import FormLabel from "../FormLabel/FormLabel";
import { useState } from "react";

const TaskStatusButton = ({ field_name, errors, errorSetter, value, valueSetter, className = "" }) => {
  const [status, setStatus] = useState(value);

  function onDone() {
    valueSetter(true);
    delete errors[field_name];
    errorSetter(errors);
    setStatus(true);
  }
  function onPostponse() {
    valueSetter(false);
    delete errors[field_name];
    errorSetter(errors);
    setStatus(false);
  }
  return (
    <div className={`task-status-button ${className}`}>
      <FormLabel field_name={field_name} />
      <div className="task-status-button__button-group">
        {!status && (
          <button className="task-status-button__button task-status-button__button-done" type="button" onClick={onDone}>
            done
          </button>
        )}
        {status && (
          <button
            className="task-status-button__button task-status-button__button-postpone"
            type="button"
            onClick={onPostponse}
          >
            later
          </button>
        )}
      </div>
      {errors[field_name] !== undefined &&
        errors[field_name].map((error) => <FieldError message={error} key={`${field_name} ${error}`} />)}
    </div>
  );
};

export default TaskStatusButton;
