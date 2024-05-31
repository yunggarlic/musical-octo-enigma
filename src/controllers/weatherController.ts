import { Response } from "express";
import { WeatherRequest } from "../types";
import { getWeatherData } from "../services/weatherService";

export const fetchWeatherData = async (req: WeatherRequest, res: Response) => {
  try {
    const { lat, lon, mode = "kelvin" } = req.query;
    const data = await getWeatherData(lat, lon, mode);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
};
