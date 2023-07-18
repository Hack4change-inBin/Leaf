import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import TabNavigator from "@/navigation/TabNavigator";

export default function App() {
    const [loadedFonts] = useFonts({
        HelveticaLight: require("./assets/fonts/Helvetica-Light.ttf"),
        Helvetica: require("./assets/fonts/Helvetica.ttf"),
        HelveticaBold: require("./assets/fonts/Helvetica-Bold.ttf"),
    });

    if (!loadedFonts) {
        return null;
    }

    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}
0;
