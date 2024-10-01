export default function Item({ item, onDel, onUpdate }) {
  return (
    <li>
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onUpdate(item.id)}
        />
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDel(item.id)}>❌</button>
    </li>
  );
}
