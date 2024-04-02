import "./DeleteModal.scss";

// A confirmation modal displayed after the delete button being clicked
function DeleteModal({ target, onDelete, onCancel }) {
  return (
    <section className="delete-modal__background">
      <section className="delete-modal">
        <section className="delete-modal__content">
          <h1 className="delete-modal__content-header">Are you sure?</h1>
          <p className="delete-modal__content-body">
            Are you sure you want to delete this {target}? You won't be able to
            undo this action.
          </p>
        </section>
        <div className="delete-modal__buttons">
          <button
            className="delete-modal__button delete-modal__button-cancel"
            onClick={onCancel}>
            Cancel
          </button>
          <button
            className="delete-modal__button delete-modal__button-delete"
            onClick={onDelete}>
            Delete
          </button>
        </div>
      </section>
    </section>
  );
}

export default DeleteModal;
