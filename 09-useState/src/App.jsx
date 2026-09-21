import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(90);

  return (
    <div className="container">
      <div className="counter-card">
        <h1>Counter</h1>

        <span className="count">
          {count}
        </span>
      </div>

      <div className="buttons">
        <button
          className="counter-btn"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          className="counter-btn"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <button
          className="counter-btn"
          onClick={() => setCount(count+5)}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default App;