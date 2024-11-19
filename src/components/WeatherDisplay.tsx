import React from "react";
import { View, Text, StyleSheet } from "react-native";

type WeatherDisplayProps = {
  temperature: number;
  condition: string;
};

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  temperature,
  condition,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.condition}>{condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
  },
  temperature: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
  },
  condition: {
    fontSize: 24,
    color: "#666",
    marginTop: 10,
  },
});

export default WeatherDisplay;
