import { View } from "react-native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { TabBarButton } from "./TabBarButton";
import { styles } from "./TabNavigator";

export default function TabBar({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) {
    return (
        <View style={styles.tabBarContainer}>
            {state.routes.map((route, index) => <TabBarButton state={state} descriptors={descriptors} navigation={navigation} route={route} index={index} />)}
        </View>
    );
}


