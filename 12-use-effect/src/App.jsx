import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  // useEffect runs when the component loads
  // and whenever count changes
  useEffect(() => {
    document.title = `Count: ${count}`;

    console.log("useEffect is running");
  }, [count]);

  return (
    <div className="container">
      <div className="card">
        <h1>useEffect Hook</h1>

        <p className="count">{count}</p>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;