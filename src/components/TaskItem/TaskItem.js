import "./TaskItem.scss";
import DeleteButton from "../DeleteButton/DeleteButton";
import { dateFormatter } from "../../utils/utils.js";

export default function TaskItem({ item, onDelete }) {
  const { description, is_completed, due_date } = item;
  return (
    <section className="task-item">
      <div className="task-item__attr task-item__attr--description">
        <h4 className="task-item__attr-label">Task</h4>
        <p className="task-item__attr-value">{description}</p>
      </div>
      <div className="task-item__attr">
        <h4 className="task-item__attr-label">Due Date</h4>
        <p className="task-item__attr-value">{dateFormatter(due_date)}</p>
      </div>
      <div className="task-item__attr">
        <h4 className="task-item__attr-label">Status</h4>
        <p className="task-item__attr-value">{is_completed} </p>
      </div>
      <div className="task-item__actions">
        <DeleteButton onClick={onDelete} />
      </div>
    </section>
  );
}
