import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

import "../global.css";

import MainScreen from "./screens/MainScreen";
import Header from "./components/Header";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <MainScreen />
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
