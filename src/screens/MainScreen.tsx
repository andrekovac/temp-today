import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import axios from "axios";

import AdditionalInfo from "../components/AdditionalInfo";
import WeatherDisplay from "../components/WeatherDisplay";
import LocationSelector from "../components/LocationSelector";

import { cityCoordinates, CityName } from "../data/cities";
import { WeatherApiResponse } from "../types/WeatherData";
import calculateAverage from "../utils/calculateAverage";

const MainScreen: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(
    null
  );
  const [location, setLocation] = useState<CityName>("Berlin");

  useEffect(() => {
    const fetchWeather = async () => {
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

      setWeatherData(response.data);
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

  return (
    <View style={styles.container}>
      {averageTemperature && humidity && windSpeed ? (
        <View>
          <WeatherDisplay
            temperature={averageTemperature}
            condition="Average Temperature"
          />
          <AdditionalInfo windSpeed={windSpeed} humidity={humidity} />
        </View>
      ) : (
        <Text>Could not retrieve weather data.</Text>
      )}

      <LocationSelector setLocation={setLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 10,
  },
});

export default MainScreen;
