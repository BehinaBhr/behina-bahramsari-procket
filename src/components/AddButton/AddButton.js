import "./AddButton.scss";
import { Link } from "react-router-dom";

// Add a new item
function AddButton({ target, link_to, className = "" }) {
  return (
    <Link to={link_to} className={className}>
      <button className="add-button">+ Add New {target}</button>
    </Link>
  );
}

export default AddButton;
