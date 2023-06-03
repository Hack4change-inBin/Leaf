import { View, Text } from "react-native";
import { FilterSvg } from "../SvgIcons";

export default function Filter() {
  function FilterButton({ name, children }) {
    return (
      <View
        style={{
          borderWidth: 1,
          borderRadius: 50,
          paddingHorizontal: 10,
          paddingVertical: 3,
          marginRight: 8,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "HelveticaLight",
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
        paddingVertical: 16,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
        <FilterButton name='Filtruj'> <FilterSvg /></FilterButton>
        <Text style={{fontFamily: 'Helvetica', color: '#595959'}}>Znaleziono 15 wyników</Text>
      </View>
    </View>
  );
}