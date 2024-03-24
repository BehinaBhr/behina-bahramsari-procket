import "./GoalsTable.scss";
import GoalItem from "../GoalItem/GoalItem.js";
import { BASE_URL } from "../../utils/constant-variables";
import { useState, useEffect } from "react";
import axios from "axios";
import { SearchAndAddButtonHeader } from "../../components/SearchAndAddButtonHeader/SearchAndAddButtonHeader";


function GoalsTable() {
  const [goals, setGoals] = useState([]);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Fetching goals on page load
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/goals`);
      setGoals(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  if (hasError) {
    return <p>Unable to access goals right now. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Is Loading...</p>;
  }

  if (goals.length === 0) {
    return <p>No goals available</p>;
  }

  //displays goal header and calls GoalItem to pull items
  return (
    <section className="goals-table">
      <SearchAndAddButtonHeader
        title="Goals"
        button_text={"+ Add New Goal"}
        link_to="warehouse/add-goal"
      />
      <section className="goals-table__labels">
        <h4 className="goals-table__label">Goal</h4>
        <h4 className="goals-table__label">Start Date</h4>
        <h4 className="goals-table__label">End Date</h4>
        <h4 className="goals-table__label">Progress</h4>
        <h4 className="goals-table__label">Actions</h4>
      </section>

      <hr className="goals-table__divider" />
      {goals.map((goal) => {
        return (
          <>
            <GoalItem
              key={goal.id}
              goalInfo={goal}
              onDelete={() => setDeleteItemId(goal.id)}
            />
            <hr className="goals-table__divider" />
          </>
        );
      })}
    </section>
  );
}

export default GoalsTable;
