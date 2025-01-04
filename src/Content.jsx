import React from "react";
import ItemsList from "./ItemsList";



const Content = ({ handleCheck, handleDelete, items }) => {
  return (
    <>
      <main>
        {items.length ? (
          <ItemsList 
          handleCheck ={handleCheck}
          handleDelete = {handleDelete}
          items = {items}
          />
        ) : (
          <div>Empty list</div>
        )}
      </main>
    </>
  );
};

export default Content;
