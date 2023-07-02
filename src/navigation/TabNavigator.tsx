import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AddView from "../screens/AddView";
import HomeView from "../screens/HomeView";
import LeaderboardView from "../screens/LeaderboardView";
import MapView from "../screens/MapView";
import SettingsView from "../screens/SettingsView";
import TabBar from "./TabBar";

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
