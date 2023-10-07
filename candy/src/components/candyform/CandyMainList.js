import React, { useContext } from "react";
import candyContext from "../store/CandyContext";
const CandyMainList = () => {
  const ctxList = useContext(candyContext);
  const itemsList = ctxList.items.map((item) => (
    <li key={Math.random().toString()}>
      {item.name}--{item.description}--{item.price}
    <button onClick={()=>ctxList.additemsToCart({...item,amount:1})}>Buy one</button>
    <button onClick={()=>ctxList.additemsToCart({...item,amount:2})}>Buy two</button>
    <button onClick={()=>ctxList.additemsToCart({...item,amount:3})}>Buy three</button>
    </li>
  ));
  return (
    <div>
      <ul>{itemsList}</ul>
    </div>
  );
};

export default CandyMainList;
