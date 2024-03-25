import "./Table.scss";
import { useState } from "react";

function Table({ items, attrs, ItemComponent }) {
  const [deleteItemId, setDeleteItemId] = useState(null);

  return (
    <section className="table">
      <section className="table__labels">
        {attrs.map((attr) => {
          return <h4 className="table__label">{attr}</h4>;
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
    </section>
  );
}

export default Table;
