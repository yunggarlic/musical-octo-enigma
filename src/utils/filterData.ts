export function filterGeocodeData(
  data: any,
  state?: string,
  country?: string
): boolean {
  function filterFunc(mainStr?: string, substr?: string): boolean {
    if (!mainStr || !substr) return true;
    return mainStr.toLowerCase().startsWith(substr.toLowerCase());
  }

  const coordinateSet = new Set();

  return data.filter((data: any) => {
    if (coordinateSet.has(data.lat + data.lon)) return false;
    coordinateSet.add(data.lat + data.lon);
    return filterFunc(data.state, state) || filterFunc(data.country, country);
  });
}

export const filterForecastData = (data: any) => {
  return data.filter((forecast: any) => {
    return forecast.dt_txt.includes("12:00:00");
  });
};
