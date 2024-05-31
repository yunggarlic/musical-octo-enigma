export const getGeolocationQuery = (
  city: string,
  state?: string,
  country?: string
) => [city, state, country].filter((x) => x).join(",");
