import React from "react";
import { View, Text, StyleSheet, StatusBar, Button, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LinearGrad() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#ff69b4", "#ff0000", "#ffff00"]}
        locations={[0.2, 0.6, 1]}
        style={styles.linearGradient}
      >
        <View style={styles.buttonBox}>
          <Button
            title="Facebook"
            onPress={() => Alert.alert("Hello")}
            color="#ff69b4"
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "navy",
    backgroundColor: "transparent",
    fontSize: 34,
    fontWeight: "bold",
  },
  buttonBox: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 20,
  },
});
