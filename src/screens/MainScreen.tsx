import { StyleSheet, View } from "react-native";

import AdditionalInfo from "../components/AdditionalInfo";
import WeatherDisplay from "../components/WeatherDisplay";
import StyledButton from "../components/StyledButton";

const MainScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <WeatherDisplay temperature={25} condition="Sunny" />
        <AdditionalInfo windSpeed={10} humidity={80} />
      </View>

      <StyledButton onPress={() => console.log("Button Pressed")}>
        Refresh
      </StyledButton>
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
