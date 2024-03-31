import { useState, useEffect } from "react";
import { SearchAndAddButtonHeader } from "../../components/SearchAndAddButtonHeader/SearchAndAddButtonHeader";
import { DocumentTitle } from "../../utils/utils";
import Table from "../../components/Table/Table.js";
import TaskItem from "../../components/TaskItem/TaskItem.js";
import Loading from "../../components/Loading/Loading";
import { deleteTask, fetchTasks } from "../../utils/apiUtils.js";
import ConnectionError from "../../components/ConnectionError/ConnectionError";

const Tasks = () => {
  DocumentTitle("Tasks List Page");
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = await fetchTasks();
        setTasks(tasks);
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

  if (tasks.length === 0) {
    return <p>No tasks available</p>;
  }
  return (
    <div>
      <SearchAndAddButtonHeader title="Tasks" add_button_target="Task" add_button_link="/tasks/new" />
      <Table
        target="task"
        items={tasks}
        ItemComponent={TaskItem}
        columns={["Task (goal)", "Due Date", "Actions"]}
        deleteSelectedItem={(taskId) => {
          deleteTask(taskId, triggerReload, setHasError);
        }}
        triggerReload={triggerReload}
      />
    </div>
  );
};

export { Tasks };
