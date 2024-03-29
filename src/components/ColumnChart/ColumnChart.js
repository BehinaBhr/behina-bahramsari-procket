import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { BASE_URL } from "../../utils/constant-variables";
import Loading from "../../components/Loading/Loading";
import ConnectionError from "../../components/ConnectionError/ConnectionError";
import "./ColumnChart.scss";

const ColumnChart = ({ className }) => {
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
      const chartData = goals.map((goal) => [goal.description, goal.progress, goal.procastinations]);
      setGoalData(chartData);
      setIsLoading(false);
      // setHasError(true);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  if (hasError) return <ConnectionError />;

  if (isLoading) return <Loading />;

  return (
    <div className={className}>
      <h3>Progress and Procrastinations for Goals</h3>

      <Chart
        chartType="ColumnChart"
        width="100%"
        height="25rem"
        data={[["Goal", "Progress", "Procrastinations"], ...goalData]}
        options={{
          backgroundColor: "#f5fafe",
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
