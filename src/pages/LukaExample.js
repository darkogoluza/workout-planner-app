import React, { useState } from "react";

const LukaExample = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="counter">{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default LukaExample;
