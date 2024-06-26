import { TaskForm } from "../../components/TaskForm/TaskForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DocumentTitle } from "../../utils/utils";
import Loading from "../../components/Loading/Loading";
import { fetchTask, updateTask } from "../../utils/apiUtils.js";
import ConnectionError from "../../components/ConnectionError/ConnectionError";

const EditTask = () => {
  DocumentTitle("Edit Task Page");
  const { taskId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [task, setTask] = useState({});

  useEffect(() => {
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

    fetchData();
  }, [taskId]);

  if (hasError) return <ConnectionError error={`Unable to access the task with ${taskId} right now. Please try again later.`} />;
  if (isLoading) return <Loading />;

  const handleSubmit = async (taskData) => {
    await updateTask(taskId, taskData);
  };

  return <TaskForm title="Edit Task" formSubmitHandler={handleSubmit} task={task} />;
};

export { EditTask };
