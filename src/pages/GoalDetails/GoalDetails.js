import "./GoalDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditAndBackButtonHeader from "../../components/EditAndBackButtonHeader/EditAndBackButtonHeader";
import { BASE_URL } from "../../utils/constant-variables";
import { dateFormatter } from "../../utils/utils.js";
import Table from "../../components/Table/Table.js";
import TaskItem from "../../components/TaskItem/TaskItem.js";

export const GoalDetails = () => {
  const [goal, setGoal] = useState({});
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { goalId } = useParams();

  useEffect(() => {
    fetchGoal(goalId);
    fetchGoalsTasks(goalId);
  }, [goalId]);

  const fetchData = async (path, dataSetter) => {
    try {
      const response = await axios.get(path);
      setIsLoading(false);
      dataSetter(response.data);
      setHasError(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
      console.error(error);
    }
  };

  const fetchGoalsTasks = async (goalId) => {
    fetchData(`${BASE_URL}/api/goals/${goalId}/tasks`, setTasks);
  };

  const fetchGoal = async (goalId) => {
    fetchData(`${BASE_URL}/api/goals/${goalId}`, setGoal);
  };

  if (hasError) {
    return <p>Unable to access goals right now. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Is Loading...</p>;
  }
  return (
    <div className="goal-details">
      <EditAndBackButtonHeader
        title={goal.description}
        back_button_to={"/goals"}
        edit_button_to={`/goal/${goalId}/edit`}
      />

      <hr className="goal-details__divider" />

      <section className="goal-details__body">
        <div className="goal-details__sub-item goal-details__sub-item-description">
          <h4 className="goal-details__label">Description</h4>
          <div className="goal-details__value">{goal.description}</div>
        </div>
        <hr className="goal-details__section-divider" />
        <div className="goal-details__sub-item">
          <h4 className="goal-details__label">Start Date</h4>
          <div className="goal-details__value">
            {dateFormatter(goal.start_date)}
          </div>
        </div>
        <div className="goal-details__sub-item">
          <h4 className="goal-details__label">End Date</h4>
          <div className="goal-details__value">
            {dateFormatter(goal.end_date)}
          </div>
        </div>
        <div className="goal-details__sub-item">
          <h4 className="goal-details__label">progress</h4>
          <div className="goal-details__value">{goal.progress}</div>
        </div>
      </section>
      <hr className="goal-details__divider" />
      <Table
        items={tasks}
        ItemComponent={TaskItem}
        attrs={["Tasks", "Due Date", "Status", "Actions"]}
      />
    </div>
  );
};
