import { Router } from "express";
import axios from "axios";
import { getWeatherQuery } from "./utils/query";

const router = Router();
const apiKey = process.env.OPEN_WEATHER_API_KEY;

const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: apiKey,
  },
});

router.get("/:lat/:lon", async (req, res) => {
  try {
    const { lat, lon } = req.params;
    const weatherQuery = getWeatherQuery(lat, lon);
    const response = await weatherApi.get(weatherQuery);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

export default router;
