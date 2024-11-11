import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  StatusBar,
  Animated,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function LanPage() {
  const navigation = useNavigation();
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 3000, // Duration of the animation
      useNativeDriver: true, // Use native driver for better performance
    }).start(() => {
      navigation.navigate("LoginPag"); // Navigate to LoginPag after animation
    });
  }, [animatedValue, navigation]);

  // Create multiple pieces for breaking effect
  const pieces = [];
  const pieceCount = 20; // Number of pieces
  const pieceSize = 60; // Size of each piece
  const randomOffset = 100; // Offset for randomness in pieces

  for (let i = 0; i < pieceCount; i++) {
    const translateX = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [
        (Math.random() - 0.5) * randomOffset, // Random x offset
        (Math.random() - 0.5) * randomOffset + (i % 5) * pieceSize, // Final position x
      ],
    });

    const translateY = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [
        (Math.random() - 0.5) * randomOffset, // Random y offset
        (Math.random() - 0.5) * randomOffset + Math.floor(i / 5) * pieceSize, // Final position y
      ],
    });

    pieces.push(
      <Animated.View
        key={i}
        style={{
          width: pieceSize,
          height: pieceSize,
          position: "absolute",
          left: (i % 5) * pieceSize,
          top: Math.floor(i / 5) * pieceSize,
          transform: [{ translateX }, { translateY }],
        }}
      >
        <ImageBackground
          source={require("../assests/BackGroundBloomvie.jpg")}
          style={styles.backgroundImage}
        />
      </Animated.View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullScreen}>
        {pieces}
        <LinearGradient
          colors={["rgba(243, 232, 242, 0.8)", "rgba(171, 105, 164, 0.8)"]}
          style={styles.gradient}
          locations={[0.1, 1]}
        >
          <View style={styles.logoContainer}>
            <Image
              source={require("../assests/Logo2.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.text}>Bloomvie</Text>
            <Text style={styles.textInner}>From Where It All Begins</Text>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  fullScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: 300,
    height: 300,
    opacity: 0.87,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 34,
    color: "purple",
    fontWeight: "bold",
  },
  textInner: {
    fontSize: 18,
    color: "#000",
  },
});
