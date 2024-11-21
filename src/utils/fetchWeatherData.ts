import axios from "axios";

import { WeatherApiResponse } from "../types/WeatherData";
import { cityCoordinates, CityName } from "../data/cities";

export const fetchWeatherData = async (location: CityName) => {
  const coords = cityCoordinates[location];

  const response = await axios.get<WeatherApiResponse>(
    "https://api.open-meteo.com/v1/forecast",
    {
      params: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        current: "relative_humidity_2m,wind_speed_10m",
        hourly: "temperature_2m",
        timezone: "Europe/Berlin",
        past_days: 0,
        forecast_days: 1,
      },
    }
  );

  return response.data;
};
