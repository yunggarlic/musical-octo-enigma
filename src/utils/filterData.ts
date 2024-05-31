export function filterGeocodeData(
  data: any,
  state?: string,
  country?: string
): boolean {
  return data.filter(
    (data: any) =>
      filterFunc(data.state, state) || filterFunc(data.country, country)
  );
}

function filterFunc(mainStr?: string, substr?: string): boolean {
  if (!mainStr || !substr) return true;
  return mainStr.toLowerCase().startsWith(substr.toLowerCase());
}
