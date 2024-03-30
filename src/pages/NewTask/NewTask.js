import { BASE_URL } from "../../utils/constant-variables";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

const NewTask = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [goalOptions, setGoalOptions] = useState({});

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/goals/`);
        const options = [];
        response.data.forEach((goal) => {
          options.push({ value: goal.id, text: goal.description });
        });
        setGoalOptions(options);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };
    fetchGoals();
  }, []);

  if (hasError) {
    return <p>Unable to access goals right now. Please try again later.</p>;
  }

  if (isLoading) return <Loading />;

  const handleSubmit = async (taskData) => {
    await axios.post(`${BASE_URL}/api/tasks`, taskData);
  };

  return <TaskForm title="Add Task" formSubmitHandler={handleSubmit} options={goalOptions} />;
};

export { NewTask };
