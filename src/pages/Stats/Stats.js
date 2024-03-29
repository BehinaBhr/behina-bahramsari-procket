import "./Stats.scss";
import PieChart from "../../components/PieChart/PieChart";
import ColumnChart from "../../components/ColumnChart/ColumnChart";
import BarChart from "../../components/BarChart/BarChart";

const Stats = () => {
  return (
    <div className="stats">
      <PieChart className="stats__chart"/>
      <ColumnChart className="stats__chart" />
      <BarChart className="stats__chart" />
    </div>
  );
};

export { Stats };
