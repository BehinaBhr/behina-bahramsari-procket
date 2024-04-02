import "../GoalItem/GoalItem.scss";
import DeleteButton from "../DeleteButton/DeleteButton.js";
import DetailsLink from "../DetailsLink/DetailsLink.js";
import GoalProgress from "../GoalProgress/GoalProgress.js";

function GoalItem({ item, onDelete }) {
  const { id, description, start_date, end_date, progress } = item;
  const is_completed = progress===100;

  return (
    <div className={`goal-item ${is_completed ? "goal-item--done" : ""}`}>
      <hr className="goal-item__divider" />
      <section className="goal-item__body">
        <div className="goal-item__attr goal-item__attr-description">
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
        <div className="goal-item__attr goal-item__attr-progress">
          <h4 className="goal-item__attr-label">Progress</h4>
          <GoalProgress progress={progress} className="goal-item__attr-value"/>
        </div>
        <div className="goal-item__actions">
          <DeleteButton onClick={onDelete} />
        </div>
      </section>
    </div>
  );
}

export default GoalItem;
