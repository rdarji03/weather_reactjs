import React from "react";
import { useState, useEffect } from "react";

const CurrentWeather = ({ city_name }) => {
  const [currentWeather, setCurrentWeather] = useState([]);
  if (city_name === undefined) {
    city_name = "vadodara";
  }
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "2458ee7fcemsh7ecda95d97d8826p1c0687jsn29e1368376f0",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      const current_weather_url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city_name}`;
      const current_weather_response = await fetch(
        current_weather_url,
        options
      );
      const current_weather_data = await current_weather_response.json();
      setCurrentWeather(current_weather_data);
    };
    fetchData();
  }, [city_name]);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center d-flex align-items-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm ">
            <div className="card-header py-3 bg-dark">
              <h4 className="my-0 fw-normal text-white">Humidity</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                {currentWeather?.current?.humidity}
                <small className="text-muted fw-light">%</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Feels Like: {currentWeather?.current?.feelslike_c}</li>
                <li>Precipitation:{currentWeather?.current?.precip_in}inch</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3  bg-dark">
              <h4 className="my-0 fw-normal text-white">Temperatures</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                {currentWeather?.current?.temp_c}
                <small className="text-muted fw-light">℃</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>
                  Pressure:
                  {currentWeather?.current?.pressure_mb}hPa
                </li>
                <li>
                  UV:
                  {currentWeather?.current?.uv}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3 bg-dark">
              <h4 className="my-0 fw-normal text-white">Wind Info</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                {currentWeather?.current?.wind_kph}
                <small className="text-muted fw-light">km/hr</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Wind Degree:{currentWeather?.current?.wind_degree}</li>
                <li>Wind Direction:{currentWeather?.current?.wind_dir}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
