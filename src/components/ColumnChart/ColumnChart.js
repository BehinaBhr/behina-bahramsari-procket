import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import Loading from "../Loading/Loading.js";
import ConnectionError from "../ConnectionError/ConnectionError.js";
import FormSelect from "../FormSelect/FormSelect.js";
import { fetchGoals, fetchGoalProcrastinations } from "../../utils/apiUtils.js";
import "./ColumnChart.scss";

// Dynamic column chart displaying procrastination data per selected goal
const ColumnChart = ({ className }) => {
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
    <div className={`column-chart ${className}`}>
      <h3>Procrastiantions per goal</h3>
      <FormSelect
        field_name="goal"
        options={goalOptions}
        valueSetter={handleGoalChange}
        className="column-chart__options"
      />
      {selectedGoal && reasonsData.length > 1 && (
        <div style={{ width: "100%", height: "400px" }}>
          <Chart
            chartType="ColumnChart"
            height="100%"
            data={reasonsData}
            options={{
              backgroundColor: "transparent",
              chartArea: { width: "80%" },
              hAxis: {
                title: "Reason",
              },
              vAxis: {
                title: "Count",
                minValue: 0,
                format: "0",
              },
              legend: {
                position: "top",
              },
            }}
          />
        </div>
      )}
      {selectedGoal && reasonsData.length <= 1 && <div> No Procrastination Recorded </div>}
    </div>
  );
};

export default ColumnChart;
