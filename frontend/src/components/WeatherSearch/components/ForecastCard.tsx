import { formatTime, formatTemp } from "../utils/format";

const ForecastCard = ({ forecast }) => {
  return (
    <div className="forecast__card">
      <span>{formatTime(forecast.dt_txt)}</span>
      <span>{formatTemp(forecast.main.temp)}</span>
    </div>
  );
};

export default ForecastCard;
