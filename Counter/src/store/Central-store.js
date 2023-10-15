import { createStore } from "redux";

const CounterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "IncrementBy2":
      return {
        counter: state.counter + 2,
      };
    case "DecrementBy2":
      return {
        counter: state.counter - 2,
      };
    case "IncrementBy5":
      return {
        counter: state.counter + 5,
      };
    case "DecrementBy5":
      return {
        counter: state.counter - 5,
      };
    default:
      return state;
  }
};

const store = createStore(CounterReducer);

export default store;
