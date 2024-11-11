import * as React from "react";
import { Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationsScreen from "./About";
import ContactScreen from "./Contact";
import HomeScreen from "./Home";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "About") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "Contact") {
            iconName = focused ? "call" : "call-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarBadge: 3 }}
      />

      <Tab.Screen name="About" component={ContactScreen} />
      <Tab.Screen name="Contact" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}
