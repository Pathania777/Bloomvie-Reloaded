import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  StatusBar,
} from "react-native";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>I am About </Text>
      </View>
      {/* <Button
        style={styles.btn}
        title="update name"
        onPress={() => navigation.setParams()}
      /> */}

      <Button
        style={styles.text}
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
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
  btn: {
    marginBottom: 20,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
