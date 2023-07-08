import { Platform, SafeAreaView, StatusBar, StyleSheet, ViewProps } from "react-native";

export default function Wrapper({ style, ...props } : ViewProps) {
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
