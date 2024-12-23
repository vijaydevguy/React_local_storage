import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Earn");

  const [count, setCount] = useState(1);

  function handleNameChange() {
    const names = ["Earn", "Grow", "Give"];

    const int = Math.floor(Math.random() * 3);
    console.log(names[int]);
    setName(names[int]);
  }

  const handleCount = (e) => {
    if (e.target.textContent === "+") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <main>
        <p>Let's {name}</p>
        <button onClick={() => handleNameChange()}>Change text</button>
        <br />
        <div className="counter">
          <button onClick={handleCount}>-</button>
          <span>{count}</span>
          <button onClick={handleCount}>+</button>
        </div>
      </main>
    </>
  );
};

export default Content;
