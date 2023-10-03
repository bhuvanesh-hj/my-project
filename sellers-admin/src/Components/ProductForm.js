import React, { useEffect, useMemo, useRef, useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState();
  //   const [electronics, setElectronics] = useState([]);
  //   const [food, setFood] = useState([]);
  //   const [colthing, setClothing] = useState([]);

  const enteredIdRef = useRef();
  const enteredPriceRef = useRef();
  const enteredNameRef = useRef();
  const enteredCategoryRef = useRef();

  const addProductHandler = (event) => {
    event.preventDefault();
    const product = {
      id: enteredIdRef.current.value,
      price: enteredPriceRef.current.value,
      name: enteredNameRef.current.value,
      category: enteredCategoryRef.current.value,
    };
    setProductId([...productId, product]);
    setSelectedCategory(product.category);
    enteredIdRef.current.value = "";
    enteredPriceRef.current.value = "";
    enteredNameRef.current.value = "";
    enteredCategoryRef.current.value = "";
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
          <label>Select category</label>
          <select ref={enteredCategoryRef} className="select">
            <option value="Electronics">Electronics</option>
            <option value="Food">Food</option>
            <option value="Clothing">Clothing</option>
          </select>
          <button type="submit">Add Product</button>
        </form>
      </div>
      <div className="second">
        <div className="list">
          <div className="productList">
            <h3>Product List :</h3>
          </div>
          <div>
            <h5>Electronis</h5>
            <ProductList
              product={productId.filter(
                (item) => item.category === 'Electronics'
              )}
              total={updateTotal}
              delete={deleteList}
            />
          </div>
          <div>
            <h5>Food</h5>
            <ProductList
              product={productId.filter(
                (item) => item.category === 'Food'
              )}
              total={updateTotal}
              delete={deleteList}
            />
          </div>
          <div>
            <h5>Clothing</h5>
            <ProductList
              product={productId.filter(
                (item) => item.category === 'Clothing'
              )}
              total={updateTotal}
              delete={deleteList}
            />
          </div>
          {/* <h4>Total electronics amount : Rs {totals}</h4> */}
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
