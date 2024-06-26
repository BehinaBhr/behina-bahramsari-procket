import "./Table.scss";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

// A tables used in all lists views
function Table({ target, items, columns, ItemComponent, deleteSelectedItem, triggerReload = null }) {
  const [deleteItemId, setDeleteItemId] = useState(null);
  if (items.length === 0) {
    return <div className="no-children">No {target} available!</div>;
  }

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
            <ItemComponent item={item} onDelete={() => setDeleteItemId(item.id)} triggerReload={triggerReload} />
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
