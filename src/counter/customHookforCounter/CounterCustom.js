import React from "react";
import useCounter from "./useCounter";

const CounterCustom = () => {
  const { count, Increment, Decrement, isMin, isMax, color } = useCounter(
    0,
    10
  );
  return (
    <div>
      <button
        onClick={Increment}
        style={{ backgroundColor: isMax ? "green" : "" }}
      >
        Inc
      </button>
      <div style={{ backgroundColor: color, padding: "10px", margin: "10px" }}>
        {count}
      </div>
      <button
        onClick={Decrement}
        style={{ backgroundColor: isMin ? "red" : "" }}
      >
        Dec
      </button>
    </div>
  );
};

export default CounterCustom;
