import "./TaskItem.scss";
import DeleteButton from "../DeleteButton/DeleteButton";
import DetailsLink from "../DetailsLink/DetailsLink.js";
import { Link } from "react-router-dom";
import TaskStatusButton from "../../components/TaskStatusButton/TaskStatusButton";

export default function TaskItem({ item, onDelete, triggerReload }) {
  const { id, description, is_completed, due_date, goal_description, goal_id } = item;
  return (
    <section className={`task-item ${is_completed ? "task-item--done" : ""}`}>
      <div className="task-item__attr task-item__attr-description">
        <h4 className="task-item__attr-label">Task</h4>
        <p className="task-item__attr-value">
          <DetailsLink text={description} to={`/tasks/${id}`} />
          {goal_description && (
            <Link className="task-item__attr-sub-value" to={`/goals/${goal_id}`}>
              ( {goal_description} )
            </Link>
          )}
        </p>
      </div>
      <div className="task-item__attr">
        <h4 className="task-item__attr-label">Due Date</h4>
        <p className="task-item__attr-value task-item__attr-value-duedate">{due_date}</p>
      </div>
      <div className="task-item__actions">
        <TaskStatusButton className="task-item__attr-value task-item__status-buttons" task={item} triggerReload={triggerReload} />
        <DeleteButton onClick={onDelete} />
      </div>
    </section>
  );
}
