import "./Table.scss";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

function Table({ target, items, columns, ItemComponent, deleteSelectedItem }) {
  const [deleteItemId, setDeleteItemId] = useState(null);

  return (
    <section className="table">
      <section className="table__labels">
        {columns.map((column) => {
          return <h4 className="table__label">{column}</h4>;
        })}
      </section>

      {items.map((item) => {
        return (
          <>
            <hr className="table__divider" />
            <ItemComponent
              key={item.id}
              {...item}
              onDelete={() => setDeleteItemId(item.id)}
            />
          </>
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
