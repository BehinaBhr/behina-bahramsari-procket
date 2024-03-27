import { BASE_URL } from "../../utils/constant-variables";
import { GoalForm } from "../../components/GoalForm/GoalForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditGoal = () => {
  const { goalId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [goal, setGoal] = useState({});

  useEffect(() => {
    const fetchGoal = async () => {
      try {
        // const response = await axios.get(
        //     `${BASE_URL}/api/warehouses/${goalId}`
        // );
        // const { description, start_date, end_date } = response.data
        setGoal({
          description: "description",
          start_date: "start_date",
          end_date: "end_date",
        });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };
    fetchGoal();
  }, [goalId]);

  if (hasError) {
    return <p>Unable to access the goal right now. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Is Loading...</p>;
  }

  const handleSubmit = async (goalData) => {
    await axios.put(
      `${BASE_URL}/api/goals/${goalId}`,
      JSON.stringify(goalData)
    );
  };

  return <GoalForm submitFormHandler={handleSubmit} goal={goal} />;
};

export { EditGoal };
