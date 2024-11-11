import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import About from "./About";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "My Home" }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ title: "About Me" }}
      />
    </Stack.Navigator>
  );
};

export default Main;
