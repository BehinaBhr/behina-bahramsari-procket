import { GoalForm } from "../../components/GoalForm/GoalForm";
import { createGoal } from "../../utils/apiUtils.js";

const NewGoal = () => {
  const handleSubmit = async (goalData) => {
    await createGoal(goalData);
  };

  return <GoalForm title="Add Goal" formSubmitHandler={handleSubmit} />;
};

export { NewGoal };
