import "./TaskStatusButton.scss";
import { useState } from "react";
import NewProcrastination from "../NewProcrastination/NewProcrastination";
import iconPostpone from "../../assets/images/postpone.svg";
import iconComplete from "../../assets/images/complete.svg";
import iconUndone from "../../assets/images/undone.svg";
import { updateTask } from "../../utils/apiUtils.js";

const TaskStatusButton = ({ task, triggerReload, className = "" }) => {
  const [newProcrastination, setNewProcrastination] = useState(false);

  async function onDone() {
    if (!task.is_completed) {
      await setTaskStatus(true);
      triggerReload();
    }
  }
  async function onUnDone() {
    if (task.is_completed) {
      await setTaskStatus(false);
      triggerReload();
    }
  }
  async function setTaskStatus(is_completed) {
    await updateTask(task.id, {
      description: task.description,
      due_date: task.due_date,
      is_completed: is_completed,
    });
  }
  function onPostponse() {
    setNewProcrastination(true);
  }

  return (
    <>
      <div className={`task-status-button ${className}`}>
        {!task.is_completed && (
          <div className="task-status-button__button-group">
            <button
              className="task-status-button__button task-status-button__button-done"
              type="button"
              onClick={onDone}
            >
              <img src={iconComplete} alt="complete" />
            </button>
            <button
              className="task-status-button__button task-status-button__button-postpone"
              type="button"
              onClick={onPostponse}
            >
              <img src={iconPostpone} alt="postone" />
            </button>
          </div>
        )}
        {task.is_completed === 1 && (
          <button className="task-status-button__button" type="button" onClick={onUnDone}>
            <img src={iconUndone} alt="undone" />
          </button>
        )}
      </div>
      {newProcrastination && (
        <NewProcrastination
          onCancel={() => setNewProcrastination(false)}
          task={task}
          onSuccess={() => {
            triggerReload();
            setNewProcrastination(false);
          }}
        />
      )}
    </>
  );
};

export default TaskStatusButton;
