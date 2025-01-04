import React from 'react'
import { FaBeer } from "react-icons/fa";


const LineItem = ({ handleCheck, handleDelete, item}) => {
  return (
    <li key={item.id} className="item">
          <input
            type="checkbox"
            checked={item.checked}
            id={`checkbox-${item.id}`}
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
  )
}

export default LineItem