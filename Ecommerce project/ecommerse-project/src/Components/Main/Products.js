import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
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
          width: "70%",
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
