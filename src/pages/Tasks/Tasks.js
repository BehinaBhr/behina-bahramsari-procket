import axios from "axios";
import { useState, useEffect } from "react";
import { SearchAndAddButtonHeader } from "../../components/SearchAndAddButtonHeader/SearchAndAddButtonHeader";
import { BASE_URL } from "../../utils/constant-variables";
import Table from "../../components/Table/Table.js";
import TaskItem from "../../components/TaskItem/TaskItem.js";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/tasks`);
      setTasks(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };
  const deleteSelectedItem = async (taskId) => {
    try {
      await axios.delete(`${BASE_URL}/api/tasks/${taskId}`);
      // Fetching updated goals on delete
      fetchTasks();
    } catch {
      setHasError(true);
    }
  };
  if (hasError) {
    return <p>Unable to access tasks right now. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Is Loading...</p>;
  }

  if (tasks.length === 0) {
    return <p>No tasks available</p>;
  }
  return (
    <div>
      <SearchAndAddButtonHeader
        title="Tasks"
        add_button_target="Task"
        add_button_link="tasks/new"
      />
      <Table
        target="task"
        items={tasks}
        ItemComponent={TaskItem}
        columns={["Task (goal)", "Due Date", "Status", "Actions"]}
        deleteSelectedItem={deleteSelectedItem}
      />
    </div>
  );
};

export { Tasks };
