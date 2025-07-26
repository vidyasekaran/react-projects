import React, { useState } from "react";
// index.js or main.jsx
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [count, setCount] = useState(0); // count starts at 0

  return (
    <div className="container mt-5"></div>
    /*<div className="container mt-5">
      <h1 className="text-center text-primary">Welcome to My Site</h1>
      <p className="lead">
        This is a simple React component using Bootstrap for styling.
      </p>

      <button className="btn btn-success">Click Me</button>
    </div>*/
  );
};

export default HomePage;
