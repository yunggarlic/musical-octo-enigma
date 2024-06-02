export const getForecastQuery = (lat: string, lon: string, units?: string) =>
  `?lat=${lat}&lon=${lon}&units=${units}`;
