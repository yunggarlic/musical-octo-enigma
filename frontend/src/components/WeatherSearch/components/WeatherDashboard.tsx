import { useContext, useEffect } from "react";
import { WeatherSearchContext } from "../contexts";
import { Forecast } from "./";
import { formatTemp } from "../utils/format";

const WeatherDashboard = () => {
  const { weatherData, geocodeData } = useContext(WeatherSearchContext);

  if (Object.keys(weatherData).length === 0) {
    return null;
  }

  return (
    <div>
      <h2>
        {geocodeData.name}, {geocodeData.state}, {geocodeData.country}
      </h2>
      <div className="weather-dashboard__content">
        {weatherData.weather.map((weather) => (
          <div key={`${weather.id}-${weatherData.name}`}>
            <h2>{formatTemp(weatherData.main.temp)}</h2>
            <p>{weather.description}</p>
          </div>
        ))}
      </div>
      <Forecast />
    </div>
  );
};

export default WeatherDashboard;
