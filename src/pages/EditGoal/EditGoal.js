import { GoalForm } from "../../components/GoalForm/GoalForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DocumentTitle } from "../../utils/utils";
import Loading from "../../components/Loading/Loading";
import { fetchGoal, updateGoal } from "../../utils/apiUtils.js";
import ConnectionError from "../../components/ConnectionError/ConnectionError";

const EditGoal = () => {
  DocumentTitle("Edit Goal Page");
  const { goalId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [goal, setGoal] = useState({});

  useEffect(() => {
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

    fetchData();
  }, [goalId]);

  if (hasError) return <ConnectionError error={`Unable to access the goal with ${goalId} right now. Please try again later.`} />;
  if (isLoading) return <Loading />;

  const handleSubmit = async (goalData) => {
    await updateGoal(goalId, goalData);
  };

  return <GoalForm title="Edit Goal" formSubmitHandler={handleSubmit} goal={goal} />;
};

export { EditGoal };
