import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { FilterSvg } from "../SvgIcons";

export default function Filter(props) {
  function FilterButton({ name, children, onPress }) {
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 50,
          paddingHorizontal: 10,
          paddingVertical: 3,
          marginRight: 8,
        }}
        onPress={onPress}
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
      </TouchableOpacity>
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
        <FilterButton name='Filtruj' onPress={props.onPress}> <FilterSvg /></FilterButton>
        <Text style={{fontFamily: 'Helvetica', color: '#595959'}}>Znaleziono 15 wyników</Text>
      </View>
    </View>
  );
}