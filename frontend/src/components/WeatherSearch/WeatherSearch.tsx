import { useState, useEffect, useCallback, useRef } from "react";
import { GeolocationAPI } from "../../api";
import debounce from "lodash/debounce";
import CityOption from "./CityOption";

interface WeatherData {
  name: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
}

const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const fetchWeatherDataRef = useRef<ReturnType<typeof debounce> | null>(null);

  const fetchWeatherData = useCallback(async (city: string) => {
    if (city) {
      try {
        const response = await GeolocationAPI.get(`?city=${city}`);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  }, []);

  useEffect(() => {
    fetchWeatherDataRef.current = debounce((city: string) => {
      fetchWeatherData(city);
    }, 500);

    return () => {
      fetchWeatherDataRef.current?.cancel();
    };
  }, [fetchWeatherData]);

  useEffect(() => {
    fetchWeatherDataRef.current?.(city);
  }, [city]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <form className="" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {weatherData?.length > 2 && (
          <div>
            {weatherData.map((data: WeatherData) => (
              <CityOption
                key={data.lat + data.lon}
                data={data}
                handleClick={() => {
                  setCity(data.name);
                }}
              />
            ))}
          </div>
        )}
      </form>
      {weatherData && (
        <div>
          <h2>Current Weather</h2>
          {/* Display current weather */}
          <h2>5-Day Forecast</h2>
          {/* Display 5-day forecast */}
        </div>
      )}
    </div>
  );
};

export default WeatherSearch;
