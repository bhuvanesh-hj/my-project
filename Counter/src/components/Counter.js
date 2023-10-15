import { useSelector, useDispatch } from "react-redux"

import classes from './Counter.module.css';


const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  const IncrementHandler = () => {
    dispatch({type:"IncrementBy2"})
  }

  const DecrementHandler = () => {
    dispatch({type:"DecrementBy2"})
  }

  const IncrementBy5Handler = () => {
    dispatch({type:"IncrementBy5"})
  }

  const DecrementBy5Handler = () => {
    dispatch({type:"DecrementBy5"})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={IncrementHandler}>Increment by 2</button>
        <button onClick={DecrementHandler}>decrement by 2</button>
      </div>
      <div>
        <button onClick={IncrementBy5Handler}>Increment by 5</button>
        <button onClick={DecrementBy5Handler}>decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
