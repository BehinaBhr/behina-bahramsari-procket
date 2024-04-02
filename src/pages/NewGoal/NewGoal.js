import { GoalForm } from "../../components/GoalForm/GoalForm";
import { createGoal } from "../../utils/apiUtils.js";
import { DocumentTitle } from "../../utils/utils";

const NewGoal = () => {
  DocumentTitle("Add New Goal Page");
  const handleSubmit = async (goalData) => {
    await createGoal(goalData);
  };

  return <GoalForm title="Add Goal" formSubmitHandler={handleSubmit} />;
};

export { NewGoal };
