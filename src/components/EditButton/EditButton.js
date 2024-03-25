import { Link } from "react-router-dom";
import editIcon from "../../assets/images/edit-white-24px.svg";
import "./EditButton.scss";

function EditButton(to) {
  return (
    <Link to={to} className="edit-button">
      <img className="edit-button__icon" src={editIcon} alt="edit icon" />
      <span className="edit-button__text">Edit</span>
    </Link>
  );
}

export default EditButton;
