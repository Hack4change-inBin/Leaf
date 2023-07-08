import { TouchableOpacity, View } from "react-native";
import {
    AddSvg,
    HomeSvg,
    LeaderboardSvg,
    MapSvg,
    SettingsSvg
} from "../components/SvgIcons";
import { styles, stylesBase } from "./TabNavigator";

export function TabBarButton({ route, index, state, descriptors, navigation }) {
    const { options } = descriptors[route.key];
    const label: string = typeof options.tabBarLabel === "string"
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

    function Icon({ icon }: { icon: string; }) {
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
            <View style={isFocused ? styles.iconFocused : styles.icon}>
                <Icon icon={label}></Icon>
            </View>
        </TouchableOpacity>
    );
}
