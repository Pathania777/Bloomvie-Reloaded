import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./Home";
import NotificationsScreen from "./About";

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
