import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Full Stack Cheat Sheet</h1>
      <div className="container">
        <button id="increase" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
