import iconDelete from "../../assets/images/trash.svg";
import "./DeleteButton.scss";

function DeleteButton({ onClick }) {
  return (
    <button className="delete-button" onClick={onClick}>
      <img src={iconDelete} alt="delete" />
    </button>
  );
}

export default DeleteButton;
