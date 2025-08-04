import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <div className="buttons">
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Add
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Subtract
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <div className="description">
        <h3>Description:</h3>
        <p>
          The counter widgit allows a user to count forwards and backwards in
          increments of 1.
        </p>
        <ul>
          <li>Press the Add button to count up by 1</li>
          <li>Press the Subtract button to count down by 1</li>
          <li>Press the Reset button to reset the count to 0</li>
        </ul>
      </div>
    </div>
  );
}
