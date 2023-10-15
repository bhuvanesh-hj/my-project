import { createStore } from "redux";

const CounterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "Increment":
      return {
        counter: state.counter + 1,
      };
    case "IncrementBy2":
      return {
        counter: state.counter + 2,
      };
    case "Decrement":
      return {
        counter: state.counter - 1,
      };
    case "DecrementBy2":
      return {
        counter: state.counter - 2,
      };
    default:
      return state;
  }
};

const store = createStore(CounterReducer);

export default store;
