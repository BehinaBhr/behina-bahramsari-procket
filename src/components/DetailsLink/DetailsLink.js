import "./DetailsLink.scss";
import iconAttribute from "../../assets/images/chevron_right-24px.svg";
import { Link } from "react-router-dom";

// A link with an arrow button next to the text
function DetailsLink({ text, to }) {
  return (
    <Link className="details-link" to={to}>
      <img src={iconAttribute} alt="link" />
      <div>{text}</div>
    </Link>
  );
}

export default DetailsLink;
