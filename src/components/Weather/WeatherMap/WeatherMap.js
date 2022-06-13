import React, { useState } from "react";

const WeatherMap = (prop) => {
  const [activePane, setActivePane] = useState("clouds");
  const y =
    ((-1 * prop.cityData.lat ? parseFloat(prop.cityData.lat) : null) + 90) *
    (50 / 180);
  const x =
    (prop.cityData.lon ? parseFloat(prop.cityData.lon) : null + 180) *
    (50 / 360);
  return (
    <div>
      <ul className="tabs">
        <li>
          <button
            onClick={(e) => {
              e.preventDefault();
              setActivePane("clouds");
            }}
          >
            Clouds
          </button>
        </li>
        <li>
          <button
            onClick={(e) => {
              e.preventDefault();
              setActivePane("percipitation");
            }}
          >
            Percipitation
          </button>
        </li>
        <li>
          <button
            onClick={(e) => {
              e.preventDefault();
              setActivePane("temperature");
            }}
          >
            Temperature
          </button>
        </li>
      </ul>
      <div className="tab-content">
        {activePane === "clouds" ? (
          <div>
            {prop.cityData && typeof prop.cityData.lat !== "undefined" ? (
              <img
                alt=""
                src={`https://tile.openweathermap.org/map/clouds_new/10/${
                  x.toString().split(".")[0]
                }/${
                  y.toString().split(".")[0]
                }.png?appid=24abdb52cfaa55537aef1b48990ae735`}
              />
            ) : null}
          </div>
        ) : null}
        {activePane === "percipitation" ? (
          <div>
            {prop.cityData && typeof prop.cityData.lat !== "undefined" ? (
              <img
                alt=""
                src={`https://tile.openweathermap.org/map/precipitation_new/10/${
                  x.toString().split(".")[0]
                }/${
                  y.toString().split(".")[0]
                }.png?appid=24abdb52cfaa55537aef1b48990ae735`}
              />
            ) : null}
          </div>
        ) : null}
        {activePane === "temperature" ? (
          <div>
            {" "}
            <div>
              {prop.cityData && typeof prop.cityData.lat !== "undefined" ? (
                <img
                  alt=""
                  src={`https://tile.openweathermap.org/map/temp_new/10/${
                    x.toString().split(".")[0]
                  }/${
                    y.toString().split(".")[0]
                  }.png?appid=24abdb52cfaa55537aef1b48990ae735`}
                />
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WeatherMap;
