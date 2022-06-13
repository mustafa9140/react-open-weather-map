import React, { useState, useEffect } from "react";
import axios from "axios";

const WeeklyForecast = (prop) => {
  const apiKey = "24abdb52cfaa55537aef1b48990ae735";
  const [weeklyData, setWeeklyData] = useState({});
  useEffect(() => {
    return () => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${prop.cityName}&units=metric&cnt=7&appid=${apiKey}`
        )
        .then((res) => {
          setWeeklyData(res.data);
        });
    };
  }, [prop.cityName]);
  return (
    <div>
      <h3>Weekly Forecast</h3>
      <div className="forecasts">
        {weeklyData.list
          ? weeklyData.list.map((weather, index) => {
              return <p key={index}>{weather.main.temp}</p>;
            })
          : null}
      </div>
    </div>
  );
};

export default WeeklyForecast;
