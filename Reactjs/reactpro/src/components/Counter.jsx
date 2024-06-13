import { useState } from "react";

export default function Counter() {
  // using State in react
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function handleClicks() {
    setCount(count + incrementBy);
  }
  function handleClick() {
    setCount(count - incrementBy);
  }
  function increaseIncrement(e) {
    e.preventDefault();
    setIncrementBy(incrementBy + 1);
  }
  function decreasIncrement() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <>
      <h1> Count value is : {count}</h1>
      <button onClick={handleClicks}>Increase</button>
      <button onClick={handleClick}>decrement</button>
      <h1>We are incrementing the value by : {incrementBy}</h1>
      <button onClick={increaseIncrement}>Increase Increment</button>
      <button onClick={decreasIncrement}>Decrease Increment</button>
    </>
  );
}
