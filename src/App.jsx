import { useState } from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";
import Logo from "./Logo";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

// const people = [
//   {
//     name: "Abdul",
//     age: 23,
//     salary: 10000,
//   },
//   {
//     name: "Moha",
//     age: 33,
//     salary: 2000,
//   },
// ];

// const raised = Array.from(people, (person) => ({
//   ...people,
//   salary: (person.salary * 120) / 100,
// }));
// console.log(raised);

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAdd(item) {
    setItems((items) => {
      return [...items, item];
    });
  }

  function handleDel(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdate(id) {
    setItems((items) => {
      return items.map((item) =>
        id === item.id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      );
    });
  }

  function clearList() {
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdd={handleAdd} />
      <List
        items={items}
        onDel={handleDel}
        onUpdate={handleUpdate}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
