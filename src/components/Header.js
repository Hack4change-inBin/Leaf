import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BackArrowSvg, HeaderLogoSvg } from "./common/SvgIcons";

export default function Header() {
    const image = require("../../assets/images/example-profile-avatar.png");

    return (
        <View style={styles.headerContainer}>
            <HeaderLogoSvg />
            <View style={{ flexDirection: "row-reverse" }}>
                <Image source={image} />
                <View style={{ justifyContent: "center", alignItems: "flex-end", marginRight: 10 }}>
                    <Text style={styles.headerProfileName}>Marta</Text>
                    <Text style={styles.headerShowProfile}>Zobacz swój profil</Text>
                </View>
            </View>
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
                paddingHorizontal: 28,
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
                    marginLeft: 28,
                }}
            >
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 110,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 28,
    },
    headerProfileName: {
        color: "#232323",
        fontFamily: "Helvetica",
    },
    headerShowProfile: {
        color: "#797979",
        fontFamily: "HelveticaLight",
    },
});
