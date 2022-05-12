import React, { useState } from "react";

const FuncComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };
  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <>
      <h1>Count in FuncComponent: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>==============================================</div>
    </>
  );
};

export default FuncComponent;
