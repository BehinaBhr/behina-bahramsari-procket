import iconDelete from "../../assets/images/delete_outline-24px.svg";
import "./DeleteButton.scss";

function DeleteButton({ onClick }) {
  return (
    <button className="delete-button" onClick={onClick}>
      <img src={iconDelete} alt="delete" />
    </button>
  );
}

export default DeleteButton;
