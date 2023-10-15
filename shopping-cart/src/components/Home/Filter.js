import React from "react";
import { Button, FormCheck, Ra } from "react-bootstrap";
import "./home.css";
import Rating from "./Rating";
import { CartState } from "../../context/Context";

const Filter = () => {
  const {
    productState: { byStock, byFastDelivery, byRating, sort },
    productDispatch,
  } = CartState();

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <FormCheck
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({ type: "FILTER_SORT", data: "lowToHigh" })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <FormCheck
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({ type: "FILTER_SORT", data: "highToLow" })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <FormCheck
          inline
          label="Include Out of stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() => productDispatch({ type: "FILTER_STOCK" })}
          checked={byStock}
        />
      </span>
      <span>
        <FormCheck
          inline
          label="Fast delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() => productDispatch({ type: "FILTER_FAST_DELIVERY" })}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating :</label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({ type: "FILTER_RATING", data: i + 1 })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant="light"
        onClick={() => productDispatch({ type: "CLEAR_FILTER" })}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
