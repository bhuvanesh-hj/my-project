import React from "react";
import { CartState } from "../../context/Context";
import SingleProduct from "./SingleProduct";
import "./home.css";
import Filter from "./Filter";

const Home = () => {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, byRating, bySearchQuery, sort },
  } = CartState();

  const transformedProducts = () => {
    let sortedproducts = products;
    if (sort) {
      sortedproducts = sortedproducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (byStock) {
      sortedproducts = sortedproducts.filter((c) => c.inStock);
    }
    if (byFastDelivery) {
      sortedproducts = sortedproducts.filter((c) => c.fastDelivery);
    }
    if (byRating) {
      sortedproducts = sortedproducts.filter((c) => c.ratings >= byRating);
    }
    if (bySearchQuery) {
      sortedproducts = sortedproducts.filter((c) =>
        c.name.toLowerCase().includes(bySearchQuery)
      );
    }
    return sortedproducts;
  };

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transformedProducts().map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
