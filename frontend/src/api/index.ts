import axios from "axios";

export const GeolocationAPI = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:1902/api/geolocation"
    : "/api/geolocation",
});

export const WeatherAPI = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:1902/api/weather"
    : "/api/weather",
});
