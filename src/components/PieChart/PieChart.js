import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import Loading from "../../components/Loading/Loading";
import ConnectionError from "../ConnectionError/ConnectionError";
import { fetchProcrastinations } from "../../utils/apiUtils.js";

// Pie chart component displaying distribution of procrastination reasons
const PieChart = ({ className }) => {
  const [procrastinationData, setProcrastinationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const procrastinations = await fetchProcrastinations();
      setProcrastinationData(procrastinations);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  if (hasError) return <ConnectionError />;
  if (isLoading) return <Loading />;

  const pieChartData = [["Reason", "Frequency"]];
  for (const reason in procrastinationData) {
    pieChartData.push([reason, procrastinationData[reason]]);
  }

  return (
    <div className={className}>
      <h3>Procrastinations Distribution</h3>
      <Chart
        chartType="PieChart"
        data={pieChartData}
        height="21rem"
        options={{
          is3D: true,
          backgroundColor: "transparent",
          height: "400",
          chartArea: { width: "70%", height: "60%" },
          legend: {
            position: "top",
            maxLines: 5,
          },
          fontSize: 12,
        }}
      />
    </div>
  );
};

export default PieChart;
