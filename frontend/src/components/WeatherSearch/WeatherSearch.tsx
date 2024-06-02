import { useEffect, useReducer } from "react";
import { WeatherSearchForm, WeatherDashboard } from "./components";
import {
  weatherSearchReducer,
  weatherSearchDefaultState,
  weatherQueryDefaultState,
  weatherQueryReducer,
} from "./reducers";
import { WeatherSearchProvider } from "./contexts";
import {
  useFetchGeocodeData,
  useFetchWeatherData,
  useDebouncedFetchGeocodeData,
  useFetchForecastData,
} from "./hooks";
import "./WeatherSearch.css";

const WeatherSearch = () => {
  const [weatherState, dispatchWeatherState] = useReducer(
    weatherSearchReducer,
    weatherSearchDefaultState
  );
  const [queryState, dispatchQueryState] = useReducer(
    weatherQueryReducer,
    weatherQueryDefaultState
  );
  const fetchGeocodeData = useFetchGeocodeData(dispatchWeatherState);
  const fetchWeatherData = useFetchWeatherData(dispatchWeatherState);
  const fetchForecastData = useFetchForecastData(dispatchWeatherState);

  useEffect(() => {
    if (Object.keys(weatherState.geocodeData).length === 0) return;
    const { lat, lon } = weatherState.geocodeData as GeocodeData;
    const { tempUnit } = queryState as WeatherQuery; // Changed to queryState
    fetchWeatherData(lat, lon, tempUnit);
    fetchForecastData(lat, lon, tempUnit);
  }, [weatherState.geocodeData, queryState.tempUnit]);

  useEffect(() => {
    if (Object.keys(weatherState.weatherData).length === 0) return;
    const { lat, lon } = weatherState.geocodeData;
    const { tempUnit } = queryState; // Changed to queryState
    const id = setInterval(() => {
      fetchWeatherData(lat, lon, tempUnit);
      fetchForecastData(lat, lon, tempUnit);
    }, 60000);

    return () => {
      clearInterval(id);
    };
  }, [weatherState.weatherData, queryState.tempUnit]);

  useDebouncedFetchGeocodeData(fetchGeocodeData, queryState.geocodeQuery);

  return (
    <WeatherSearchProvider state={weatherState} dispatch={dispatchWeatherState}>
      <div>
        <h1>Weather Forecast</h1>
        <p>Enter a location separated by commas (city, state, country)</p>
        <WeatherSearchForm
          geocodeQuery={queryState.geocodeQuery}
          dispatch={dispatchQueryState}
        />
        <WeatherDashboard />
      </div>
    </WeatherSearchProvider>
  );
};

export default WeatherSearch;
