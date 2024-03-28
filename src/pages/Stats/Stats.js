import "./Stats.scss";
import PieChart from "../../components/PieChart/PieChart";
import ColumnChart from "../../components/ColumnChart/ColumnChart";
import BarChart from "../../components/BarChart/BarChart";


const Stats = () => {
  return (
    <div>
      <h1>Stats Page</h1>
      <PieChart />
      <ColumnChart />
      <BarChart />
    </div>
  );
};

export { Stats };
