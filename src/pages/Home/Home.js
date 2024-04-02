import "./Home.scss";
import { useEffect, useState } from "react";
import TaskItem from "../../components/TaskItem/TaskItem.js";
import Table from "../../components/Table/Table.js";
import Loading from "../../components/Loading/Loading";
import ConnectionError from "../../components/ConnectionError/ConnectionError";
import { deleteTask, fetchPastTasks, fetchOnGoingTasks } from "../../utils/apiUtils.js";
import AddButton from "../../components/AddButton/AddButton";
import DailyMood from "../../components/DailyMood/DailyMood";

const Home = () => {
  const [pastTasks, setPastTasks] = useState([]);
  const [onGoingTasks, setOngoingTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pastTasks = await fetchPastTasks();
        const onGoingTasks = await fetchOnGoingTasks();
        setPastTasks(pastTasks);
        setOngoingTasks(onGoingTasks);
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

  if (hasError) return <ConnectionError error={`Unable to access tasks right now. Please try again later`} />;
  if (isLoading) return <Loading />;

  return (
    <div className="home">
      <section className="home-section home-section--centered">
        <div className="home-section-mood">
          <h2 className="home-section__header home-section__header-mood">Daily Mood</h2>
          <DailyMood />
        </div>
        <div className="home-section-actions">
          <AddButton target="Task" link_to="/tasks/new" className="home-actions__add-task" />
          <AddButton target="Goal" link_to="/goals/new" className="home-actions__add-goal" />
        </div>
      </section>
      <hr className="home__divider" />
      <section className="home-section home-section-ongoing">
        <h2 className="home-section__header">Ongoing Tasks</h2>
        <Table
          target="ongoing task"
          items={onGoingTasks}
          ItemComponent={TaskItem}
          columns={["Task (goal)", "Due Date", "Actions"]}
          deleteSelectedItem={(taskId) => {
            deleteTask(taskId, triggerReload, setHasError);
          }}
          triggerReload={triggerReload}
        />
      </section>
      <section className="home-section home-section-past">
        <h2 className="home-section__header">Past Tasks</h2>
        <Table
          target="past task"
          items={pastTasks}
          ItemComponent={TaskItem}
          columns={["Task (goal)", "Due Date", "Actions"]}
          deleteSelectedItem={(taskId) => {
            deleteTask(taskId, triggerReload, setHasError);
          }}
          triggerReload={triggerReload}
        />
      </section>
    </div>
  );
};

export { Home };
