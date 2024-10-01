import { useState } from "react";

export default function Form({ onAdd }) {
  const [qty, setQty] = useState(1);
  const [description, setDescription] = useState("");
  function handleSubmit(evt) {
    evt.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity: qty,
      packed: false,
    };

    onAdd(newItem);

    setQty(1);
    setDescription("");
  }
  return (
    <div className="add-form">
      <h3>What do u need for this trip?</h3>
      <form onSubmit={handleSubmit}>
        <select value={qty} onChange={(evt) => setQty(evt.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
            return (
              <option key={num} value={num}>
                {num}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
