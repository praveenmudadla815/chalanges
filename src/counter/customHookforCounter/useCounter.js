import React, { useState } from "react";

const useCounter = (intialCount, MaxCount) => {
  const [count, setCount] = useState(intialCount);

  const Increment = () => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  };
  const Decrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };
  return {
    count,
    Increment,
    Decrement,
    isMin: count === 0,
    isMax: count === MaxCount,
  };
};

export default useCounter;
