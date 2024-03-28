import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { BASE_URL } from "../../utils/constant-variables";

const CalenderChart = () => {
  const [taskData, setTaskData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/tasks`);
      const tasks = response.data;
      // Prepare data for chart
      const chartData = tasks.map((task) => {
        const date =  new Date(task.due_date);
        return [date, task.is_completed ? 1 : 0];
      });
      setTaskData(chartData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };
  if (hasError) {
    return <p>Unable to access procrastinations right now. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Is Loading...</p>;
  }

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Chart
        chartType="Calendar"
        width="100%"
        height="400px"
        data={[
          [
            { type: "date", id: "Date" },
            { type: "number", id: "Completion" },
          ],
          ...taskData,
        ]}
        options={{
          title: "Task Completion Calendar",
          calendar: {
            cellSize: 20,
            monthOutlineColor: {
              stroke: "none",
              strokeOpacity: 0.0,
              strokeWidth: 0,
            },
          },
          colorAxis: { minValue: 0, colors: ["#FFFFFF", "#4285F4"] },
        }}
      />
    </div>
  );
};
export default CalenderChart;
