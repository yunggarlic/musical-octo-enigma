import axios from "axios";
import { Router } from "express";
import { getGeolocationQuery } from "./utils/geolocationQuery";
import { GeolocationRequest } from "../types";

const router = Router();
const apiKey = process.env.OPEN_WEATHER_API_KEY;

const GeolocationAPI = axios.create({
  baseURL: "http://api.openweathermap.org/geo/1.0/direct",
  params: {
    appid: apiKey,
  },
});

router.get("/", async (req: GeolocationRequest, res) => {
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

    res.json(filterData(response.data, state, country));
  } catch (error) {
    res.status(500).json({ error: "Error fetching geolocation data" });
  }
});

function filterData(data: any, state?: string, country?: string): boolean {
  return data.filter(
    (data: any) =>
      filterFunc(data.state, state) || filterFunc(data.country, country)
  );
}

function filterFunc(mainStr?: string, substr?: string): boolean {
  if (!mainStr || !substr) return true;
  return mainStr.toLowerCase().startsWith(substr.toLowerCase());
}

export default router;
