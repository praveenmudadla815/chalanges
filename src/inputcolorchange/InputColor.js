import React, { useState } from "react";

const InputColor = () => {
  const [color, setColor] = useState();
  const handelChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <input
        style={{ backgroundColor: color }}
        type="text"
        value={color}
        onChange={handelChange}
      />

      <div style={{ backgroundColor: color, width: "150px" }}></div>
    </div>
  );
};

export default InputColor;
