import Table from "../../components/Table/Table.js";
import { SearchAndAddButtonHeader } from "../../components/SearchAndAddButtonHeader/SearchAndAddButtonHeader";
import { BASE_URL } from "../../utils/constant-variables";
import { useState, useEffect } from "react";
import axios from "axios";
import GoalItem from "../../components/GoalItem/GoalItem.js";
import Loading from "../../components/Loading/Loading";

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

  const deleteSelectedItem = async (goalId) => {
    try {
      await axios.delete(`${BASE_URL}/api/goals/${goalId}`);
      // Fetching updated goals on delete
      fetchGoals();
    } catch {
      setHasError(true);
    }
  };

  if (hasError) {
    return <p>Unable to access goals right now. Please try again later.</p>;
  }

  if (isLoading) return <Loading />;

  if (goals.length === 0) {
    return <p>No goals available</p>;
  }

  return (
    <div>
      <SearchAndAddButtonHeader
        title="Goals"
        add_button_target="Goal"
        add_button_link="/goals/new"
      />
      <Table
        target={"goal"}
        items={goals}
        ItemComponent={GoalItem}
        columns={["Goal", "Start Date", "End Date", "Progress", "Actions"]}
        deleteSelectedItem={deleteSelectedItem}
      />
    </div>
  );
};

export { Goals };
