export const getGeolocationQuery = (
  city: string,
  state?: string,
  country?: string,
  limit?: string
) => {
  const params = new URLSearchParams();
  params.append("city", city);
  if (state) params.append("state", state);
  if (country) params.append("country", country);
  if (limit) params.append("limit", limit);

  return params.toString();
};
