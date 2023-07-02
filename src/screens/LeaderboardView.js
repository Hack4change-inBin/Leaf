import {
  SafeAreaView,
  Platform,
  StatusBar,
  FlatList,
  View,
  RefreshControl,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";

import Header from "../components/Header";
import Filter from "../components/Filter";
import { LeafActiveSvg } from "../components/SvgIcons";

function LeaderboardItem({ index }) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        marginBottom: 24,
        marginHorizontal: 28,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../assets/images/avatar.png")}
          style={{ marginRight: 20 }}
        />
        <View style={{ justifyContent: "space-evenly" }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "HelveticaBold",
              color: "#000000",
              lineHeight: 22,
            }}
          >
            Magda
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Helvetica",
                color: "#232323",
                lineHeight: 16,
                marginRight: 8
              }}
            >
              Magda
            </Text>
            <LeafActiveSvg />
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 28,
          fontFamily: "HelveticaBold",
          color: "#000000",
        }}
      >
        {index + 1}
      </Text>
    </TouchableOpacity>
  );
}

export default function LeaderboardView() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Header />
      <Filter />
      <FlatList
        style={{ marginTop: 30, width: "100%" }}
        data={[{}, {}, {}]}
        renderItem={({ item, index }) => <LeaderboardItem index={index} />}
        refreshControl={<RefreshControl />}
      />
    </SafeAreaView>
  );
}
