export const getWeatherQuery = (lat: string, lon: string, units?: string) =>
  `?lat=${lat}&lon=${lon}&units=${units}`;
