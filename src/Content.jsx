import React from "react";
import LineItem from "./LineItem"; 
const Content = ({handleCheck,handleDelete,items}) => {
  
  return (
    <>
      <main>
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
      </main>
    </>
  );
};

export default Content;
