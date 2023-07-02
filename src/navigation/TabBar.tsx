import { Platform, TouchableOpacity, View, StyleSheet } from "react-native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import {
    AddSvg,
    HomeSvg,
    LeaderboardSvg,
    MapSvg,
    SettingsSvg,
} from "../components/SvgIcons";

export default function TabBar({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) {
    return (
        <View style={styles.tabBarContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label: string =
                    typeof options.tabBarLabel === "string"
                        ? options.tabBarLabel
                        : options.title ?? route.name;

                const isFocused = state.index === index;

                function onPress() {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, { merge: true });
                    }
                }

                function onLongPress() {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                }

                function Icon({ icon }: { icon: string }) {
                    switch (icon) {
                        case "Home":
                            return <HomeSvg />;
                        case "Leaderboard":
                            return <LeaderboardSvg />;
                        case "Map":
                            return <MapSvg />;
                        case "Add":
                            return <AddSvg />;
                        case "Settings":
                            return <SettingsSvg />;
                    }
                }

                return (
                    <TouchableOpacity
                        accessibilityRole='button'
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={stylesBase.centered}
                        key={label}
                    >
                        <View
                            style={isFocused ? styles.iconFocused : styles.icon}
                        >
                            <Icon icon={label}></Icon>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const stylesBase = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    iconBase: {
        width: 42,
        height: 42,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
});

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: "row",
        height: Platform.OS == "ios" ? 100 : 80,
    },
    icon: {
        ...stylesBase.iconBase,
        backgroundColor: "#FFFFFF",
    },
    iconFocused: {
        ...stylesBase.iconBase,
        backgroundColor: "rgba(96, 161, 85, 0.3)",
    },
});
