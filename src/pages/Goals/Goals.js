import "./Goals.scss";
import Table from "../../components/Table/Table.js";
import { SearchAndAddButtonHeader } from "../../components/SearchAndAddButtonHeader/SearchAndAddButtonHeader";
import { BASE_URL } from "../../utils/constant-variables";
import { useState, useEffect } from "react";
import axios from "axios";
import GoalItem from "../../components/GoalItem/GoalItem.js";
import Loading from "../../components/Loading/Loading";
import ConnectionError from "../../components/ConnectionError/ConnectionError";

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [rocketImages, setRocketImages] = useState([]);

  useEffect(() => {
    fetchGoals();
    fetchRocketImages();
  }, []);

  const fetchData = async (path, dataSetter) => {
    try {
      const response = await axios.get(path);
      setIsLoading(false);
      dataSetter(response.data);
      setHasError(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
      console.error(error);
    }
  };

  const fetchGoals = async () => {
    fetchData(`${BASE_URL}/api/goals`, setGoals);
  };

  const fetchRocketImages = async () => {
    fetchData(`${BASE_URL}/api/rockets`, setRocketImages);
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

  if (hasError) return <ConnectionError error={`Unable to access goals right now. Please try again later`} />;
  if (isLoading) return <Loading />;

  if (goals.length === 0) {
    return <p>No goals available</p>;
  }

  return (
    <div>
      <SearchAndAddButtonHeader title="Goals" add_button_target="Goal" add_button_link="/goals/new" />
      <Table
        target={"goal"}
        items={goals}
        ItemComponent={GoalItem}
        columns={["Goal", "Start Date", "End Date", "Progress", "Actions"]}
        deleteSelectedItem={deleteSelectedItem}
      />
      <section className="goals-collection">
        <h3 className="goals-collection__header">Recoket Collection</h3>
        <div className="goals-collection__body">
          {rocketImages.map((rocketImage, index) => (
            <img
              key={index}
              className="goals-collection__body-image"
              src={`${BASE_URL}/${rocketImage}`}
              alt={`Rocket ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export { Goals };
