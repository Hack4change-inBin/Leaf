import { View, Image, Text, TouchableOpacity } from "react-native";
import { BackArrowSvg, HeaderLogoSvg } from "../SvgIcons";

export default function Header() {
  return (
    <View
      style={{
        width: "100%",
        height: 110,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 28,
      }}
    >
      <HeaderLogoSvg />
      <Image
        source={require("../../assets/images/example-profile-avatar.png")}
      />
    </View>
  );
}

export function HeaderBackArrow({ title, onPress }) {
  return (
    <View
      style={{
        width: "100%",
        height: 110,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <BackArrowSvg />
      </TouchableOpacity>
      
      <Text
        style={{
          fontSize: 24,
          fontFamily: "HelveticaBold",
          color: "#000000",
          marginLeft: 28
        }}
      >
        {title}
      </Text>
    </View>
  );
}
