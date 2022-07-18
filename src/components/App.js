import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>Now</h1>
      <p className="App-intro">
        I'm currently learning react so that I can be pproficient in frontend software development.
      </p>
      <ExampleComponent />
      <TestComponent />
    </div>
  );
}

export default App;
