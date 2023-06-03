import { SafeAreaView, FlatList, StyleSheet, StatusBar, RefreshControl } from "react-native";
import Header from "../components/Header";
import Filter from "../components/Filter";

import { Post } from "../components/Post";


export default function HomeView() {
    const DATA = [{}, {}, {}, {}, {}];
  
    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}>
        <Header></Header>
        <Filter></Filter>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Post />}
          style={{ width: "100%" }}
          refreshControl={<RefreshControl />}
        />
      </SafeAreaView>
    );
}
