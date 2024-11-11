import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./LandingPage";
import LoginBloom from "./LoginBloom";

const Stack = createStackNavigator();

export default function BloomvieStack() {
  return (
    <Stack.Navigator
      initialRouteName="LandingPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="LoginPage" component={LoginBloom} />
    </Stack.Navigator>
  );
}
