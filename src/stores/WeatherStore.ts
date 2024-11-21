import { makeAutoObservable, runInAction } from "mobx";

import { fetchWeatherData } from "../utils/fetchWeatherData";
import calculateAverage from "../utils/calculateAverage";
import { CityName } from "../data/cities";

class WeatherStore {
  location: CityName = "Berlin";
  humidity: number | null = null;
  windSpeed: number | null = null;
  temperatures: number[] = [];

  constructor() {
    makeAutoObservable(this);
    this.fetchWeather();
  }

  setLocation = (newLocation: CityName) => {
    this.location = newLocation;
    this.fetchWeather();
  };

  fetchWeather = async () => {
    try {
      const data = await fetchWeatherData(this.location);

      runInAction(() => {
        this.humidity = data.current.relative_humidity_2m;
        this.windSpeed = data.current.wind_speed_10m;
        this.temperatures = data.hourly.temperature_2m;
      });
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    }
  };

  get averageTemperature() {
    if (this.temperatures.length === 0) return null;
    return calculateAverage(this.temperatures);
  }
}

const weatherStore = new WeatherStore();
export default weatherStore;
