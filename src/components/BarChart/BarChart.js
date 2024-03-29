import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { BASE_URL } from "../../utils/constant-variables";
import Loading from "../../components/Loading/Loading";

const BarChart = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [goalDescriptions, setGoalDescriptions] = useState([]);
  const [reasonsData, setReasonsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/goals`);
      const goals = response.data;
      setGoalDescriptions(goals);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  const handleGoalChange = async (event) => {
    const selectedDescription = event.target.value;
    const selectedGoal = goalDescriptions.find((goal) => goal.description === selectedDescription);
    setSelectedGoal(selectedGoal);
    try {
      const response = await axios.get(`${BASE_URL}/api/goals/${selectedGoal.id}/procrastinations`);
      const procrastinations = response.data;
      const formattedData = Object.entries(procrastinations).map(([reason, count]) => [reason, count]);
      const reasonsChartData = [["Reason", "Count"], ...formattedData];
      console.log(reasonsChartData)
      setReasonsData(reasonsChartData);
    } catch (error) {
      setReasonsData([]);
      setHasError(true);
    }
  };

  if (hasError) {
    return <p>Unable to access data right now. Please try again later.</p>;
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <select value={selectedGoal ? selectedGoal.description : ""} onChange={handleGoalChange}>
            <option value="">Select a goal</option>
            {goalDescriptions.map((goal, index) => (
              <option key={index} value={goal.description}>
                {goal.description}
              </option>
            ))}
          </select>
          {selectedGoal && reasonsData.length > 1 && (
            <div style={{ width: "100%", height: "400px" }}>
              <Chart
                chartType="BarChart"
                width="100%"
                height="100%"
                data={reasonsData}
                options={{
                  title: `Procrastination Reasons for Goal ${selectedGoal.id}`,
                  chartArea: { width: "50%" },
                  hAxis: {
                    title: "Count",
                    minValue: 0,
                    format: "0"
                  },
                  vAxis: {
                    title: "Reason",
                  },
                }}
              />
            </div>
          )}
          {selectedGoal && reasonsData.length <= 1 && <div> No Procrastination Recorded </div>}
        </div>
      )}
    </div>
  );
};

export default BarChart;
