import { useEffect, useReducer } from "react";
import { WeatherSearchForm, WeatherDashboard } from "./components";
import { weatherSearchReducer, weatherSearchDefaultState } from "./reducers";
import { WeatherSearchProvider } from "./contexts";
import {
  useFetchGeocodeData,
  useFetchWeatherData,
  useDebouncedFetchGeocodeData,
} from "./hooks";
import "./WeatherSearch.css";

const WeatherSearch = () => {
  const [state, dispatch] = useReducer(
    weatherSearchReducer,
    weatherSearchDefaultState
  );
  const fetchGeocodeData = useFetchGeocodeData(dispatch);
  const fetchWeatherData = useFetchWeatherData(dispatch);

  useEffect(() => {
    if (Object.keys(state.geocodeData).length === 0) return;
    const { lat, lon } = state.geocodeData;
    fetchWeatherData(lat, lon);
  }, [state.geocodeData, fetchWeatherData]);

  useDebouncedFetchGeocodeData(fetchGeocodeData, state.query);

  return (
    <WeatherSearchProvider state={state} dispatch={dispatch}>
      <div>
        <h1>Weather Forecast</h1>
        <p>Enter a location separated by commas (city, state, country)</p>
        <WeatherSearchForm query={state.query} />
        <WeatherDashboard data={state.weatherData} />
      </div>
    </WeatherSearchProvider>
  );
};

export default WeatherSearch;
