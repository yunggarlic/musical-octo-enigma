import { useContext } from "react";
import { WeatherSearchContext } from "../contexts";

const WeatherDashboard = ({ data }: { data: WeatherData }) => {
  const { weatherData } = useContext(WeatherSearchContext);

  if (Object.keys(weatherData).length === 0) {
    return null;
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <div className="weather-dashboard__content">
        {data.weather.map((weather) => (
          <div key={`${weather.id}-${data.name}`}>
            <h2>{data.main.temp}</h2>
            <p>{weather.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDashboard;
