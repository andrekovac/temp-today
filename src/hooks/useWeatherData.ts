import { useEffect, useState } from "react";

import { WeatherApiResponse } from "../types/WeatherData";
import { CityName } from "../data/cities";
import calculateAverage from "../utils/calculateAverage";
import { fetchWeatherData } from "../utils/fetchWeatherData";

/**
 * Custom hook to fetch weather data and provide it to the component.
 */
const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(
    null
  );
  const [location, setLocation] = useState<CityName>("Berlin");

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await fetchWeatherData(location);
      setWeatherData(data);
    };

    fetchWeather();
  }, [location]);

  // Compute average temperature from hourly weatherData
  const temperatures = weatherData?.hourly.temperature_2m;
  const averageTemperature = temperatures
    ? calculateAverage(temperatures)
    : undefined;

  const humidity = weatherData?.current.relative_humidity_2m;
  const windSpeed = weatherData?.current.wind_speed_10m;

  return { averageTemperature, humidity, windSpeed, setLocation };
};

export default useWeatherData;
