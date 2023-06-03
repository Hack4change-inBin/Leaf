import { View, Text } from "react-native";
import { FilterSvg } from "../SvgIcons";

export default function Filter() {
  function FilterButton({ name, children }) {
    return (
      <View
        style={{
          borderWidth: 1,
          borderRadius: 50,
          paddingHorizontal: 8,
          paddingVertical: 2,
          marginRight: 8,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Helvetica",
            color: "#000",
          }}
        >
          {name}{children}
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#F6F6F6",
        paddingHorizontal: 28,
        paddingVertical: 18,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <FilterButton name='Filtruj'> <FilterSvg /></FilterButton>
      </View>
    </View>
  );
}