import { Response } from "express";
import { ForecastRequest } from "../types";
import { getForecastData } from "../services/forecastService";

export const fetchForecastData = async (
  req: ForecastRequest,
  res: Response
) => {
  try {
    const { lat, lon, units } = req.query;
    const data = await getForecastData(lat, lon, units);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching forecast data" });
  }
};
