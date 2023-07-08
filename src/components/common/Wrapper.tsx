import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function Wrapper({ style, ...props }) {
    return <SafeAreaView style={[styles.wrapper, style]} {...props} />;
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
