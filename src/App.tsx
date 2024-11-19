import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

import AdditionalInfo from "./components/AdditionalInfo";
import Header from "./components/Header";
import StyledButton from "./components/StyledButton";
import WeatherDisplay from "./components/WeatherDisplay";

import "../global.css";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <WeatherDisplay temperature={25} condition="Sunny" />
      <AdditionalInfo windSpeed={10} humidity={80} />
      <StyledButton
        title="Refresh"
        onPress={() => console.log("Button Pressed")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default App;
