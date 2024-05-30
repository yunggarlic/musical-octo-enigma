export const getGeolocationQuery = (
  city: string,
  state?: string,
  country?: string
) => `${city}${state ? `,${state}` : ""}${country ? `,${country}` : ""}`;
