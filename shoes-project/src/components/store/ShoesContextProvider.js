import React, { useState, useEffect, useCallback } from "react";
import ShoesContext from "./ShoesContext";

const ShoesContextProvider = (props) => {
  const [ProductList, setProductList] = useState([]);
  const [CartList, setCartList] = useState([]);

  const fetchList = () => {
    return fetch(
      "https://crudcrud.com/api/c8bb68d5d5044560885f6f6621b710e4/products"
    ).then((res) => {
      return res.json().then((data) => {
        setProductList(data);
      });
    });
  };
  const fetchCart = () => {
    return fetch(
      "https://crudcrud.com/api/c8bb68d5d5044560885f6f6621b710e4/cart"
    ).then((res) => {
      return res.json().then((data) => {
        setCartList(data);
      });
    });
  };

  const addProductHandler = (item) => {
    fetch(
      "https://crudcrud.com/api/c8bb68d5d5044560885f6f6621b710e4/products",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      return res.json().then(() => fetchList());
    });
  };

  const addToCartHandler = (item) => {
    const existItemIndex = CartList.findIndex(
      (product) => product.name === item.name
    );
    const existItem = CartList[existItemIndex];
    if (existItem) {
      alert("product already there in the cart")
    }else{
    fetch(
      "https://crudcrud.com/api/c8bb68d5d5044560885f6f6621b710e4/Cart",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      return res.json().then(() => fetchCart());
    });
  }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const purchaseHandler = () => {
    return CartList.map((product) => {
      return fetch(
        `https://crudcrud.com/api/c8bb68d5d5044560885f6f6621b710e4/Cart/${product._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => fetchCart());
    });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const shoesContext = {
    productList: ProductList,
    cartList: CartList,
    addProduct: addProductHandler,
    addCart: addToCartHandler,
    pruchase: purchaseHandler,
  };
  return (
    <ShoesContext.Provider value={shoesContext}>
      {props.children}
    </ShoesContext.Provider>
  );
};

export default ShoesContextProvider;
