import { Router, Request, Response } from "express";
import axios from "axios";
import { getGeolocationQuery } from "./utils/query";
import { WeatherRequest } from "../../types";
const router = Router();
const apiKey = process.env.OPEN_WEATHER_API_KEY;

const GeolocationAPI = axios.create({
  baseURL: "http://api.openweathermap.org/geo/1.0/direct",
  params: {
    appid: apiKey,
  },
});

router.get("/", async (req: WeatherRequest, res) => {
  try {
    const { city, state, country, limit = "0" } = req.query;
    if (!city) {
      return res.status(400).json({ error: "City parameter is required" });
    }
    const query = getGeolocationQuery(city, state, country);
    const response = await GeolocationAPI.get("", {
      params: {
        q: query,
        limit: limit,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching geolocation data" });
  }
});

export default router;
