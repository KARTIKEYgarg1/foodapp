import React, { useState, useEffect } from "react";
import Details from "./Details";
import Spinner from "./spinner.gif";
import logo from "./logo.png";
const Home = () => {
  const [searchItem, setSearchItem] = useState("");
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
  let arr = [];
  const [sd, setSd] = useState([]);
  useEffect(() => {
    getRecepies();
    if (searchItem.length == 0) {
      setNavHeight("100vh");
    } else {
      setNavHeight("40vh");
    }
  }, [searchItem]);
  const getRecepies = async () => {
    document.getElementById("spinner").style.display = "block";
    document.getElementById("fetchedData").style.display = "none";
    const res = await fetch(reference);
    const data = await res.json();
    console.log(data.hits);
    setRecepie(data.hits);
    document.getElementById("spinner").style.display = "none";
    document.getElementById("fetchedData").style.display = "block";
  };
  return (
    <>
      <div id="mainTab">
        <div
          className="nav"
          style={{ minHeight: navHeight, transition: "1s linear" }}
        >
          <div className="container">
            <h1
              className="text-light mt-5 fs-1"
              style={{ letterSpacing: "1px" }}
            >
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
                }}
              >
                Search <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <div className="container w-100">
            {navHeight == "100vh" && (
              <img className="rounded mx-auto d-block" src={logo}></img>
            )}
          </div>
        </div>
        <div id="spinner">
          spinner<img src={Spinner} className="w-25 h-25"></img>
        </div>
        <div id="fetchedData">
          {navHeight != "100vh" && (
            <div className="container-fluid mt-3 mb-5 d-flex align-items-center justify-content-center">
              <hr className="w-25"></hr>
              <span className="me-5 ms-5 fs-2">Top picks</span>
              <hr className="w-25"></hr>
            </div>
          )}
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
                        <div>
                          <span className="text-main">Cuisine type:</span>
                          {element.recipe.cuisineType[0]}
                        </div>
                        <div>
                          <span className="text-main">Meal type:</span>
                          {element.recipe.mealType[0]}
                        </div>
                        <div>
                          {element.recipe.cautions.length != 0 ? (
                            <span className="text-main">Caution contains:</span>
                          ) : null}
                          {element.recipe.cautions
                            .slice(0, -1)
                            .map(function (e, i) {
                              return e + ", ";
                            })}
                          {
                            element.recipe.cautions[
                              element.recipe.cautions.length - 1
                            ]
                          }
                        </div>
                      </p>
                      <button
                        class="btn-main"
                        onClick={() => {
                          setSd(element.recipe);
                          arr = sd;
                          console.log(arr);
                          document.getElementById("detailsTab").style.display =
                            "block";
                          document.getElementById("mainTab").style.display =
                            "none";
                        }}
                      >
                        View Recipe
                      </button>
                    </div>
                  </div>
                );
              })}
            </main>
          </div>
        </div>
      </div>
      <div id="detailsTab">
        <div>
          {navHeight != "100vh" && (
            <button
              className="btn m-2 p-2"
              id="backBtn"
              onClick={() => {
                document.getElementById("detailsTab").style.display = "none";
                document.getElementById("mainTab").style.display = "block";
              }}
            >
              <i class="fa-solid fa-arrow-left-long"></i>
            </button>
          )}
        </div>
        <Details arr={sd} />
      </div>
    </>
  );
};
export default Home;
