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
  const getColor = () => {
    if (count % 2 === 0) {
      return "green"; // Even numbers
    } else if (isPrime(count)) {
      return "pink"; // Prime numbers
    } else {
      return "blue"; // Odd non-prime numbers
    }
  };

  const isPrime = (num) => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  return {
    count,
    Increment,
    Decrement,
    isMin: count === 0,
    isMax: count === MaxCount,
    color: getColor(),
  };
};

export default useCounter;
