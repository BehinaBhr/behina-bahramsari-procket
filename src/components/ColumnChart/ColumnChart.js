import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { BASE_URL } from "../../utils/constant-variables";
import Loading from "../../components/Loading/Loading";

const ColumnChart = () => {
  const [goalData, setGoalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/goals`);
      const goals = response.data;
      // Prepare data for chart
      const chartData = goals.map((goal) => [goal.description, goal.progress, goal.procastinations]);
      setGoalData(chartData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };
  if (hasError) {
    return <p>Unable to access procrastinations right now. Please try again later.</p>;
  }

  if (isLoading) return <Loading />;

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="100%"
        data={[["Goal", "Progress", "Procrastinations"], ...goalData]}
        options={{
          title: "Progress and Procrastinations for Goals",
          hAxis: {
            title: "Goal",
          },
          vAxis: {
            title: "Value",
            minValue: 0,
          },
          series: {
            0: { axis: "Progress" },
            1: { axis: "Procrastinations" },
          },
          axes: {
            y: {
              Progress: { label: "Progress (%)" },
              Procrastinations: { label: "Procrastinations" },
            },
          },
        }}
      />
    </div>
  );
};
export default ColumnChart;
