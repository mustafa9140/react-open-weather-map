import React, { useState, useEffect } from "react";
import axios from "axios";

const TodayForecast = (prop) => {
  const apiKey = "24abdb52cfaa55537aef1b48990ae735";
  const [weatherData, setWeatherData] = useState({});
  // const y = ((-1 * prop.cityData.lat ? prop.cityData : null) + 90) * (10 / 180);
  // const x = (prop.cityData.lon ? prop.cityData : null + 180) * (10 / 360);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${prop.cityName}&units=metric&cnt=7&appid=${apiKey}`
      )
      .then((res) => {
        setWeatherData(res.data);
        console.log(res.data);
        prop.setCityData(res.data.coord);
      });
  }, [prop.cityName, prop.setCityData]);
  return (
    <div>
      <h3>Today's weather for {weatherData.name}</h3>
      <div className="flexy">
        <div>
          <p>{weatherData.main ? weatherData.main.temp : null}C</p>
          <p>
            {weatherData.weather ? weatherData.weather[0].description : null}
          </p>
          <p>
            {weatherData.main ? "Min: " + weatherData.main.temp_min : null}
            {weatherData.main ? " Max: " + weatherData.main.temp_max : null}
          </p>
        </div>
        <div >
          <p>
            {weatherData.weather ? (
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                alt={weatherData.weather[0].main}
                title={weatherData.weather[0].main}
              />
            ) : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodayForecast;
