import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useState } from "react";
import CurrentWeather from "../Currentweather/CurrentWeather";

const Navbar = () => {
  const [data, setdata] = useState("");
  const [cityname, setcityname] = useState();
  function handlechange(e) {
    setdata(e.target.value);
  }
  function getName(e) {
    e.preventDefault();

    setcityname(data);
  }

  return (
    <>
      <div className="main-navbar">
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <div className="container d-flex">
            <a className="navbar-brand" href="/">
              Weather-App
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <form class="d-flex " role="search">
                <input
                  id="city-name"
                  className="form-control me-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={handlechange}
                  value={data || ""}
                />
                <button className="btn btn-light " onClick={getName}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <h1 style={{ textAlign: "center" }}>Hello {cityname}</h1>
      <div className="container">
        <CurrentWeather city_name={cityname} />
        <WeatherCard city_name={cityname} />
      </div>
    </>
  );
};

export default Navbar;
