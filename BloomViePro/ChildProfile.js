import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ChildProfile = () => {
  return (
    <ImageBackground
      source={require("../assests/children.png")} // Confirm path and file type
      style={styles.backgroundImage}
    >
      {/* Wrap LinearGradient in a View and set opacity */}
      <View style={styles.gradientOverlay}>
        <LinearGradient
          colors={["#fff", "#EFE5F1", "#AE85AA"]}
          locations={[0.1, 0.5, 1]} // Adjust these values for more contrast
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradient}
        />
      </View>
      <View style={styles.container}>
        <LinearGradient
          colors={["#f8e4f8", "#d0a4f8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.profileImageContainer}
        >
          <Image
            source={require("../assests/ChildProfile.png")}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraIconContainer}>
            <Text style={styles.cameraIcon}>📷</Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={styles.infoContainer}>
          <View style={styles.infoContainerInner}>
            <Text style={styles.label}>
              Name: <Text style={styles.value}>Julie James</Text>
            </Text>
            <Text style={styles.label}>
              DOB: <Text style={styles.value}>23/05/2022</Text>
            </Text>
            <Text style={styles.label}>
              Email: <Text style={styles.value}>julie@gmail.com</Text>
            </Text>
            <Text style={styles.label}>
              City: <Text style={styles.value}>New York</Text>
            </Text>
            <Text style={styles.label}>
              Class: <Text style={styles.value}>Shine star A</Text>
            </Text>
            <Text style={styles.label}>
              Phone: <Text style={styles.value}>+61 4650404335</Text>
            </Text>
            <Text style={styles.label}>
              Parent 1: <Text style={styles.value}>Krystina (Mother)</Text>
            </Text>
            <Text style={styles.label}>
              Parent 2: <Text style={styles.value}>Rojer (Father)</Text>
            </Text>
            <Text style={styles.label}>
              Teacher:{" "}
              <Text style={styles.value}>Lussie (Class-In charge)</Text>
            </Text>
            <Text style={styles.label}>
              Subscription:{" "}
              <Text style={styles.value}>Gold User (Monthly)</Text>
            </Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text style={styles.label}>Days Attending:</Text>
              <View style={styles.daysContainer}>
                <Text style={styles.day}>Mon</Text>
                <Text style={styles.day}>Tue</Text>
                <Text style={styles.day}>Wed</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.1)", // Fallback background color

    position: "relative",
  },
  gradientOverlay: {
    position: "absolute", // Positioning to overlay on the background
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.91, // Adjust the opacity here
    zIndex: 1, // Ensures gradient is above the background
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    zIndex: 2, // Ensures content is above the gradient

    paddingTop: StatusBar.currentHeight,
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 20,
    width: 130,
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 65,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 5,
  },
  cameraIcon: {
    fontSize: 14,
  },
  infoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 15,
  },
  infoContainerInner: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 20,
    padding: 15,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginVertical: 3,
    fontWeight: "600",
  },
  value: {
    fontWeight: "400",
    color: "#333",
  },
  daysContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  day: {
    backgroundColor: "#f0a0f0",
    color: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 5,
    textAlign: "center",
  },
});

export default ChildProfile;
