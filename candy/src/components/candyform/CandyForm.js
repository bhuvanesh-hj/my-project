import React, { useContext, useRef } from "react";
import Input from "../UI/InputCandy";
import candyContext from "../store/CandyContext";

const CandyForm = () => {
  const ctx = useContext(candyContext);
  const candyInputRef = useRef();
  const descriptionInputRef = useRef();
  const priceInputRef = useRef();

  const addCandyHandler = (event) => {
    event.preventDefault();
    const candyItem = {
      name: candyInputRef.current.value,
      description: descriptionInputRef.current.value,
      price: priceInputRef.current.value,
    };
    ctx.additems(candyItem);
    candyInputRef.current.value = "";
    descriptionInputRef.current.value = "";
    priceInputRef.current.value = "";
  };

  return (
    <form>
      <Input
        ref={candyInputRef}
        lable={"Candy "}
        input={{
          type: "text",
          placeholder: "please enter the candy name",
          id: "candyName",
        }}
      />
      <br />
      <Input
        ref={descriptionInputRef}
        lable={"Description "}
        input={{
          type: "text",
          placeholder: "please enter description",
          id: "candyDescription",
        }}
      />
      <br />
      <Input
        ref={priceInputRef}
        lable={"Price "}
        input={{
          type: "number",
          placeholder: "please enter the price",
          id: "candyPrice",
        }}
      />
      <br />
      <button onClick={addCandyHandler}>Add Candy</button>
    </form>
  );
};

export default CandyForm;
