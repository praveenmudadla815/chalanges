import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const IncresehandelSubmit = () => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  };
  const DecreasehandelSubmit = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={IncresehandelSubmit}
        disabled={count === 10}
        style={{ backgroundColor: count === 10 ? "green" : "" }}
      >
        Inc
      </button>
      {count}
      <button
        onClick={DecreasehandelSubmit}
        disabled={count === 0}
        style={{ backgroundColor: count === 0 ? "red" : "" }}
      >
        Dec
      </button>
    </div>
  );
};

export default Counter;
