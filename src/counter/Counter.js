import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const IncresehandelSubmit = () => {
    setCount((count) => count + 1);
  };
  const DecreasehandelSubmit = () => {
    setCount((count) => count - 1);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={IncresehandelSubmit}>Inc</button>
      {count}
      <button onClick={DecreasehandelSubmit}>Dec</button>
    </div>
  );
};

export default Counter;
