import React from "react";
import { useState, useEffect } from "react";

const WeatherCard = ({ city_name }) => {
  const [forecast_weather, setForecastWeather] = useState([]);
  if (city_name === undefined) {
    city_name = "vadodara";
  }
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2458ee7fcemsh7ecda95d97d8826p1c0687jsn29e1368376f0",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    const fetchData = async () => {
      const daily_forecast_url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city_name}&days=3`;
      const forecast_response = await fetch(daily_forecast_url, options);
      const forecast_data = await forecast_response.json();
      console.log(forecast_data.forecast.forecastday);
      setForecastWeather(forecast_data.forecast.forecastday);
    };
    fetchData();
  }, [city_name]);

  return (
    <>
      <div className="weather-card container-fluid">
        <div className="display_card d-flex p-2 flex-wrap justify-content-center">
          {forecast_weather.map((weather_data) => {
            return (
              <div className="card mx-2 my-1" style={{minWidth:"15rem"}}>
                <div className="card-header bg-dark text-white">
                  {weather_data.date}
                </div>
                <div className="card-body">
                  <div className="list-group">
                    <p className="card-title">
                      MaxTemp:{weather_data.day.maxtemp_c}
                    </p>
                    <p className="card-title">
                      MaxTemp:{weather_data.day.mintemp_c}
                    </p>
                    <p className="card-title">
                      Sunrise:{weather_data.astro.sunrise}
                    </p>
                    <p className="card-title">
                      Sunset:{weather_data.astro.sunset}
                    </p>
                    <p className="card-title">
                      Sunset:{weather_data.day.condition.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
