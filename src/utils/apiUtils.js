import axios from "axios";
import { BASE_URL } from "./constant-variables";



const deleteGoal = async (goalId, triggerReload, setHasError) => {
    try {
        await axios.delete(`${BASE_URL}/api/goals/${goalId}`);
        triggerReload();
    } catch {
        setHasError(true);
    }
};

const deleteTask = async (taskId, triggerReload, setHasError) => {
    try {
        await axios.delete(`${BASE_URL}/api/tasks/${taskId}`);
        triggerReload();
    } catch {
        setHasError(true);
    }
};

const deleteProcrastinations = async (procrastinationId, triggerReload, setHasError) => {
    try {
        await axios.delete(`${BASE_URL}/api/procrastinations/${procrastinationId}`);
        triggerReload();
    } catch {
        setHasError(true);
    }
};
const fetchData = async (path) => {
    const response = await axios.get(path);
    return response.data
}

const fetchGoalsTasks = async (goalId) => {
    return await fetchData(`${BASE_URL}/api/goals/${goalId}/tasks`);
};

const fetchTaskProcrastinations = async (taskId) => {
  return await fetchData(`${BASE_URL}/api/tasks/${taskId}/procrastinations`);
};

const fetchGoalProcrastinations = async (goalId) => {
  return await fetchData(`${BASE_URL}/api/goals/${goalId}/procrastinations`);
};

const fetchGoal = async (goalId) => {
  return await fetchData(`${BASE_URL}/api/goals/${goalId}`);
};

const fetchTask = async (taskId) => {
  return await fetchData(`${BASE_URL}/api/tasks/${taskId}`);
};

const fetchTasks = async (setTasks) => {
  return await fetchData(`${BASE_URL}/api/tasks`, setTasks)
};

const fetchGoals = async () => {
  return await fetchData(`${BASE_URL}/api/goals`)
};

const fetchProcrastinations = async () => {
  return await fetchData(`${BASE_URL}/api/procrastinations/grouped`)
};

const fetchRocketImages = async () => {
  return await fetchData(`${BASE_URL}/api/rockets`);
};

const updateGoal = async (goalId, goalData) => {
    await axios.put(`${BASE_URL}/api/goals/${goalId}`, goalData);
};

const createGoal = async (goalData) => {
    await axios.post(`${BASE_URL}/api/goals/`, goalData);
};

const updateTask = async (taskId, taskData) => {
    console.log(taskId)
    await axios.put(`${BASE_URL}/api/tasks/${taskId}`, taskData);
};

const createTask = async (taskData) => {
    await axios.post(`${BASE_URL}/api/tasks/`, taskData);
};

const createProcrastinations = async (ProcrastinationsData) => {
    await axios.post(`${BASE_URL}/api/procrastinations/`, ProcrastinationsData);
};

export {
    deleteGoal,
    deleteTask,
    deleteProcrastinations,
    fetchGoalsTasks,
    fetchTaskProcrastinations,
    fetchGoalProcrastinations,
    fetchGoal,
    fetchTasks,
    fetchTask,
    fetchGoals,
    fetchProcrastinations,
    fetchRocketImages,
    updateGoal,
    createGoal,
    updateTask,
    createTask,
    createProcrastinations
}