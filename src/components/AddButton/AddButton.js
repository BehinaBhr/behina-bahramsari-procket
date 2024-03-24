import "./AddButton.scss";

//add a new item
function AddButton({message}) {
  return (
    <button className="add-button">{message}</button>
  );
}

export default AddButton;
