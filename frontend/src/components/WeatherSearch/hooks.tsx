import { useCallback, useEffect, useRef } from "react";
import { GeolocationAPI, WeatherAPI, ForecastAPI } from "../../api";
import { getGeolocationQuery } from "../../api/queries";
import debounce from "lodash/debounce";

export const useFetchGeocodeData = (
  dispatch: React.Dispatch<WeatherSearchAction>
) => {
  return useCallback(
    async (query: string) => {
      const [cityName, state, country] = query
        .split(",")
        .map((part) => part.trim());
      if (cityName) {
        try {
          const query = getGeolocationQuery(cityName, state, country);
          const response = await GeolocationAPI.get(`?${query}`);
          dispatch({
            type: "SET_QUERY_RESULTS",
            payload: { queryResults: response.data },
          });
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    },
    [dispatch]
  );
};

export const useFetchWeatherData = (
  dispatch: React.Dispatch<WeatherSearchAction>
) => {
  return useCallback(
    async (lat: number, lon: number, units: string) => {
      try {
        const response = await WeatherAPI.get(
          `?lat=${lat}&lon=${lon}&units=${units}`
        );
        dispatch({
          type: "SET_WEATHER_DATA",
          payload: { weatherData: response.data },
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
    [dispatch]
  );
};

export const useFetchForecastData = (
  dispatch: React.Dispatch<WeatherSearchAction>
) => {
  return useCallback(
    async (lat: number, lon: number, units: string) => {
      try {
        const response = await ForecastAPI.get(`?lat=${lat}&lon=${lon}&units=${units}`);
        dispatch({
          type: "SET_FORECAST_DATA",
          payload: { forecastData: response.data },
        });
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    },
    [dispatch]
  );
};

export const useDebouncedFetchGeocodeData = (
  fetchGeocodeData: (city: string) => Promise<void>,
  query: string
) => {
  const fetchGeocodeDataRef = useRef<ReturnType<typeof debounce> | null>(null);

  useEffect(() => {
    fetchGeocodeDataRef.current = debounce((city) => {
      fetchGeocodeData(city);
    }, 500);

    return () => {
      fetchGeocodeDataRef.current?.cancel();
    };
  }, [fetchGeocodeData]);

  useEffect(() => {
    fetchGeocodeDataRef.current?.(query);
  }, [query]);
};
