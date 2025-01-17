import React from "react";
import LineItem from "./LineItem"; 
const Content = ({handleCheck,handleDelete,items}) => {
  
  return (
    <>
      <main>
      {(items.length) ? (
        <ul>
          {items.map((item) => (
            <LineItem
              key={item.id}
              item={item}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
        ): (<p>Add items</p>)}
      </main>
    </>
  );
};

export default Content;
