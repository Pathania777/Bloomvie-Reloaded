import { Button, View, Text } from "react-native";

function NotificationsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "skyblue",
      }}
    >
      <Text style={{ marginBottom: 10 }}> Notification Page</Text>
      <Button
        style={{}}
        onPress={() => navigation.goBack()}
        title="Go back home"
      />
    </View>
  );
}

export default NotificationsScreen;
