const weatherSearchDefaultState = {
  query: {
    geocodeQuery: "",
    tempUnit: "" as "metric" | "imperial" | "standard",
  },
  queryResults: [] as GeocodeData[],
  geocodeData: {} as GeocodeData,
  weatherData: {} as WeatherData,
  forecastData: [] as ForecastData[],
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

    case "SET_FORECAST_DATA": {
      return {
        ...state,
        forecastData: action.payload.forecastData ?? state.forecastData,
      };
    }
    case "CLEAR_FORECAST_DATA": {
      return {
        ...state,
        forecastData: weatherSearchDefaultState.forecastData,
      };
    }
    default:
      return state;
  }
};

const weatherQueryDefaultState = {
  geocodeQuery: "",
  tempUnit: "metric" as "metric" | "imperial" | "standard",
};

const weatherQueryReducer = (
  state: WeatherQuery,
  action: WeatherSearchAction
): WeatherQuery => {
  switch (action.type) {
    case "SET_GEOCODE_QUERY":
      return {
        ...state,
        geocodeQuery: action.payload.geocodeQuery ?? state.geocodeQuery,
      };

    case "SET_TEMP_UNIT":
      return {
        ...state,
        tempUnit: action.payload.tempUnit ?? state.tempUnit,
      };
    default:
      return state;
  }
};

export {
  weatherSearchReducer,
  weatherSearchDefaultState,
  weatherQueryReducer,
  weatherQueryDefaultState,
};
