import React from "react";
import { useState, useEffect } from "react";

const CurrentWeather = ({ city_name }) => {
  const [currentWeather, setCurrentWeather] = useState([]);
  if (city_name === undefined) {
    city_name = "vadodara";
  }
  useEffect(() => {
    const fetchData = async () => {
      const current_weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=e76b75c300c1a5b2f857fc8bcf14f353`;
      const current_weather_response = await fetch(current_weather_url);
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
                {Math.ceil(currentWeather?.main?.humidity)}
                <small className="text-muted fw-light">%</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>
                  Feels Like:{" "}
                  {Math.ceil(currentWeather?.main?.feels_like - 273)}
                </li>
                {/* <li>Sunrise Time:{currentWeather?.sys?.sunrise}</li>
              <li>Sunset Time:{currentWeather?.sys?.sunset}</li> */}
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
                {Math.ceil(currentWeather?.main?.temp - 273)}
                <small className="text-muted fw-light">℃</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>
                  Maxmimum Temperature:
                  {Math.ceil(currentWeather?.main?.temp - 273)}℃
                </li>
                <li>
                  Minimum Temperature:
                  {Math.ceil(currentWeather?.main?.temp - 273)}℃
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
                {currentWeather?.wind?.speed}
                <small className="text-muted fw-light">km/hr</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Wind Degree:{currentWeather?.wind?.deg}</li>
                <li>
                  {/* Weather:{currentWeather?.weather[0]?.description} */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
