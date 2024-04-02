import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import Loading from "../Loading/Loading.js";
import ConnectionError from "../ConnectionError/ConnectionError.js";
import { fetchGoals } from "../../utils/apiUtils.js";

// To display a bar chart showing goals progress
const BarChart = ({ className }) => {
  const [goalData, setGoalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const goals = await fetchGoals();
      const chartData = goals.map((goal) => [goal.description, goal.progress]);
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
      <h3>Goals Progress</h3>

      <Chart
        chartType="BarChart"
        height="25rem"
        data={[["Goal", "Progress"], ...goalData]}
        options={{
          backgroundColor: "transparent",
          hAxis: {
            title: "Value",
            minValue: 0,
            maxValue: 100,
            gridlines: { count: 4 },
          },
          vAxis: {
            title: "Goal",
          },
          series: {
            0: { axis: "Progress" },
          },
          axes: {
            y: {
              Progress: { label: "Progress (%)" },
            },
          },
          chartArea: { width: "55%", height: "60%" },
          legend: {
            position: "top",
          },
          fontSize: 12,
          bar: { groupWidth: "90%" },
        }}
      />
    </div>
  );
};
export default BarChart;
