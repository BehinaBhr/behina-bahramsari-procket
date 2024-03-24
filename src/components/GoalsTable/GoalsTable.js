import "./GoalsTable.scss";
import GoalItem from "../GoalItem/GoalItem.js";
import { useState } from "react";

function GoalsTable({ goals }) {
  const [_, setDeleteItemId] = useState(null);

  // displays goal header and calls GoalItem to pull items
  return (
    <section className="goals-table">
      <section className="goals-table__labels">
        <h4 className="goals-table__label">Goal</h4>
        <h4 className="goals-table__label">Start Date</h4>
        <h4 className="goals-table__label">End Date</h4>
        <h4 className="goals-table__label">Progress</h4>
        <h4 className="goals-table__label">Actions</h4>
      </section>

      {goals.map((goal) => {
        return (
          <>
            <hr className="goals-table__divider" />
            <GoalItem
              key={goal.id}
              goalInfo={goal}
              onDelete={() => setDeleteItemId(goal.id)}
            />
          </>
        );
      })}
    </section>
  );
}

export default GoalsTable;
