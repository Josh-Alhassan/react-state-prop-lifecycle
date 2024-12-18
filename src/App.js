import RandomJoke from "./RandomJoke";
import UserCard from "./UserCard";
import UserList from "./UserList";
import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <UserCard name="Joshua" age="27" email="thealhassanjoshua@gmail.com" />

      <UserList />

      <RandomJoke />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  // Handle Increment
  function handleIncrement() {
    setCount((prevState) => prevState + 1);
  }

  // Handle Decrement
  function handleDecrement() {
    setCount((prevState) => (prevState > 0 ? prevState - 1 : 0));
  }

  // Handle Reset
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
