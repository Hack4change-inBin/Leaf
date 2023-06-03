import { View, Text } from "react-native";

export default function Filter() {
  function FilterButton({ name }) {
    return (
      <View
        style={{
          borderWidth: 1,
          borderRadius: 50,
          paddingHorizontal: 8,
          paddingVertical: 6,
          marginRight: 8,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 18,
            marginBottom: -4,
          }}
        >
          {name}
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
        paddingVertical: 24,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "HelveticaBold",
          color: "#000000",
          lineHeight: 20,
        }}
      >
        Sort
      </Text>
      <View style={{ flexDirection: "row", marginTop: 6 }}>
        <FilterButton name='Ostatnie' clicked></FilterButton>
        <FilterButton name='Popularne'></FilterButton>
        <FilterButton name='Najbliżej'></FilterButton>
      </View>
    </View>
  );
}