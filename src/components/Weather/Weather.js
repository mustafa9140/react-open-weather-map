import React, { useState } from "react";
import Search from "./Search/Search";
import TodayForecast from "./TodayForecast/TodayForecast";
import WeeklyForecast from "./WeeklyForecast/WeeklyForecast";
import WeatherMap from "./WeatherMap/WeatherMap";

const Weather = () => {
  const [cityName, setCityName] = useState("islamabad");
  const [cityData, setCityData] = useState({});
  return (
    <div className="w-100">
      <Search setCityName={setCityName} />
      <div className="half">
        <TodayForecast cityName={cityName} setCityData={setCityData} />
        <WeeklyForecast cityName={cityName} />
      </div>
      <div className="half">
        <WeatherMap cityData={cityData} />
      </div>
    </div>
  );
};

export default Weather;
