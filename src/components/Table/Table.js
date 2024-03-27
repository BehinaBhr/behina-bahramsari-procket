import "./Table.scss";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

function Table({ target, items, columns, ItemComponent, deleteSelectedItem }) {
  const [deleteItemId, setDeleteItemId] = useState(null);

  return (
    <section className="table">
      <section className="table__labels">
        {columns.map((column) => (
          <h4 className="table__label" key={column}>
            {column}
          </h4>
        ))}
      </section>

      {items.map((item) => {
        return (
          <div key={`table-row-${item.id}`}>
            <hr className="table__divider" />
            <ItemComponent {...item} onDelete={() => setDeleteItemId(item.id)} />
          </div>
        );
      })}
      {deleteItemId && (
        <DeleteModal
          target={target}
          onCancel={() => setDeleteItemId(null)}
          onDelete={() => {
            deleteSelectedItem(deleteItemId);
            setDeleteItemId(null);
          }}
        />
      )}
    </section>
  );
}

export default Table;
