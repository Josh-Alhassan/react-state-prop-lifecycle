import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevState) => prevState + 1);
  }

  function handleDecrement() {
    setCount((prevState) => (prevState > 0 ? prevState - 1 : 0));
  }

  function handleReset() {
    setCount(0);
  }
  return (
    <div>
      <p> {count} </p>
      <button onClick={handleIncrement}>Increment</button>

      <button onClick={handleDecrement}>Decrement</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
