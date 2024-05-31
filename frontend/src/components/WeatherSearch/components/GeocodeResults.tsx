import { useContext } from "react";
import {
  WeatherSearchDispatchContext,
  WeatherSearchContext,
} from "../contexts";

const GeocodeResults = () => {
  const dispatch = useContext(WeatherSearchDispatchContext);
  const { queryResults } = useContext(WeatherSearchContext);

  const handleGeocodeResultClick = (geocodeData: GeocodeData) => {
    dispatch({ type: "SET_GEOCODE_DATA", payload: { geocodeData } });
    dispatch({ type: "CLEAR_QUERY" });
    dispatch({ type: "CLEAR_QUERY_RESULTS" });
  };

  return (
    <>
      {queryResults?.length > 0 && (
        <ul className="weather-search__city-list">
          {queryResults.map((data: GeocodeData) => (
            <li key={`cityoption ${data.lat} ${data.lon}`}>
              <button
                key={`cityoptionbutton ${data.lat} ${data.lon}`}
                onClick={() => handleGeocodeResultClick(data)}
              >
                {data.name}, {data.state} {data.country}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GeocodeResults;
