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

  const getColor = () => {
    if (count % 2 === 0) {
      return "green";
    } else if (isPrime(count)) {
      return "pink";
    } else {
      return "blue";
    }
  };
  const isPrime = (num) => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
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
      <div style={{ backgroundColor: getColor(), padding: "10px" }}>
        {" "}
        {count}
      </div>

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
