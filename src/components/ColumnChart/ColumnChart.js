import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import Loading from "../../components/Loading/Loading";
import ConnectionError from "../../components/ConnectionError/ConnectionError";
import "./ColumnChart.scss";
import { fetchGoals } from "../../utils/apiUtils.js";

const ColumnChart = ({ className }) => {
  const [goalData, setGoalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const goals = await fetchGoals();
      const chartData = goals.map((goal) => [goal.description, goal.progress, goal.procastinations]);
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
