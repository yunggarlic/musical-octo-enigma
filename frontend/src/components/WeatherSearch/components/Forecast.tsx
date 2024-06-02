import { useContext } from "react";
import { WeatherSearchContext } from "../contexts";
import ForecastCard from "./ForecastCard";
const Forecast = () => {
  const { forecastData } = useContext(WeatherSearchContext);
  return (
    <div className="forecast">
      {forecastData.map((forecast: any) => (
        <ForecastCard key={forecast.dt} forecast={forecast} />
      ))}
    </div>
  );
};

export default Forecast;
