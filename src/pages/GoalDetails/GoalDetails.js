import "./GoalDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DocumentTitle } from "../../utils/utils";
import EditAndBackButtonHeader from "../../components/EditAndBackButtonHeader/EditAndBackButtonHeader";
import AddButton from "../../components/AddButton/AddButton";
import Table from "../../components/Table/Table.js";
import TaskItem from "../../components/TaskItem/TaskItem.js";
import Loading from "../../components/Loading/Loading";
import GoalProgress from "../../components/GoalProgress/GoalProgress";
import ConnectionError from "../../components/ConnectionError/ConnectionError";
import { fetchGoalsTasks, fetchGoal, deleteTask } from "../../utils/apiUtils.js";

export const GoalDetails = () => {
  DocumentTitle("Goal Details Page");
  const [goal, setGoal] = useState({});
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [lastCompletenessStatus, setLastCompletenessStatus] = useState(null);
  const [lunchMissle, setlunchMissle] = useState(false);
  const { goalId } = useParams();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const goal = await fetchGoal(goalId);
        const tasks = await fetchGoalsTasks(goalId);
        setGoal(goal);
        if(lastCompletenessStatus != null && goal.progress === 100) {
          setlunchMissle(true)
          setTimeout(()=> setlunchMissle(false), 4000)  
        }
        setLastCompletenessStatus(goal.progress)
        setTasks(tasks);
        setIsLoading(false);
        setHasError(false);
      } catch (error) {
        setHasError(true);
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [goalId, reload]);

  const triggerReload = () => {
    setReload(!reload);
  };

  if (hasError) return <ConnectionError error = {`Unable to access details of goal with id ${goalId} right now. Please try again later`} />;
  if (isLoading) return <Loading />;

  return (
    <div className="goal-details">
      <EditAndBackButtonHeader title="Goal Details" edit_button_to={`/goals/${goalId}/edit`} />
      <hr className="goal-details__divider" />
      <section className="goal-details__body">
        <div className={`goal-details__launch-missle ${lunchMissle ? 'goal-details__launch-missle-fade-in' : 'goal-details__launch-missle-fade-out'}`}></div>
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
          <GoalProgress progress={goal.progress} className="goal-details__value"/>
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
        deleteSelectedItem={(taskId) => {
          deleteTask(taskId, triggerReload, setHasError);
        }}
        triggerReload={triggerReload}
      />
    </div>
  );
};
