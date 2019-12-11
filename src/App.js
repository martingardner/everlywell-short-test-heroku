import React from "react";
import "./sass/app.scss";

import Recipe from "./components/recipe";

const App = () => {
  return (
    <div className="app">
      <main>
        <div className="logo">
          <img src="./img/logo.png" alt="logo" />
        </div>
        <h2>Recipes of the day</h2>
        <div className="recipes">
          <ul>
            <Recipe></Recipe>
            <Recipe></Recipe>
            <Recipe></Recipe>
            <Recipe></Recipe>
            <Recipe></Recipe>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;
