export const getWeatherQuery = (lat: string, lon: string, mode: string) =>
  `?lat=${lat}&lon=${lon}&mode=${mode}`;
