import { GoalForm } from "../../components/GoalForm/GoalForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { fetchGoal, updateGoal } from "../../utils/apiUtils.js";

const EditGoal = () => {
  const { goalId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [goal, setGoal] = useState({});

  useEffect(() => {
    fetchData();
  }, [goalId]);

  const fetchData = async () => {
    try {
      const goal = await fetchGoal(goalId);
      setGoal(goal);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  if (hasError) {
    return <p>Unable to access the goal with {goalId} right now. Please try again later.</p>;
  }

  if (isLoading) return <Loading />;

  const handleSubmit = async (goalData) => {
    await updateGoal(goalId, goalData);
  };

  return <GoalForm title="Edit Goal" formSubmitHandler={handleSubmit} goal={goal} />;
};

export { EditGoal };
