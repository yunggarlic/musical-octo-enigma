import { Request } from "express";

interface GeolocationRequestQuery {
  city: string;
  state?: string;
  country?: string;
  limit?: string;
}

type GeolocationRequest = Request<{}, {}, {}, GeolocationRequestQuery>;

interface WeatherRequestQuery {
  lat: string;
  lon: string;
}

type WeatherRequest = Request<{}, {}, {}, WeatherRequestQuery>;

export {
  GeolocationRequest,
  WeatherRequest,
  GeolocationRequestQuery,
  WeatherRequestQuery,
};
