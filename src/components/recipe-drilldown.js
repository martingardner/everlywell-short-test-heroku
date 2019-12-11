import React, { useState, useEffect } from "react";

const RecipeDrilldown = props => {
  const [getIngredients, setIngredients] = useState([]);

  useEffect(() => {
    let newArr = [];
    for (let i = 1; i < 21; i++) {
      let instance = "strIngredient" + i;
      if (props.data[instance].length > 0) {
        newArr.push(props.data[instance]);
      }
    }
    if (newArr.length > 0) {
      setIngredients(newArr);
    }
  }, []);

  return (
    <div className="drilldown">
      <div className="drilldown-header">
        <button onClick={props.flipDrilldown}>Back</button>
      </div>
      <div className="drilldown-details">
        <img
          alt={props.data.strMeal + " image"}
          src={props.data.strMealThumb}
        ></img>
        <h2>{props.data.strMeal}</h2>
        <div className="ingredients">
          {getIngredients.length > 0 && (
            <ul>
              {getIngredients.map((val, index) => {
                return <li key={val + index}>{val}</li>;
              })}
            </ul>
          )}
        </div>
        <p className="instructions">{props.data.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeDrilldown;
