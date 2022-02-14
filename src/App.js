import { useState, useEffect } from "react";
import Coffees from "./Coffees.js";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(500);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        &nbsp;
        <button onClick={() => setCounter(counter - 1)}> -</button>
        &nbsp;
        <button onClick={() => setCounter(0)}> Reset</button>
        <Coffees />
      </header>
    </div>
  );
}

export default App;
