import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import ProductDetail from "../Pages/ProductDetail";

const Products = () => {
  const productsArr = [
    {
      title: "Men Fancy Shirts",

      price: 100,

      imageUrl:
        "https://m.media-amazon.com/images/I/71ShBw4g6GL._UX679_.jpg",
    },

    {
      title: "Men's Poly Cotton",

      price: 50,

      imageUrl:
        "https://m.media-amazon.com/images/I/81GX4lKKt-L._UY879_.jpg",
    },

    {
      title: "Digital Printed Half Sleeve Shirt",

      price: 70,

      imageUrl:
        "https://m.media-amazon.com/images/I/816M5cixMgL._UY879_.jpg",
    },

    {
      title: "Sports Men Pants",

      price: 100,

      imageUrl:
        "https://m.media-amazon.com/images/I/51IivLANozL._UX679_.jpg",
    },
  ];

  // const ProductList = productsArr.map((product) => {
  //   return (
  //     <ProductCard
  //       title={product.title}
  //       price={product.price}
  //       image={product.imageUrl}
  //     />
  //   );
  // });

  return (
    <>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          fontFamily: "monospace",
        }}
      >
        {" "}
        Products
      </h3>
      <div
        style={{
          display: "flex",
          marginTop: "30px",
          flexWrap: "wrap",
          width: "65%",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
        }}
      >
        {productsArr.map((product) => {
          return (
              <ProductCard
                key={product.title}
                item={product}
                title={product.title}
                price={product.price}
                image={product.imageUrl}
              />
          );
        })}
      </div>
    </>
  );
};

export default Products;
