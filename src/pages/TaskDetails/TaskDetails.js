import "./TaskDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DocumentTitle } from "../../utils/utils";
import EditAndBackButtonHeader from "../../components/EditAndBackButtonHeader/EditAndBackButtonHeader.js";
import Table from "../../components/Table/Table.js";
import ProcrastinationItem from "../../components/ProcrastinationItem/ProcrastinationItem.js";
import TaskStatusButton from "../../components/TaskStatusButton/TaskStatusButton";
import Loading from "../../components/Loading/Loading";
import ConnectionError from "../../components/ConnectionError/ConnectionError";
import { fetchTask, fetchTaskProcrastinations, deleteProcrastinations } from "../../utils/apiUtils.js";

export const TaskDetails = () => {
  DocumentTitle("Task Details Page");
  const [task, setTask] = useState({});
  const [procrastinations, setProcrastinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { taskId } = useParams();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const task = await fetchTask(taskId);
        const procrastinations = await fetchTaskProcrastinations(taskId);
        setTask(task);
        setProcrastinations(procrastinations);
        setIsLoading(false);
        setHasError(false);
      } catch (error) {
        setHasError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [taskId, reload]);

  const triggerReload = () => {
    setReload(!reload);
  };

  if (hasError)
    return (
      <ConnectionError error={`Unable to access details of task with id ${taskId} right now. Please try again later`} />
    );
  if (isLoading) return <Loading />;

  return (
    <div className="task-details">
      <EditAndBackButtonHeader title="Task Details" edit_button_to={`/tasks/${taskId}/edit`} />

      <hr className="task-details__divider" />

      <section className="task-details__body">
        <div className="task-details__sub-item task-details__sub-item-description">
          <h4 className="task-details__label">Description</h4>
          <div className="task-details__value">{task.description}</div>
        </div>
        <div className="task-details__sub-item task-details__sub-item-description">
          <h4 className="task-details__label">Goal</h4>
          <div className="task-details__value">{task.goal_description}</div>
        </div>
        <div className="task-details__sub-item">
          <h4 className="task-details__label">Due Date</h4>
          <div className="task-details__value">{task.due_date}</div>
        </div>
        <div className="task-details__sub-item">
          <h4 className="task-details__label">Actions</h4>
          <TaskStatusButton className="task-details__value" task={task} triggerReload={triggerReload} />
        </div>
      </section>
      <hr className="task-details__divider" />
      <div class="task-details__procrastinations">
        <h3 class="task-details__procrastinations-header">Procrastinations</h3>
        <Table
          target="procrastination"
          items={procrastinations}
          ItemComponent={ProcrastinationItem}
          columns={["Reason", "Created at", "Action"]}
          deleteSelectedItem={(ProcrastinationId) => {
            deleteProcrastinations(ProcrastinationId, triggerReload, setHasError);
          }}
        />
      </div>
    </div>
  );
};
