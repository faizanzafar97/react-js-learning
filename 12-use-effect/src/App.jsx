import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Faizan");

  useEffect(() => {
    console.log("useEffect is running");
    console.log("Count:", count);
    console.log("Name:", name);
  }, [count, name]);

  return (
    <div className="container">
      <div className="card">
        <h1>useEffect</h1>

        <h2>Count: {count}</h2>
        <h2>Name: {name}</h2>

        <button onClick={() => setCount(count + 1)}>
          Increase Count
        </button>

        <button onClick={() => setName(name === "Faizan" ? "Ali" : "Faizan")}>
          Change Name
        </button>
      </div>
    </div>
  );
};

export default App;