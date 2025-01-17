import React from "react";
import LineItem from "./LineItem";

const ItemsList = ({ handleCheck, handleDelete, items }) => {
  return (
    <>
        {items.map((item) => (
          <LineItem
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            item={item}
          />
        ))}
    </>
  );
};

export default ItemsList;
