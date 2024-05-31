import { getWeatherQuery } from "../utils/weatherQuery";
import axios from "axios";

const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: process.env.OPEN_WEATHER_API_KEY,
  },
});

export const getWeatherData = async (
  lat: string,
  lon: string,
  mode: string
) => {
  try {
    const weatherQuery = getWeatherQuery(lat, lon, mode);
    const response = await weatherApi.get(weatherQuery);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
