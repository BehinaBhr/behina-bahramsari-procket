import { BASE_URL } from "../../utils/constant-variables";
import { GoalForm } from "../../components/GoalForm/GoalForm";
import axios from "axios";

const NewGoal = () => {

    const handleSubmit = async (goalData) => {
        await axios.post(`${BASE_URL}/api/goals`, goalData);
    };

    return <GoalForm title="Add Goal" formSubmitHandler={handleSubmit}/>;

}

export { NewGoal };