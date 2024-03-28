import "./TaskDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditAndBackButtonHeader from "../../components/EditAndBackButtonHeader/EditAndBackButtonHeader.js";
import { BASE_URL } from "../../utils/constant-variables.js";
import Table from "../../components/Table/Table.js";
import ProcrastinationItem from "../../components/ProcrastinationItem/ProcrastinationItem.js";
import { DocumentTitle } from "../../utils/utils";
import TaskStatusButton from "../../components/TaskStatusButton/TaskStatusButton";

export const TaskDetails = () => {
  DocumentTitle("TaskDetails Page");
  const [task, setTask] = useState({});
  const [procrastinations, setProcrastinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { taskId } = useParams();

  useEffect(() => {
    fetchTask();
    fetchTaskProcrastinations();
  }, [taskId]);

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

  const fetchTask = async () => {
    fetchData(`${BASE_URL}/api/tasks/${taskId}`, setTask);
  };

  const fetchTaskProcrastinations = async () => {
    fetchData(`${BASE_URL}/api/tasks/${taskId}/procrastinations`, setProcrastinations);
  };

  const deleteSelectedItem = async (procrastinationId) => {
    try {
      await axios.delete(`${BASE_URL}/api/procrastinations/${procrastinationId}`);
      // Fetching updated procrastinationss on delete
      fetchTaskProcrastinations();
    } catch {
      setHasError(true);
    }
  };

  if (hasError) {
    return <p>Unable to access details of task with id {taskId} right now. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Is Loading...</p>;
  }

  // Function to convert is_completed value from 0, 1 to text "Not Done", "Done"

  return (
    <div className="task-details">
      <EditAndBackButtonHeader
        title="Task Details"
        back_button_to={"/tasks"}
        edit_button_to={`/tasks/${taskId}/edit`}
      />

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
          <h4 className="task-details__label">Status</h4>
          <TaskStatusButton className="task-details__value" task={task} fetchTask={fetchTask} />
        </div>
      </section>
      <hr className="task-details__divider" />
      <Table
        target="procrastination"
        items={procrastinations}
        ItemComponent={ProcrastinationItem}
        columns={["Procrastinations", "Created at", "Actions"]}
        deleteSelectedItem={deleteSelectedItem}
      />
    </div>
  );
};
