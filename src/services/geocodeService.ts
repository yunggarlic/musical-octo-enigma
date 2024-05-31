import axios from "axios";
import { getGeolocationQuery } from "../utils/geolocationQuery";

const GeolocationAPI = axios.create({
  baseURL: "http://api.openweathermap.org/geo/1.0/direct",
  params: {
    appid: process.env.OPEN_WEATHER_API_KEY,
  },
});

export const getGeocode = async (
  city: string,
  state?: string,
  country?: string,
  limit?: string
) => {
  try {
    const response = await GeolocationAPI.get("", {
      params: {
        q: getGeolocationQuery(city, state, country),
        limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
