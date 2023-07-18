import { View } from "react-native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { TabBarButton } from "@/components/TabBar/TabBarButton";
import useKeyboardStatus from "@/hooks/useKeyboardStatus";
import { stylesTabNavigator } from "@/navigation/TabNavigator";

export default function TabBar({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) {
    const {keyboardStatus} = useKeyboardStatus();

    return !keyboardStatus ? (
        <View style={stylesTabNavigator.tabBarContainer}>
            {state.routes.map((route, index) => <TabBarButton key={index} state={state} descriptors={descriptors} navigation={navigation} route={route} index={index} />)}
        </View>
    ) : null;
}


