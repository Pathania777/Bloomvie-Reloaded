import { Button, View, Text } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "cyan",
      }}
    >
      <Text style={{}}> Home Page</Text>
      <Button
        style={{}}
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

export default HomeScreen;
