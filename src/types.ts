import { Request } from "express";

export interface WeatherRequestQuery {
  city: string;
  state?: string;
  country?: string;
  limit?: string;
}

export type WeatherRequest = Request<{}, {}, {}, WeatherRequestQuery>;
