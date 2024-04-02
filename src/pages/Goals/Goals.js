import "./Goals.scss";
import Table from "../../components/Table/Table.js";
import { SearchAndAddButtonHeader } from "../../components/SearchAndAddButtonHeader/SearchAndAddButtonHeader";
import { BASE_URL } from "../../utils/constant-variables";
import { useState, useEffect } from "react";
import { DocumentTitle } from "../../utils/utils";
import GoalItem from "../../components/GoalItem/GoalItem.js";
import Loading from "../../components/Loading/Loading";
import ConnectionError from "../../components/ConnectionError/ConnectionError";
import { deleteGoal, fetchGoals, fetchRocketImages } from "../../utils/apiUtils.js";

const Goals = () => {
  DocumentTitle("Goals List Page");
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [rocketImages, setRocketImages] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const goals = await fetchGoals();
        const rocketImages = await fetchRocketImages();
        setGoals(goals);
        setRocketImages(rocketImages);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchData();
  }, [reload]);

  const triggerReload = () => {
    setReload(!reload);
  };

  if (hasError) return <ConnectionError error={`Unable to access goals right now. Please try again later`} />;
  if (isLoading) return <Loading />;

  return (
    <div>
      <SearchAndAddButtonHeader title="Goals" add_button_target="Goal" add_button_link="/goals/new" />
      <Table
        target={"goal"}
        items={goals}
        ItemComponent={GoalItem}
        columns={["Goal", "Start Date", "End Date", "Progress", "Action"]}
        deleteSelectedItem={(goalId) => {
          deleteGoal(goalId, triggerReload, setHasError);
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
          {rocketImages.length === 0 && <div> No Rocket Available, Try Harder To Earn Rocket. </div>}
        </div>
      </section>
    </div>
  );
};

export { Goals };
