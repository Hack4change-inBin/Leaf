import { SafeAreaView, Platform, StatusBar, Text } from "react-native";

import { HeaderBackArrow } from "../components/Header";

export default function LeaderboardView() {
    return <SafeAreaView style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}>
        <HeaderBackArrow title="Add new post" />
        <Text style={{
          fontSize: 24,
          fontFamily: "HelveticaBold",
          color: "#000000",
          marginLeft: 28
        }}></Text>
    </SafeAreaView>
}