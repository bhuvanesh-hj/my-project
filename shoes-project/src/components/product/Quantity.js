import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Quantity = (props) => {
  const [value, setValue] = useState(1);

  const increaseValue = () => {
    if (value < 10) {
      setValue((prev) => prev + 1);
    }
  };
  const decreaseValue = () => {
    if (value > 1) {
      setValue((prev) => prev - 1);
    }
  };
  props.value(value);
  return (
    <div>
      <Button size="sm" onClick={decreaseValue}>
        -
      </Button>
      <span
        style={{
          marginLeft: "5px",
          marginRight: "5px",
          border: "1px solid",
          textAlign:"center",
          padding: "0 10px",
          paddingBottom:"4px",
          borderRadius:"2px"
        }}
      >
        {value}
      </span>
      <Button size="sm" onClick={increaseValue}>
        +
      </Button>
    </div>
  );
};

export default Quantity;
