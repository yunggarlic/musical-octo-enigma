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
  units?: string;
}

type WeatherRequest = Request<{}, {}, {}, WeatherRequestQuery>;

interface ForecastRequestQuery {
  lat: string;
  lon: string;
  units?: string;
}

type ForecastRequest = Request<{}, {}, {}, ForecastRequestQuery>;

export {
  GeolocationRequest,
  WeatherRequest,
  GeolocationRequestQuery,
  WeatherRequestQuery,
  ForecastRequest,
};
