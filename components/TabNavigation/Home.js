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
      {/* <Button
        style={{}}
        onPress={() => navigation.navigate("ContactScreen")}
        title="Go to ContactScreen"
      /> */}
    </View>
  );
}

export default HomeScreen;
