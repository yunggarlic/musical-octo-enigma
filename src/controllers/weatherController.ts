import { Response } from "express";
import { WeatherRequest } from "../types";
import { getWeatherQuery } from "../utils/weatherQuery";
import axios from "axios";

const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: process.env.OPEN_WEATHER_API_KEY,
  },
});

export const fetchWeatherData = async (req: WeatherRequest, res: Response) => {
  try {
    const { lat, lon, mode = "kelvin" } = req.query;
    const weatherQuery = getWeatherQuery(lat, lon, mode);
    const response = await weatherApi.get(weatherQuery);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
};
