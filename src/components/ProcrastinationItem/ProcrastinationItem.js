import "./ProcrastinationItem.scss";
import DeleteButton from "../DeleteButton/DeleteButton";
import { dateFormatter } from "../../utils/utils.js";

export default function ProcrastinationItem({ item, onDelete }) {
  const { id, reason, created_at } = item;
  return (
    <section className="procrastination-item" key={id}>
      <div className="procrastination-item__attr procrastination-item__attr--description">
        <h4 className="procrastination-item__attr-label">reason</h4>
        <p className="procrastination-item__attr-value">{reason}</p>
      </div>
      <div className="procrastination-item__attr">
        <h4 className="procrastination-item__attr-label">Created at</h4>
        <p className="procrastination-item__attr-value">{dateFormatter(created_at)}</p>
      </div>
      <div className="task-item__actions">
        <DeleteButton onClick={onDelete} />
      </div>
    </section>
  );
}
