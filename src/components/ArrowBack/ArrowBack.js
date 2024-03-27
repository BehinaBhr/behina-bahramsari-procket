import arrowBack from "../../assets/images/arrow_back-24px.svg";
import { NavLink, useNavigate } from "react-router-dom";
import "./ArrowBack.scss";

// allow this function to go back to where the user was but also be able to define the path
function ArrowBack() {
  const navigate = useNavigate();
  return (
    <NavLink onClick={() => navigate(-1)} className="arrow">
      <img className="arrow__img" src={arrowBack} alt="arrow-back" />
    </NavLink>
  );
}

export default ArrowBack;
