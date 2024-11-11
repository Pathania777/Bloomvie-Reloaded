import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  StatusBar,
} from "react-native";

export default function Home({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>I am Home </Text>
      </View>

      <Text style={styles.text}>{route.params?.result} </Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight,
  },

  text: {
    fontSize: 34,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
