import { Response } from "express";
import { GeolocationRequest } from "../types";
import { getGeocode } from "../services/geocodeService";
import { filterGeocodeData } from "../utils/filterData";

export const fetchGeocodeData = async (
  req: GeolocationRequest,
  res: Response
) => {
  try {
    const { city, state, country, limit = "0" } = req.query;
    if (!city) {
      return res.status(400).json({ error: "City parameter is required" });
    }
    const data = getGeocode(city, state, country, limit);
    const filteredData = filterGeocodeData(data, state, country);
    res.json(filteredData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching geolocation data" });
  }
};
