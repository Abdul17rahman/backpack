export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <p>Please add some item in your backpack.</p>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percetage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <p>
        {percetage === 100
          ? "Congrats, you got everything done. ✅"
          : `You have ${numItems} items, u have already packed ${numPacked} (
          ${percetage}%).`}
      </p>
    </footer>
  );
}
