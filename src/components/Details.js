import React from "react";

function Details(params) {
  return (
    <div>
      <div>
        <div>Calories {params.arr.calories}</div>
        <div>
          DietLabels{" "}
          {params.arr.dietLabels.map(function (e, i) {
            return <span key={i}>{e}</span>;
          })}
        </div>
        <div>
          DishType{" "}
          {params.arr.dishType.map(function (e, i) {
            return <span key={i}>{e}</span>;
          })}
        </div>
        <div>
          IngredientLines{" "}
          {params.arr.ingredientLines.map(function (e, i) {
            return <span key={i}>{e}</span>;
          })}
        </div>
        <div>View Directions {params.arr.url}</div>
        <div>
          Digest{" "}
          {params.arr.digest.map(function (e, i) {
            return (
              <div key={i}>
                {e.label}-{parseInt(e.total)}
                {e.unit}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
