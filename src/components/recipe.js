import React, { useState, useEffect } from "react";

import RecipeTop from "./recipe-top";
import RecipeDrilldown from "./recipe-drilldown";

const Recipe = () => {
  const [getRecipeData, setRecipeData] = useState(null);
  const [getDrilldown, setDrilldown] = useState(false);

  const flipDrilldown = () => {
    setDrilldown(!getDrilldown);
  };

  useEffect(() => {
    let cancel = false;
    const recipeCall = async () => {
      let data = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      let json = await data.json();

      if (!cancel && json) {
        setRecipeData(json);
      }
    };

    recipeCall();

    return () => {
      cancel = true;
    };
  }, []);

  return (
    <li>
      {!getRecipeData ? (
        "Loading"
      ) : !getDrilldown ? (
        <RecipeTop
          data={getRecipeData.meals[0]}
          flipDrilldown={flipDrilldown}
        />
      ) : (
        <RecipeDrilldown
          data={getRecipeData.meals[0]}
          flipDrilldown={flipDrilldown}
        />
      )}
    </li>
  );
};

export default Recipe;
