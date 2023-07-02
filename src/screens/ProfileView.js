import { SafeAreaView, Platform, StatusBar } from "react-native";

export default function ProfileView() {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}>
        
      </SafeAreaView>
    );
}
