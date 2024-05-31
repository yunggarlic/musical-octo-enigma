const weatherSearchDefaultState = {
  query: "",
  queryResults: [] as GeocodeData[],
  geocodeData: {} as GeocodeData,
  weatherData: {} as WeatherData,
};

const weatherSearchReducer = (
  state: WeatherSearchState,
  action: WeatherSearchAction
): WeatherSearchState => {
  switch (action.type) {
    case "SET_QUERY_RESULTS":
      return {
        ...state,
        queryResults: action.payload.queryResults ?? state.queryResults,
      };
    case "CLEAR_QUERY_RESULTS":
      return {
        ...state,
        queryResults: weatherSearchDefaultState.queryResults,
      };
    case "SET_GEOCODE_DATA":
      return {
        ...state,
        geocodeData: action.payload.geocodeData ?? state.geocodeData,
      };
    case "CLEAR_GEOCODE_DATA":
      return {
        ...state,
        geocodeData: weatherSearchDefaultState.geocodeData,
      };
    case "SET_WEATHER_DATA":
      return {
        ...state,
        weatherData: action.payload.weatherData ?? state.weatherData,
      };
    case "CLEAR_WEATHER_DATA":
      return {
        ...state,
        weatherData: weatherSearchDefaultState.weatherData,
      };
    case "SET_QUERY": {
      return {
        ...state,
        query: action.payload.query ?? state.query,
      };
    }
    case "CLEAR_QUERY": {
      return {
        ...state,
        query: weatherSearchDefaultState.query,
      };
    }
    default:
      return state;
  }
};

export { weatherSearchReducer, weatherSearchDefaultState };
