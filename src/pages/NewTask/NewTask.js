import { TaskForm } from "../../components/TaskForm/TaskForm";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import { createTask, fetchGoals } from "../../utils/apiUtils.js";

const NewTask = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [goalOptions, setGoalOptions] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const goals = await fetchGoals();
      const options = [];
      goals.forEach((goal) => {
        options.push({ value: goal.id, text: goal.description });
      });
      setGoalOptions(options);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  if (hasError) {
    return <p>Unable to access goals right now. Please try again later.</p>;
  }

  if (isLoading) return <Loading />;

  const handleSubmit = async (taskData) => {
    await createTask(taskData);
  };

  return <TaskForm title="Add Task" formSubmitHandler={handleSubmit} options={goalOptions} />;
};

export { NewTask };
