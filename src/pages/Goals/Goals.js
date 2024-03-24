import GoalsTable from "../../components/GoalsTable/GoalsTable.js";
import { SearchAndAddButtonHeader } from "../../components/SearchAndAddButtonHeader/SearchAndAddButtonHeader";
import { BASE_URL } from "../../utils/constant-variables";
import { useState, useEffect } from "react";
import axios from "axios";

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/goals`);
      setGoals(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  if (hasError) {
    return <p>Unable to access goals right now. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Is Loading...</p>;
  }

  if (goals.length === 0) {
    return <p>No goals available</p>;
  }

  return (
    <>
      <SearchAndAddButtonHeader
        title="Goals"
        add_button_target="Goal"
        add_button_link="goals/new"
      />

      <GoalsTable goals={goals} />
    </>
  );
};

export { Goals };
