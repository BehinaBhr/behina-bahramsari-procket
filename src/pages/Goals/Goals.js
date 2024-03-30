import "./Goals.scss";
import Table from "../../components/Table/Table.js";
import { SearchAndAddButtonHeader } from "../../components/SearchAndAddButtonHeader/SearchAndAddButtonHeader";
import { BASE_URL } from "../../utils/constant-variables";
import { useState, useEffect } from "react";
import GoalItem from "../../components/GoalItem/GoalItem.js";
import Loading from "../../components/Loading/Loading";
import ConnectionError from "../../components/ConnectionError/ConnectionError";
import { deleteGoal, fetchGoals, fetchRocketImages } from "../../utils/apiUtils.js";

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [rocketImages, setRocketImages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const goals = await fetchGoals();
      const rocketInages = await fetchRocketImages();
      setGoals(goals);
      setRocketImages(rocketInages);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
        deleteSelectedItem={(goalId) => {
          deleteGoal(goalId, fetchGoals, setHasError);
        }}
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
