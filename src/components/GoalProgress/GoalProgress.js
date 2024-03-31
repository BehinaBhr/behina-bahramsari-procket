import "./GoalProgress.scss";

function GoalProgress({ progress, className = "" }) {
  const is_completed = progress === 100;

  return <p className={`goal-progrees ${is_completed ? "goal-progrees--done" : ""} ${className}`}>{progress} %</p>;
}

export default GoalProgress;
