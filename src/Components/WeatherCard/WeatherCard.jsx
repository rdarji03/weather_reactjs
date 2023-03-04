import React from "react";
import { useState, useEffect } from "react";

const WeatherCard = ({ city_name }) => {
  const [forecast_weather, setForecastWeather] = useState([]);
  if (city_name === undefined) {
    city_name = "vadodara";
  }
  useEffect(() => {
    const fetchData = async () => {
      const daily_forecast_url = `http://api.openweathermap.org/data/2.5/forecast?q=${city_name}&cnt=6&appid=e76b75c300c1a5b2f857fc8bcf14f353`;
      const forecast_response = await fetch(daily_forecast_url);
      const forecast_data = await forecast_response.json();
      console.log(forecast_data)
      if (forecast_data.cod==="404") {
        return "error"
      } else if(forecast_data){
        setForecastWeather(forecast_data.list);
      }
    };
    fetchData();
  }, [city_name]);

  return (
    <>
      <div className="weather-card container-fluid">
        <div className="display_card d-flex p-2 flex-wrap justify-content-center">
          {forecast_weather.map((weather_data) => {
            return (
              <div className="card mx-2 my-1">
                <div className="card-header bg-dark text-white">
                  {weather_data.dt_txt}
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Temp:{Math.ceil(weather_data.main.temp - 273)}℃
                  </h5>

                  <p>MaxTemp:{Math.ceil(weather_data.main.temp_max - 273)}℃</p>
                  <p>MinTemp:{Math.ceil(weather_data.main.temp_min - 273)}℃</p>
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
