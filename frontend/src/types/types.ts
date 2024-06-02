type WeatherSearchState = {
  query: WeatherQuery;
  queryResults: GeocodeData[];
  geocodeData: GeocodeData;
  weatherData: WeatherData;
  forecastData: ForecastData;
};

type WeatherQuery = {
  geocodeQuery: string;
  tempUnit: string;
};

type WeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

type WeatherSearchAction = {
  type: string;
  payload?: any;
};
type GeocodeData = {
  name: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
};

type ForecastData = {};
