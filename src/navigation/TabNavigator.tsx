import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AddView from "@/screens/AddView";
import HomeView from "@/screens/HomeView";
import LeaderboardView from "@/screens/LeaderboardView";
import MapView from "@/screens/MapView";
import SettingsView from "@/screens/SettingsView";
import TabBar from "@/components/TabBar/TabBar";
import { StyleSheet, Platform } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <TabBar {...props} />}
        >
            <Tab.Screen name='Home' component={HomeView} />
            <Tab.Screen name='Map' component={MapView} />
            <Tab.Screen name='Add' component={AddView} />
            <Tab.Screen name='Leaderboard' component={LeaderboardView} />
            <Tab.Screen name='Settings' component={SettingsView} />
        </Tab.Navigator>
    );
}

export const stylesBase = StyleSheet.create({
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

export const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: "row",
        height: Platform.OS == "ios" ? 100 : 80,
    },
    tabBarIcon: {
        ...stylesBase.iconBase,
        backgroundColor: "#FFFFFF",
    },
    tabBarIconFocused: {
        ...stylesBase.iconBase,
        backgroundColor: "rgba(96, 161, 85, 0.3)",
    },
});
