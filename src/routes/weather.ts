import { Router } from "express";
import axios from "axios";
import { getWeatherQuery } from "./utils/weatherQuery";
import { WeatherRequest } from "../types";

const router = Router();
const apiKey = process.env.OPEN_WEATHER_API_KEY;

const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: apiKey,
  },
});

router.get("/", async (req: WeatherRequest, res) => {
  try {
    const { lat, lon } = req.query;
    const weatherQuery = getWeatherQuery(lat, lon);
    const response = await weatherApi.get(weatherQuery);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

export default router;
