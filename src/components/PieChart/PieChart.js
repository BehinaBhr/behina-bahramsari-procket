import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { BASE_URL } from "../../utils/constant-variables";
import Loading from "../../components/Loading/Loading";

const PieChart = () => {
  const [procrastinationData, setProcrastinationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/procrastinations/grouped`);
      setProcrastinationData(response.data);
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

  // Format data for the pie chart
  const pieChartData = [["Reason", "Frequency"]];
  for (const reason in procrastinationData) {
    pieChartData.push([reason, procrastinationData[reason]]);
  }
  console.log(pieChartData);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={pieChartData}
        options={{
          title: "Procrastinations Stats",
          is3D: true,
          pieHole: 0.3,
        }}
      />
    </div>
  );
};

export default PieChart;
