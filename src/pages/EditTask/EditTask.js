import { BASE_URL } from "../../utils/constant-variables";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

const EditTask = () => {
  const { taskId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [task, setTask] = useState({});

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/tasks/${taskId}`);
        setTask(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };
    fetchTask();
  }, [taskId]);

  if (hasError) {
    return <p>Unable to access the task right now. Please try again later.</p>;
  }

  if (isLoading) return <Loading />;

  const handleSubmit = async (taskData) => {
    await axios.put(`${BASE_URL}/api/tasks/${taskId}`, taskData);
  };

  return <TaskForm title="Edit Task" formSubmitHandler={handleSubmit} task={task} />;
};

export { EditTask };
