import "./AddButton.scss";
import { Link } from "react-router-dom";

//add a new item
function AddButton({ target, link_to }) {
  return (
    <Link to={link_to}>
      <button className="add-button">+ Add New {target}</button>
    </Link>
  );
}

export default AddButton;
