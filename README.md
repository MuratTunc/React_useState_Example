
# React State Explanation

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cs3h8o1w71cthz9pocj5.png)


React state is like the memory of a React component. It allows a component to keep track of information that might change over time, and when state changes, React automatically re-renders the component to reflect those changes.

What is React State?

State is an object that stores data or information about the component. Think of it like variables for your component, but with one big difference: when the state updates, React re-renders the component so the UI stays in sync with the data.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9aobq1c3u6ticbihknqv.png)

How to Use State?

In functional components, you use the useState hook to manage state.

VS CODE PROJECT OVERVIEW:
We have Counter.js to show the useState
We have Counter.css to show 3 buttons on main screen.
We have App.js to call the component Counter.

```jsx
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
```

Counter.css
```jsx

/* Container to position content in the top-left corner */
.container {
  position: absolute; /* Allows precise positioning */
  top: 40px; /* Distance from the top of the screen */
  left: 2px; /* Distance from the left of the screen */
  font-family: Arial, sans-serif;
}

/* Styling the counter title */
h1 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px; /* Space between header and buttons */
}

/* Grouping buttons together */
.button-group {
  display: flex;
  gap: 10px; /* Space between buttons */
}

/* Styling buttons */
button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

button:active {
  background-color: #39843c;
}

/* Reset button has a different style */
button.reset {
  background-color: #f44336;
}

button.reset:hover {
  background-color: #e53935;
}

button.reset:active {
  background-color: #c62828;
}

```

App.js

```jsx
import React from "react";
import Counter from "./components/Counter"; // Import the Counter component

function App() {
  return (
    <div>
      <h1>Welcome to the App!</h1>
      <Counter /> {/* Render the Counter component */}
    </div>
  );
}

export default App;


```
Run the application from terminal:


```jsx
npm start
Compiled successfully!

You can now view my-react-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.8:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```
_**
This will start your React app, and it should open in your browser at http://localhost:3000.**_


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a7kmcemga4ajhvity9le.png)


You will see that the counter value changes when the buttons are pressed. I wish you good coding, I hope this short study will be useful.

With my most sincere wishes,

Murat...








 


