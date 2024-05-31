import { useContext, ChangeEvent, useEffect } from "react";
import { WeatherSearchDispatchContext } from "../contexts";
import GeocodeResults from "./GeocodeResults";

const WeatherSearchForm = ({ query }: { query: string }) => {
  const dispatch = useContext(WeatherSearchDispatchContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_QUERY", payload: { query: e.target.value } });
  };

  return (
    <form className="weather-search__form">
      <input
        type="text"
        placeholder="Enter city"
        value={query}
        onChange={handleChange}
      />
      <GeocodeResults />
    </form>
  );
};

export default WeatherSearchForm;
