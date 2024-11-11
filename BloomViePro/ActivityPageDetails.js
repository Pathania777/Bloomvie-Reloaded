import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Svg, { Circle } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient"; // Ensure this import
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const ActivityPageDetails = () => {
  const navigation = useNavigation(); // Initialize navigation
  const maxNapTime = 8;
  const [selectedSession, setSelectedSession] = useState("1");
  const [editableTime, setEditableTime] = useState(""); // State to manage editing time

  const napSessions = [
    {
      id: "1",
      type: "Sleep Time",
      time: "10:00AM - 01:00 PM",
      totalNapTime: 3, // 3 hours
    },
    {
      id: "2",
      type: "Short Nap",
      time: "02:00PM - 02:25 PM",
      totalNapTime: 0.5,
    }, // 30 minutes
    {
      id: "3",
      type: "Power Nap",
      time: "04:20PM - 04:35PM",
      totalNapTime: 0.25,
    }, // 15 minutes
  ];

  const handleSelectSession = (id) => {
    setSelectedSession(id);
  };

  const handleEditTime = (id, newTime) => {
    const updatedSessions = napSessions.map((session) => {
      if (session.id === id) {
        return { ...session, time: newTime };
      }
      return session;
    });
    // Update the napSessions state with the new time (you might want to use state for napSessions as well)
    // setNapSessions(updatedSessions);  // If you are using state to manage napSessions
  };

  const renderProgressBar = (totalNapTime) => {
    const strokeDasharray = 440;
    const strokeDashoffset =
      strokeDasharray - (totalNapTime / maxNapTime) * strokeDasharray;

    return (
      <Svg
        width={250}
        height={250}
        viewBox="0 0 180 180"
        onPress={() => navigation.navigate("ActivitiesPage")}
        goback
      >
        <Circle
          cx="90"
          cy="90"
          r="80"
          stroke="#E0E0E0"
          strokeWidth="12"
          fill="none"
        />
        <Circle
          cx="90"
          cy="90"
          r="80"
          stroke="#A594F9" // Solid color instead of gradient dont use gradient
          strokeWidth="12"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
    );
  };

  const selectedSessionDetails = napSessions.find(
    (session) => session.id === selectedSession
  );

  const formatNapTime = (timeInHours) => {
    if (timeInHours >= 1) {
      return `${Math.floor(timeInHours)} hour${
        Math.floor(timeInHours) > 1 ? "s" : ""
      }`;
    }
    const minutes = Math.round(timeInHours * 60);
    return `${minutes} minute${minutes > 1 ? "s" : ""}`;
  };

  const isPowerNap = selectedSessionDetails?.type === "Power Nap";

  return (
    <LinearGradient
      style={styles.container}
      colors={["#f7e4f5", "#fff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Text style={styles.header}>Nap Time</Text>

      <View style={styles.circularContainer}>
        {selectedSessionDetails &&
          renderProgressBar(selectedSessionDetails.totalNapTime)}

        <View style={styles.centerTextContainer}>
          {selectedSessionDetails && (
            <View style={styles.centerTextLabel}>
              <Text>Today's {selectedSessionDetails.type}</Text>
              <Text style={{ fontSize: 20 }}>
                {formatNapTime(selectedSessionDetails.totalNapTime)}
              </Text>
            </View>
          )}
        </View>
      </View>

      <FlatList
        data={napSessions}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.sessionContainer,
              selectedSession === item.id && styles.sessionSelected,
              isPowerNap && styles.powerNapContainer, // Apply special styles for Power Nap
            ]}
            onPress={() => handleSelectSession(item.id)}
          >
            <View style={styles.radioButtonContainer}>
              <View
                style={[
                  styles.radioButton,
                  selectedSession === item.id && styles.radioButtonSelected,
                ]}
              />
            </View>
            <View style={isPowerNap ? styles.sessionDetailsColumn : null}>
              <Text style={styles.sessionType}>{item.type}</Text>
              {/* Editable Time Section */}
              {editableTime === item.id ? (
                <TextInput
                  style={styles.editableTime}
                  value={item.time}
                  onChangeText={(text) => setEditableTime(text)}
                  onBlur={() => {
                    handleEditTime(item.id, editableTime);
                    setEditableTime(""); // reset editable state here
                  }}
                  autoFocus
                />
              ) : (
                <TouchableOpacity onPress={() => setEditableTime(item.id)}>
                  <Text style={styles.sessionTime}>{item.time}</Text>
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        style={styles.sessionList}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    color: "#4C4C4C",
  },
  circularContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  centerTextContainer: {
    position: "absolute",
    alignItems: "center",
  },
  centerTextLabel: {
    fontSize: 16,
    color: "#A594F9",
    fontWeight: "bold",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  sessionList: {
    marginTop: 20,
  },
  sessionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  powerNapContainer: {
    alignItems: "flex-start",
  },
  sessionDetailsColumn: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  radioButtonContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#B272A4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  radioButton: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FFF",
  },
  radioButtonSelected: {
    backgroundColor: "#B272A4",
  },
  sessionType: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333333",
  },
  sessionTime: {
    fontSize: 14,
    color: "#888888",
  },
  editableTime: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderColor: "#B272A4",
    padding: 5,
    color: "#333",
  },
  sessionSelected: {
    backgroundColor: "#eac6e78c",
  },
});

export default ActivityPageDetails;
