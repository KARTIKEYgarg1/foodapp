import React from "react";

function Details(params) {
  return (
    <div>
      {console.log(params.arr)}
      {params.arr.length != 0 && (
        <div>
          <h1 className="text-main">{params.arr.label}</h1>
          <div id="d-flex">
            <div className="p-3 m-2 fs-5">
              <img
                src={params.arr.image}
                alt=""
                className="img-fluid w-75 rounded mx-auto d-block p-2 border border-dark mb-3"
              ></img>
              <p>
                <span className="text-main me-2">Calories:</span>
                {parseInt(params.arr.calories)}
              </p>
              <p>
                <span className="text-main me-2">DietLabels:</span>
                {params.arr.dietLabels.map(function (e, i) {
                  return <span key={i}>{e}</span>;
                })}
                {params.arr.dietLabels.length == 0 && <span>None</span>}
              </p>
              <p>
                <span className="text-main me-2">DishType:</span>
                {params.arr.dishType.map(function (e, i) {
                  return <span key={i}>{e}</span>;
                })}
              </p>
              <p>
                <span className="text-main">Ingredient Required:</span>
                <ul>
                  {params.arr.ingredientLines.map(function (e, i) {
                    return <li key={i}>{e}</li>;
                  })}
                </ul>
              </p>
              <p>
                To View Directions <a href={params.arr.url}>Click here</a>
              </p>
            </div>
            <div className="p-3 m-2 ">
              <span className="text-main fs-5">Digest</span>
              <table class="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Nutrient</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {params.arr.digest.map(function (e, i) {
                    return (
                      <tr>
                        <td>{e.label}</td>
                        <td>
                          {parseInt(e.total)}
                          {e.unit}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
