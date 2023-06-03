import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity } from "react-native";

import {
    HomeSvg,
    LeaderboardSvg,
    MapSvg,
    AddSvg,
    SettingsSvg,
} from "../SvgIcons";

import HomeView from "../views/HomeView";
import SettingsView from "../views/SettingsView";
import AddView from "../views/AddView";
import LeaderboardView from "../views/LeaderboardView";
import MapView from "../views/MapView";

const Tab = createBottomTabNavigator();

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', height: 80 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        function Icon({icon}) {
          switch(icon) {
            case "Home":
              return <HomeSvg />;
            case "Leaderboard":
              return <LeaderboardSvg />;
            case "Map":
              return <MapSvg />;
            case "Add":
              return <AddSvg />
            case "Settings":
              return <SettingsSvg />
          }
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            key={label}
          >
            {/* <View style={{width: 24, height: 24}}></View> */}
            <View style={{width: 42, height: 42, borderRadius: 50, backgroundColor: isFocused ? 'rgba(96, 161, 85, 0.3)' : '#FFFFFF', justifyContent: 'center', alignItems: 'center'}} >             
              <Icon icon={label}></Icon>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name='Home' component={HomeView}></Tab.Screen>
      <Tab.Screen name='Map' component={MapView}></Tab.Screen>
      <Tab.Screen name='Add' component={AddView}></Tab.Screen>
      <Tab.Screen name='Leaderboard' component={LeaderboardView}></Tab.Screen>
      <Tab.Screen name='Settings' component={SettingsView}></Tab.Screen>
    </Tab.Navigator>
  );
}