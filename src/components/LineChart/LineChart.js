import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import Loading from "../Loading/Loading.js";
import ConnectionError from "../ConnectionError/ConnectionError.js";
import { fetchGoals } from "../../utils/apiUtils.js";

const LineChart = ({ className }) => {
  const [goalData, setGoalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const goals = await fetchGoals();
      const chartData = goals.map((goal) => [goal.description, goal.procastinations]);
      setGoalData(chartData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  if (hasError) return <ConnectionError />;
  if (isLoading) return <Loading />;

  return (
    <div className={className}>
      <h3>Goals Procrastinations Count</h3>

      <Chart
        chartType="LineChart"
        width="100%"
        height="25rem"
        data={[["Goal", "Procrastinations"], ...goalData]}
        options={{
          backgroundColor: "transparent",
          hAxis: {
            title: "Goal",
          },
          vAxis: {
            title: "Count",
          },
          chartArea: { width: "65%", height: "60%" },
          legend: {
            position: "top",
          },
          fontSize: 12,
        }}
      />
    </div>
  );
};
export default LineChart;
