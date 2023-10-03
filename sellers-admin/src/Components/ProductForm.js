import React, { useEffect, useRef, useState } from "react";
import ProductList from "./ProductList";
import "./ProductForm.css";

const getProductListFromLocalStorage = () => {
  const productList = localStorage.getItem("productId");
  if (productList) {
    return JSON.parse(productList);
  } else {
    return [];
  }
};
const ProductForm = () => {
  const [productId, setProductId] = useState(getProductListFromLocalStorage);
  const [totals, setTotals] = useState(0);
  let total = 0;
  const enteredIdRef = useRef();
  const enteredPriceRef = useRef();
  const enteredNameRef = useRef();

  const addProductHandler = (event) => {
    event.preventDefault();
    const product = {
      id: enteredIdRef.current.value,
      price: enteredPriceRef.current.value,
      name: enteredNameRef.current.value,
    };
    setProductId([...productId, product]);
    enteredIdRef.current.value = "";
    enteredPriceRef.current.value = "";
    enteredNameRef.current.value = "";
  };
  useEffect(() => {
    localStorage.setItem("productId", JSON.stringify(productId));
  }, [productId]);

  const deleteList = (id, total) => {
    setProductId(productId.filter((item) => item.id !== id));
    setTotals((prev) => prev - total);
  };

  const updateTotal = (total) => {
    setTotals(total);
  };

  return (
    <div className="main">
        <div className="first">
      <form onSubmit={addProductHandler}>
        <label>Product ID</label>
        <input type="number" ref={enteredIdRef} required />
        <br />
        <label>Product Price</label>
        <input type="number" ref={enteredPriceRef} required />
        <br />
        <label>Product Name</label>
        <input type="text" ref={enteredNameRef} required />
        <br />
        <button type="submit">Add Product</button>
      </form>
      </div>
      <div className="second">
      <div className="list">
      <div className="productList">
      <h3>Product List :</h3>
      </div>
      <ProductList 
        product={productId}
        total={updateTotal}
        delete={deleteList}
      />
      <h4>Total Amount : Rs {totals}</h4>
      </div>
      </div>
    </div>
  );
};

export default ProductForm;
