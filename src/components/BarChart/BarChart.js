import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import Loading from "../../components/Loading/Loading";
import ConnectionError from "../../components/ConnectionError/ConnectionError";
import FormSelect from "../FormSelect/FormSelect";
import { fetchGoals, fetchGoalProcrastinations } from "../../utils/apiUtils.js";

const BarChart = ({ className }) => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [goalOptions, setGoalDescriptions] = useState([]);
  const [reasonsData, setReasonsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const goals = await fetchGoals();
      const options = [];
      goals.forEach((goal) => {
        options.push({ value: goal.id, text: goal.description });
      });
      setGoalDescriptions(options);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  const handleGoalChange = async (selectedGoal) => {
    setSelectedGoal(selectedGoal);
    try {
      const procrastinations = await fetchGoalProcrastinations(selectedGoal);
      const formattedData = Object.entries(procrastinations).map(([reason, count]) => [reason, count]);
      const reasonsChartData = [["Reason", "Count"], ...formattedData];
      setReasonsData(reasonsChartData);
    } catch (error) {
      setReasonsData([]);
      setHasError(true);
    }
  };

  if (hasError) return <ConnectionError />;
  if (isLoading) return <Loading />;

  return (
    <div className={className}>
      <h3>Procrastiantions per goal</h3>
      <FormSelect field_name="goal" options={goalOptions} valueSetter={handleGoalChange} />
      {selectedGoal && reasonsData.length > 1 && (
        <div style={{ width: "100%", height: "400px" }}>
          <Chart
            chartType="BarChart"
            width="100%"
            height="100%"
            data={reasonsData}
            options={{
              backgroundColor: "#f5fafe",
              chartArea: { width: "50%" },
              hAxis: {
                title: "Count",
                minValue: 0,
                format: "0",
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
  );
};

export default BarChart;
