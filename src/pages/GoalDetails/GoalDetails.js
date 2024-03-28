import "./GoalDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditAndBackButtonHeader from "../../components/EditAndBackButtonHeader/EditAndBackButtonHeader";
import { BASE_URL } from "../../utils/constant-variables";
import Table from "../../components/Table/Table.js";
import TaskItem from "../../components/TaskItem/TaskItem.js";

export const GoalDetails = () => {
  const [goal, setGoal] = useState({});
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { goalId } = useParams();

  useEffect(() => {
    fetchGoal();
    fetchGoalsTasks();
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

  const fetchGoalsTasks = async () => {
    fetchData(`${BASE_URL}/api/goals/${goalId}/tasks`, setTasks);
  };

  const fetchGoal = async () => {
    fetchData(`${BASE_URL}/api/goals/${goalId}`, setGoal);
  };

  const deleteSelectedItem = async (taskId) => {
    try {
      await axios.delete(`${BASE_URL}/api/tasks/${taskId}`);
      // Fetching updated goals on delete
      fetchGoalsTasks();
    } catch {
      setHasError(true);
    }
  };

  if (hasError) {
    return <p>Unable to access details of goal with id {goalId} right now. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Is Loading...</p>;
  }

  return (
    <div className="goal-details">
      <EditAndBackButtonHeader title="Goal Details" edit_button_to={`/goals/${goalId}/edit`} />
      <hr className="goal-details__divider" />
      <section className="goal-details__body">
        <div className="goal-details__sub-item goal-details__sub-item-description">
          <h4 className="goal-details__label">Description</h4>
          <div className="goal-details__value">{goal.description}</div>
        </div>
        <hr className="goal-details__section-divider" />
        <div className="goal-details__sub-item">
          <h4 className="goal-details__label">Start Date</h4>
          <div className="goal-details__value">{goal.start_date}</div>
        </div>
        <div className="goal-details__sub-item">
          <h4 className="goal-details__label">End Date</h4>
          <div className="goal-details__value">{goal.end_date}</div>
        </div>
        <div className="goal-details__sub-item">
          <h4 className="goal-details__label">progress</h4>
          <div className="goal-details__value">{goal.progress}</div>
        </div>
      </section>
      <hr className="goal-details__divider" />
      <Table
        target="task"
        items={tasks}
        ItemComponent={TaskItem}
        columns={["Tasks", "Due Date", "Status", "Actions"]}
        deleteSelectedItem={deleteSelectedItem}
      />
    </div>
  );
};
