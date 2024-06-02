import { ChangeEvent } from "react";
import GeocodeResults from "./GeocodeResults";

const WeatherSearchForm = ({
  geocodeQuery,
  dispatch,
}: {
  geocodeQuery: string;
  dispatch: React.Dispatch<WeatherSearchAction>;
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_GEOCODE_QUERY",
      payload: { geocodeQuery: e.target.value },
    });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "SET_TEMP_UNIT",
      payload: { tempUnit: e.target.value },
    });
  };

  return (
    <form className="weather-search__form">
      <input
        type="text"
        placeholder="Enter city"
        value={geocodeQuery}
        onChange={handleChange}
      />
      <select onChange={handleSelectChange}>
        <option value="metric">Celsius</option>
        <option value="imperial">Fahrenheit</option>
        <option value="standard">Kelvin</option>
      </select>
      <GeocodeResults />
    </form>
  );
}; 

export default WeatherSearchForm;