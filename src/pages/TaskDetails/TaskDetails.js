import "./TaskDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditAndBackButtonHeader from "../../components/EditAndBackButtonHeader/EditAndBackButtonHeader.js";
import { BASE_URL } from "../../utils/constant-variables.js";
import { dateFormatter } from "../../utils/utils.js";
import Table from "../../components/Table/Table.js";
import TaskItem from "../../components/TaskItem/TaskItem.js";

export const TaskDetails = () => {
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
    fetchData(
      `${BASE_URL}/api/tasks/${taskId}/procrastinations`,
      setProcrastinations
    );
  };

  if (hasError) {
    return (
      <p>
        Unable to access task with id {taskId} right now. Please try again
        later.
      </p>
    );
  }

  if (isLoading) {
    return <p>Is Loading...</p>;
  }
  if (procrastinations.length === 0) {
    return <p>No procrastination available for this task</p>;
  }

  // Function to convert is_completed value from 0, 1 to text "Not Done", "Done"
  const statusText = () => {
    return task.is_completed ? "Done" : "Not Done";
  };

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
        <hr className="task-details__section-divider" />

        <div className="task-details__sub-item">
          <h4 className="task-details__label">Due Date</h4>
          <div className="task-details__value">
            {dateFormatter(task.due_date)}
          </div>
        </div>
        <div className="task-details__sub-item">
          <h4 className="task-details__label">Status</h4>
          <div className="task-details__value">{statusText()}</div>
        </div>
        <hr className="task-details__divider" />
      </section>
    </div>
  );
};
