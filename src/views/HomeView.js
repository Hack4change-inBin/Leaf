import { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  RefreshControl,
  Modal,
  Button,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import Filter from "../components/Filter";

import { Post } from "../components/Post";

function FilterButton({title, onPress}) {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginRight: 8,
        marginTop: 8
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
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default function HomeView() {
  const [isVisible, setVisible] = useState(false);

  const DATA = [{}, {}, {}, {}, {}];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Modal
        animationType={"slide"}
        presentationStyle={"overFullScreen"}
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
          setVisible((prevState) => !prevState);
        }}
      >
        <View
          style={{
            backgroundColor: "#FFFFFF",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.87,
            shadowRadius: 15,
            elevation: 6,
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "HelveticaBold",
              color: "#000000",
              marginLeft: 28,
              marginTop: 28,
            }}
          >
            Filter
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "HelveticaBold",
              color: "#000000",
              marginLeft: 28,
              marginTop: 20,
            }}
          >
            Data
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: 'wrap',
              marginHorizontal: 28,
              marginTop: 8,
            }}
          >
            <FilterButton title="Dziś" />
            <FilterButton title="Tydzień" />
            <FilterButton title="Miesiąc" />
            <FilterButton title="Rok" />
            <FilterButton title="Wszystkie" />
          </View>

          <Text
            style={{
              fontSize: 18,
              fontFamily: "HelveticaBold",
              color: "#000000",
              marginLeft: 28,
              marginTop: 20,
            }}
          >
            Lokalizacja
          </Text>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              paddingHorizontal: 28,
              paddingVertical: 50,
            }}
          >
            <Pressable
              onPress={() => {
                setVisible((prevState) => !prevState);
              }}
              style={{
                backgroundColor: "#B8BEB7",
                width: "45%",
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                borderRadius: 8
              }}
            >
              <Text
                style={{
                  fontFamily: "Helvetica",
                  fontSize: 16,
                  color: "#FFFFFF",
                }}
              >
                Anuluj
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setVisible((prevState) => !prevState);
              }}
              style={{
                backgroundColor: "#60A155",
                width: "45%",
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                borderRadius: 8
              }}
            >
              <Text
                style={{
                  fontFamily: "Helvetica",
                  fontSize: 16,
                  color: "#FFFFFF",
                }}
              >
                Zastosuj
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Header></Header>
      <Filter onPress={() => setVisible((prevState) => !prevState)}></Filter>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Post />}
        style={{ width: "100%" }}
        refreshControl={<RefreshControl />}
      />
    </SafeAreaView>
  );
}
