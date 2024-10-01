import { useState } from "react";
import Item from "./Item";

export default function List({ items, onDel, onUpdate, onClearList }) {
  const [sort, setSort] = useState("input");

  let sortedItems;

  if (sort === "input") sortedItems = items;

  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) + Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onDel={onDel} onUpdate={onUpdate} />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(evt) => setSort(evt.target.value)}>
          <option value="input">Sort By input</option>
          <option value="description">Sort By description</option>
          <option value="packed">Sort By packed</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
