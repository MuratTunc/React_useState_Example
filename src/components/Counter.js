import React, { useState } from "react";
import "./Counter.css"; // Relative path from the same folder

function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div className="container">
        <h1>Counter: {count}</h1>
        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(count - 1)}>Decrease</button>
          <button className="reset" onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    );
  }
  
  export default Counter;
  
