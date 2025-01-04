import React from "react";
import LineItem from "./LineItem";


const ItemsList = ({ handleCheck, handleDelete, items }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem 
        handleCheck ={handleCheck}
        handleDelete = {handleDelete}
        item = {item}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
