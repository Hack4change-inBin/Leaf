import {
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
  TextInput,
} from "react-native";
import { HeaderBackArrow } from "../components/Header";

export default function AddView({ route, navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 28,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <HeaderBackArrow
        title='Add new post'
        onPress={() => navigation.goBack()}
      />
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Helvetica",
          color: "#000000",
        }}
      >
        Tytuł
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          borderColor: "#979797",
          borderRadius: 8,
          fontSize: 18,
        }}
        placeholder='Tytuł'
      ></TextInput>

      <Text
        style={{
          fontSize: 18,
          fontFamily: "Helvetica",
          color: "#000000",
          marginTop: 10,
        }}
      >
        Opis
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          borderColor: "#979797",
          borderRadius: 8,
          fontSize: 18,
          textAlignVertical: "top",
        }}
        placeholder='Opis'
        multiline={true}
        numberOfLines={3}
      ></TextInput>

      
    </SafeAreaView>
  );
}
