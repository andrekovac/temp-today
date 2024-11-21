import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import * as Sentry from "@sentry/react-native";

import "../global.css";

import MainScreen from "./screens/MainScreen";
import Header from "./components/Header";

Sentry.init({
  dsn: "https://51ab27600424f934d3311b01a3ff458a@o376817.ingest.us.sentry.io/4508337761157120",
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <MainScreen />
      <Button
        title="Test Sentry Error!"
        onPress={() => {
          throw new Error("Intentional error");
        }}
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
