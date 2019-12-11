import React from "react";

const RecipeTop = props => {
  return (
    <div onClick={props.flipDrilldown}>
      <h2>{props.data.strMeal}</h2>
      <img
        alt={props.data.strMeal + " image"}
        src={props.data.strMealThumb}
      ></img>
    </div>
  );
};

export default RecipeTop;
