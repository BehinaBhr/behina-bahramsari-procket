import "../DailyMood/DailyMood.scss";
import iconNeutral from "../../assets/images/neutral.svg";
import iconHappy from "../../assets/images/happy.svg";
import iconSad from "../../assets/images/sad.svg";

function DailyMood() {
  return (
    <div className="daily-mood">
      <img src={iconHappy} alt="happy" />
      <img src={iconNeutral} alt="neutral" />
      <img src={iconSad} alt="sad" />
    </div>
  );
}
export default DailyMood;
