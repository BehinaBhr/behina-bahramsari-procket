import "../GoalItem/GoalItem.scss";
import DeleteButton from "../DeleteButton/DeleteButton.js";
import DetailsLink from "../DetailsLink/DetailsLink.js";

function GoalItem({ item, onDelete }) {
  const { id, description, start_date, end_date, progress } = item;
  return (
    <section className="goal-item">
      <div className="goal-item__attr goal-item__attr--description">
        <h4 className="goal-item__attr-label">Goal</h4>
        <p className="goal-item__attr-value">
          <DetailsLink text={description} to={`/goals/${id}`} />
        </p>
      </div>
      <div className="goal-item__attr">
        <h4 className="goal-item__attr-label">From</h4>
        <p className="goal-item__attr-value">{start_date}</p>
      </div>
      <div className="goal-item__attr">
        <h4 className="goal-item__attr-label">To</h4>
        <p className="goal-item__attr-value">{end_date} </p>
      </div>
      <div className="goal-item__attr">
        <h4 className="goal-item__attr-label">Progress</h4>
        <p className="goal-item__attr-value">{progress} </p>
      </div>
      <div className="goal-item__actions">
        <DeleteButton onClick={onDelete} />
      </div>
    </section>
  );
}

export default GoalItem;
