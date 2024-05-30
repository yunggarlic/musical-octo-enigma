import { Request } from "express";

export interface GeolocationRequestQuery {
  city: string;
  state?: string;
  country?: string;
  limit?: string;
}

export type GeolocationRequest = Request<{}, {}, {}, GeolocationRequestQuery>;

export interface WeatherRequestQuery {
  lat: string;
  lon: string;
}

export type WeatherRequest = Request<{}, {}, {}, WeatherRequestQuery>;
