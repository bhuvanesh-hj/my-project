import React from "react";
import './ProductForm.css'

const ProductList = (props) => {
  let total = 0;
  return (
    <div>
      {props.product.length === 0 ? (
        <i>List is empty.</i>
      ) : (
        props.product.map((item) => {
          total += +item.price;
          return (
            <li key={item.id}>
              {props.total(total)}
              {item.name}--{item.price}
              {"   "}
              <button onClick={() => props.delete(item.id, total)}>
                Delete
              </button>
            </li>
          );
        })
      )}
    </div>
  );
};

export default ProductList;
