import { TaskForm } from "../../components/TaskForm/TaskForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { fetchTask, updateTask } from "../../utils/apiUtils.js";

const EditTask = () => {
  const { taskId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [task, setTask] = useState({});

  useEffect(() => {
    fetchData();
  }, [taskId]);

  const fetchData = async () => {
    try {
      const task = await fetchTask(taskId);
      setTask(task);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  if (hasError) {
    return <p>Unable to access the task right now. Please try again later.</p>;
  }

  if (isLoading) return <Loading />;

  const handleSubmit = async (taskData) => {
    await updateTask(taskId, taskData);
  };

  return <TaskForm title="Edit Task" formSubmitHandler={handleSubmit} task={task} />;
};

export { EditTask };
