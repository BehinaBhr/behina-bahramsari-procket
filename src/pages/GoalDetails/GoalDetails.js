import "./GoalDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditAndBackButtonHeader from "../../components/EditAndBackButtonHeader/EditAndBackButtonHeader";
import AddButton from "../../components/AddButton/AddButton";
import { BASE_URL } from "../../utils/constant-variables";
import Table from "../../components/Table/Table.js";
import TaskItem from "../../components/TaskItem/TaskItem.js";
import Loading from "../../components/Loading/Loading";
import ConnectionError from "../../components/ConnectionError/ConnectionError";

export const GoalDetails = () => {
  const [goal, setGoal] = useState({});
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { goalId } = useParams();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetchGoal();
    fetchGoalsTasks();
  }, [goalId, reload]);

  const triggerReload = () => {
    console.log("here");
    setReload(!reload);
  };

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
      triggerReload();
    } catch {
      setHasError(true);
    }
  };

  if (hasError) return <ConnectionError error = {`Unable to access details of goal with id ${goalId} right now. Please try again later`} />;
  if (isLoading) return <Loading />;

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
          <div className="goal-details__value goal-details__value-progrees">{goal.progress} %</div>
        </div>
      </section>
      <hr className="goal-details__divider" />
      <div className="goal-details__tasks"> 
        <h3 className="goal-details__tasks-header">Tasks</h3>
        <AddButton target="Task" link_to="/tasks/new" className="goal-details__add-task" />
      </div>
      <Table
        target="task"
        items={tasks}
        ItemComponent={TaskItem}
        columns={["Tasks", "Due Date", "Actions"]}
        deleteSelectedItem={deleteSelectedItem}
        triggerReload={triggerReload}
      />
    </div>
  );
};
