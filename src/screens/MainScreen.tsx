import { StyleSheet, View, Text } from "react-native";

import AdditionalInfo from "../components/AdditionalInfo";
import WeatherDisplay from "../components/WeatherDisplay";
import LocationSelector from "../components/LocationSelector";

import useWeatherData from "../hooks/useWeatherData";

const MainScreen: React.FC = () => {
  const { averageTemperature, humidity, windSpeed, setLocation } =
    useWeatherData();

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
