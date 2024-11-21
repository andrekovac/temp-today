import { StyleSheet, View, Text } from "react-native";
import { observer } from "mobx-react";

import AdditionalInfo from "../components/AdditionalInfo";
import WeatherDisplay from "../components/WeatherDisplay";
import LocationSelector from "../components/LocationSelector";

import weatherStore from "../stores/WeatherStore";

const MainScreen: React.FC = () => {
  const { averageTemperature, humidity, windSpeed, setLocation } = weatherStore;

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

export default observer(MainScreen);
