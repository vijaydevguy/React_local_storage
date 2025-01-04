import React from "react";
import { useState } from "react";
import { FaBeer } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Wake up early morning",
    },
    {
      id: 2,
      checked: false,
      item: "Fresh up daily first",
    },
    {
      id: 3,
      checked: true,
      item: "Do workout",
    },
  ]);

  const handleCheck = (id) => {
    const updatedItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <main>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                checked={item.checked}
                id={`checkbox-${item.id}`} // Ensure unique id
                onChange={() => handleCheck(item.id)}
              />
              <span style={{ width: "100%" }}>{item.item}</span>
              <FaBeer type="button" />
              {/* <button type="button"><FaBeer/></button> */}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Content;
