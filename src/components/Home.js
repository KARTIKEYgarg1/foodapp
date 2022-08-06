import React, { useState, useEffect } from "react";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Home = () => {
  const [searchItem, setSearchItem] = useState("salad");
  const [navHeight, setNavHeight] = useState("40vh");
  const app_key = "8cd5ad2835a1758d2a8ace911279e8e0";
  const app_id = "c669f09c";
  let reference =
    "https://api.edamam.com/search?q=" +
    searchItem +
    "&app_id=" +
    app_id +
    "&app_key=" +
    app_key;
  console.log(reference);
  const [recepie, setRecepie] = useState([]);
  useEffect(() => {
    getRecepies();
    if (searchItem.length == 0) {
      setNavHeight("100vh");
    } else {
      setNavHeight("40vh");
    }
  }, [searchItem]);
  const getRecepies = async () => {
    const res = await fetch(reference);
    const data = await res.json();
    console.log(data.hits);
    setRecepie(data.hits);
  };
  return (
    <>
      <div
        className="nav"
        style={{ minHeight: navHeight, transition: "1s linear" }}
      >
        <div className="container">
          <h1 className="text-light mt-5 fs-1" style={{ letterSpacing: "1px" }}>
            <i class="fa-solid fa-utensils me-2"></i> Food
          </h1>
          <div className="input-group">
            <input
              type="text"
              placeholder="What you want to have???"
              className="form-control me-auto mt-2"
              id="inp"
              style={{ height: "min-content" }}
            ></input>
            <button
              style={{ height: "min-content" }}
              className="input-group-text mt-2 text-light bg-dark"
              onClick={() => {
                setSearchItem(document.getElementById("inp").value);
                console.log(searchItem);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3 mb-5 d-flex align-items-center justify-content-center">
        <hr className="w-25"></hr>
        <span className="me-5 ms-5 fs-2">Top picks</span>
        <hr className="w-25"></hr>
      </div>
      <div className="container-fluid">
        <main class="page-content">
          {recepie.map(function (element, index) {
            return (
              <div
                class="card"
                style={{
                  background: `url(${element.recipe.image})`,
                  backgroundSize: "cover",
                }}
              >
                <div class="content">
                  <h2 class="title">{element.recipe.label}</h2>
                  <p class="copy">
                    Cuisine type: {element.recipe.cuisineType[0]}
                    Meal type: {element.recipe.mealType[0]}
                    {element.recipe.cautions.length != 0
                      ? "Cautions: contains "
                      : ""}
                    {element.recipe.cautions.slice(0,-1).map(function (e, i) {
                      return e + ", ";
                    })}
                    {element.recipe.cautions[element.recipe.cautions.length-1]}
                  </p>
                  <button class="btn">View Recipe</button>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default Home;
