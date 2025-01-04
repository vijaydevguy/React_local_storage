import React from "react";
import { FaBeer } from "react-icons/fa";


const ItemsList = ({ handleCheck, handleDelete, items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="item">
          <input
            type="checkbox"
            checked={item.checked}
            id={`checkbox-${item.id}`} // Ensure unique id
            onChange={() => handleCheck(item.id)}
          />
          <label
            style={{ textDecoration: item.checked ? "line-through" : "none" }}
            onDoubleClick={() => handleCheck(item.id)}
          >
            {item.item}
          </label>
          <FaBeer
            role="button"
            tabIndex={0}
            onClick={() => handleDelete(item.id)}
            type="button"
          />
          {/* <button type="button"><FaBeer/></button> */}
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;