import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation, useRoute } from "@react-navigation/native";

const IntroScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userRole } = route.params; // Get the userRole parameter

  const handleSkip = () => {
    if (userRole === "Parent") {
      navigation.navigate("Dashboard");
    } else if (userRole === "Teacher") {
      navigation.navigate("TeacherDash");
    }
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
      >
        <View style={styles.slide}>
          <Image
            source={require("../assests/slide2.png")}
            style={[
              styles.image,
              { width: 376, height: 439, borderRadius: 10 },
            ]}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assests/slide3.png")}
            style={[
              styles.image,
              { width: 376, height: 439, borderRadius: 10 },
            ]}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assests/children.png")}
            style={[
              styles.image,
              { width: 376, height: 439, borderRadius: 10 },
            ]}
          />
        </View>
      </Swiper>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Hello {userRole}</Text>
        <Text style={styles.subtitle}>
          Welcome to a world where every little moment matters. We’re here to
          nurture, care, and watch your child's journey unfold, one smile at a
          time.
        </Text>
      </View>

      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText} onPress={handleSkip}>
          Skip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b589d6",
    paddingBottom: 90,
  },
  wrapper: {
    height: "100%",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  dot: {
    backgroundColor: "#ffffff99",
    width: 12,
    height: 12,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 20,
    height: 12,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
  },
  skipButton: {
    position: "absolute",
    bottom: 30,
    right: 40,
  },
  skipText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default IntroScreen;
