// the way to install the third party tools in rect we have to use this syntax
const redux = require("redux");

// This is the reducer function fot the redux core concept
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "Increment":
      return {
        counter: state.counter + 1,
      };
    case "Decrement":
      return {
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

// This is the central state for the redux which store the state
const store = redux.createStore(counterReducer);

// The subscribtion
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//we the to mutates to the rducer to the central state
store.subscribe(counterSubscriber);

// we have dispatch the action
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Decrement" });
store.dispatch({ type: "Decrement" });
store.dispatch({ type: "Decrement" });
store.dispatch({ type: "Decrement" });
