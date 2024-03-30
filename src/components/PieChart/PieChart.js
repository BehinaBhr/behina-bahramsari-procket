import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import Loading from "../../components/Loading/Loading";
import ConnectionError from "../ConnectionError/ConnectionError";
import { fetchProcrastinations } from "../../utils/apiUtils.js";

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

  // Format data for the pie chart
  const pieChartData = [["Reason", "Frequency"]];
  for (const reason in procrastinationData) {
    pieChartData.push([reason, procrastinationData[reason]]);
  }
  console.log(pieChartData);

  return (
    <div className={className}>
      <h3>Procrastinations Stats</h3>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={pieChartData}
        options={{
          is3D: true,
          backgroundColor: "#f5fafe",
        }}
      />
    </div>
  );
};

export default PieChart;
