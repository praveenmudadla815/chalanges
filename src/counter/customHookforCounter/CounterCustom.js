import React from "react";
import useCounter from "./useCounter";

const CounterCustom = () => {
  const { count, Increment, Decrement, isMin, isMax } = useCounter(0, 10);
  return (
    <div>
      <button
        onClick={Increment}
        style={{ backgroundColor: isMax ? "green" : "" }}
      >
        Inc
      </button>
      {count}
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
