import "./Stats.scss";
import PieChart from "../../components/PieChart/PieChart";
import ColumnChart from "../../components/ColumnChart/ColumnChart";
import CalenderChart from "../../components/CalenderChart/CalenderChart";

const Stats = () => {
  return (
    <div>
      <h1>Stats Page</h1>
      <PieChart />
      <ColumnChart />
      <CalenderChart />
    </div>
  );
};

export { Stats };
