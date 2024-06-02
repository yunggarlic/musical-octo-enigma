import axios from "axios";
import { getForecastQuery } from "../utils/forecastQuery";
import { filterForecastData } from "../utils/filterData";

const forecastApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/forecast",
  params: {
    appid: process.env.OPEN_WEATHER_API_KEY,
  },
});

export const getForecastData = async (
  lat: string,
  lon: string,
  units?: string
) => {
  try {
    const forecastQuery = getForecastQuery(lat, lon, units);
    const response = await forecastApi.get(forecastQuery);

    const forecastData = filterForecastData(response.data.list);
    return forecastData;
  } catch (error) {
    console.error(error);
  }
};
