import { useState } from "react";
import { View, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";

import StyledButton from "./StyledButton";
import { cityCoordinates, CityName } from "../data/cities";

type LocationSelectorProps = {
  setLocation: (city: CityName) => void;
};

const LocationSelector: React.FC<LocationSelectorProps> = ({ setLocation }) => {
  const [selectedCity, setSelectedCity] = useState<CityName>("Berlin");

  const handleCityChange = (city: CityName) => {
    setSelectedCity(city);
    console.log("Selected city:", city);
  };

  const handlePress = () => {
    setLocation(selectedCity);
  };

  return (
    <View className="m-5">
      <Picker
        selectedValue={selectedCity}
        onValueChange={handleCityChange}
        itemStyle={{ color: "blue" }}
      >
        {Object.keys(cityCoordinates).map((city) => (
          <Picker.Item key={city} label={city} value={city} />
        ))}
      </Picker>
      <StyledButton onPress={handlePress}>Set Location</StyledButton>
    </View>
  );
};

export default LocationSelector;
