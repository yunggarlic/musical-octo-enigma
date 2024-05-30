import { useState, useEffect, useCallback } from "react";
import { GeolocationAPI } from "../../api";
import debounce from "lodash/debounce";

interface WeatherData {
  // Define the structure of the weather data
}

const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeatherData = useCallback(
    debounce(async (city: string) => {
      if (city) {
        try {
          const response = await GeolocationAPI.get(`?city=${city}`);
          console.log(response)
          setWeatherData(response.data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    }, 500), // Adjust the debounce delay as needed
    []
  );

  useEffect(() => {
    fetchWeatherData(city);
  }, [city, fetchWeatherData]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger search when the form is submitted
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
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
