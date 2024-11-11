import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";

const ActivitiesPage = () => {
  const [selectedTab, setSelectedTab] = useState("Personal");
  const screenWidth = Dimensions.get("window").width;

  const containerStyle = {
    width: screenWidth > 768 ? "99%" : "97%",
  };

  const navigation = useNavigation();
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const planetScale = useState(new Animated.Value(0))[0];
  const cubeScale = useState(new Animated.Value(0))[0];

  const planetRotate = useState(new Animated.Value(0))[0];

  const animateIcons = () => {
    const rotateAnim = planetRotate.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });

    Animated.loop(
      Animated.sequence([
        Animated.timing(planetScale, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(cubeScale, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(planetRotate, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),

        Animated.timing(planetScale, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(cubeScale, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(planetRotate, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    animateIcons();
  }, []);

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  return (
    <LinearGradient
      colors={["#f7e4f5", "#fff"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      {/* Header */}

      <View style={styles.header}>
        <Icon name="chevron-left" size={24} color="#333" />
        <Text style={styles.headerText}>Today</Text>
        <Icon name="chevron-right" size={24} color="#333" />
      </View>

      {/* Greeting */}
      <View style={styles.greetContainer}>
        <View style={styles.greetingTextContainer}>
          <Text style={styles.greetingText}>Hello,</Text>
          <Text style={styles.userName}>
            Julie James <Text>👋</Text>
          </Text>

          <View style={styles.planetContainer}>
            <Animated.Text
              style={{
                fontSize: 28,
                transform: [
                  { scale: planetScale },
                  {
                    rotate: planetRotate.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "360deg"],
                    }),
                  },
                ],
              }}
            >
              🪐
            </Animated.Text>
            <Animated.View
              style={{
                transform: [
                  { scale: cubeScale },
                  {
                    rotate: planetRotate.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["360deg", "0deg"],
                    }),
                  },
                ],
              }}
            >
              <Icon name="cube" size={25} color={"#0d99ff"} />
            </Animated.View>
          </View>
        </View>
        <Image
          source={require("../assests/iooi.png")}
          style={styles.greetImage}
        />
      </View>

      {/* Category Tabs  adde here  ⚔ */}
      <View style={styles.categoryTabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            styles.tab,
            selectedTab === "Classroom" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("Classroom")}
        >
          <View style={[styles.textHead]}>
            <Image
              source={require("../assests/classroom.png")}
              style={styles.textBody}
            />
          </View>
          <Text
            style={[
              styles.tabText,
              selectedTab === "Classroom" && { color: "#fff" },
            ]}
          >
            Classroom
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            styles.tab,
            selectedTab === "Personal" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("Personal")}
        >
          <View style={[styles.textHead]}>
            <Image
              source={require("../assests/personal.png")}
              style={styles.textBody}
            />
          </View>
          <Text
            style={[
              styles.tabText,
              selectedTab === "Personal" && { color: "#fff" },
            ]}
          >
            Personal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            styles.tab,
            selectedTab === "Daycare" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("Daycare")}
        >
          <View style={[styles.textHead]}>
            <Image
              source={require("../assests/daycare.png")}
              style={styles.textBody}
            />
          </View>
          <Text
            style={[
              styles.tabText,
              selectedTab === "Daycare" && { color: "#fff" },
            ]}
          >
            Daycare
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            styles.tab,
            selectedTab === "Virtual" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("Virtual")}
        >
          <View style={[styles.textHead]}>
            <Image
              source={require("../assests/virtual.png")}
              style={styles.textBody}
            />
          </View>
          <Text
            style={[
              styles.tabText,
              selectedTab === "Virtual" && { color: "#fff" },
            ]}
          >
            Virtual
          </Text>
        </TouchableOpacity>
      </View>

      {/* Schedule List  below this  🎃 */}
      <ScrollView contentContainerStyle={styles.scheduleContainer}>
        {/* 1st Item */}

        {selectedTab === "Classroom" && (
          <>
            <View style={styles.scheduleRow}>
              {/* Accordion Header */}
              <TouchableOpacity
                onPress={() => toggleAccordion(0)}
                style={styles.accordionHeader}
              >
                {/* Time Container */}
                <View style={styles.timeContainer}>
                  <Text style={styles.scheduleTime}>09:00 AM</Text>
                </View>

                {/* Arrow Icon */}
                <Icon
                  name="arrow-right"
                  size={20}
                  color="#000"
                  style={styles.arrowIcon}
                />

                {/* Activity Name */}
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#eac6e78c",
                    padding: 10,
                    paddingVertical: 12,
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.scheduleActivity}>
                    Check-in classroom
                  </Text>

                  {/* Expand Icon */}
                  <Icon
                    name={
                      expandedAccordion === 0 ? "chevron-down" : "chevron-right"
                    }
                    size={20}
                    color="#000"
                    style={styles.expandIcon}
                  />
                </View>
              </TouchableOpacity>

              {/* Accordion Body */}
              {expandedAccordion === 0 && (
                <View
                  style={[
                    containerStyle,
                    styles.accordionContent,
                    { backgroundColor: "#eac6e78c" },
                  ]}
                >
                  <Text style={styles.accordionText}>
                    🎃🎃 The check-in process ensures that each student is
                    accounted for at the start of the day. Teachers perform a
                    quick review of each student’s health and well-being,
                    encouraging them to share how they’re feeling and anything
                    new they'd like to talk about🎃
                  </Text>
                  <View style={styles.viewImagesContainer}>
                    <Text
                      style={styles.viewImagesText}
                      onPress={() => navigation.navigate("ActivityPageDetails")}
                    >
                      View Images
                    </Text>
                  </View>
                </View>
              )}
            </View>

            <View style={styles.scheduleRow}>
              <TouchableOpacity
                onPress={() => toggleAccordion(1)}
                style={styles.accordionHeader}
              >
                {/* Time Container */}
                <View style={styles.timeContainer}>
                  <Text style={styles.scheduleTime}>09:30 AM</Text>
                </View>

                {/* Arrow Icon */}
                <Icon
                  name="arrow-right"
                  size={20}
                  color="#000"
                  style={styles.arrowIcon}
                />

                {/* Activity Name */}
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#eac6e78c",
                    padding: 10,
                    paddingVertical: 12,
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.scheduleActivity}>
                    Check-Out classroom
                  </Text>

                  {/* Expand Icon */}
                  <Icon
                    name={
                      expandedAccordion === 1 ? "chevron-down" : "chevron-right"
                    }
                    size={20}
                    color="#000"
                    style={styles.expandIcon}
                  />
                </View>
              </TouchableOpacity>

              {/* Accordion Body */}
              {expandedAccordion === 1 && (
                <View
                  style={[
                    containerStyle,
                    styles.accordionContent,
                    { backgroundColor: "#eac6e78c" },
                  ]}
                >
                  <Text style={styles.accordionText}>
                    🎃 The check-in process ensures that each student is
                    accounted for at the start of the day. Teachers perform a
                    quick review of each student’s health and well-being,
                    encouraging them to share how they’re feeling and anything
                    new they'd like to talk about.🏆
                  </Text>
                  <View style={styles.viewImagesContainer}>
                    <Text
                      style={styles.viewImagesText}
                      onPress={() => navigation.navigate("ActivityPageDetails")}
                    >
                      View Images
                    </Text>
                  </View>
                </View>
              )}
            </View>
            <View style={styles.scheduleRow}>
              <TouchableOpacity
                onPress={() => toggleAccordion(2)}
                style={styles.accordionHeader}
              >
                {/* Time Container */}
                <View style={styles.timeContainer}>
                  <Text style={styles.scheduleTime}>10:30 AM</Text>
                </View>

                {/* Arrow Icon */}
                <Icon
                  name="arrow-right"
                  size={20}
                  color="#000"
                  style={styles.arrowIcon}
                />

                {/* Activity Name */}
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#eac6e78c",
                    padding: 10,
                    paddingVertical: 12,
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.scheduleActivity}>Leave classroom</Text>

                  {/* Expand Icon */}
                  <Icon
                    name={
                      expandedAccordion === 2 ? "chevron-down" : "chevron-right"
                    }
                    size={20}
                    color="#000"
                    style={styles.expandIcon}
                  />
                </View>
              </TouchableOpacity>

              {/* Accordion Body */}
              {expandedAccordion === 2 && (
                <View
                  style={[
                    containerStyle,
                    styles.accordionContent,
                    { backgroundColor: "#eac6e78c" },
                  ]}
                >
                  <Text style={styles.accordionText}>
                    🎃 The check-in process ensures that each student is
                    accounted for at the start of the day. Teachers perform a
                    quick review of each student’s health and well-being,
                    encouraging them to share how they’re feeling and anything
                    new they'd like to talk about.🏆
                  </Text>
                  <View style={styles.viewImagesContainer}>
                    <Text
                      style={styles.viewImagesText}
                      onPress={() => navigation.navigate("ActivityPageDetails")}
                    >
                      View Images
                    </Text>
                  </View>
                </View>
              )}
            </View>

            <View style={styles.scheduleRow}>
              <TouchableOpacity
                onPress={() => toggleAccordion(11)}
                style={styles.accordionHeader}
              >
                {/* Time Container */}
                <View style={styles.timeContainer}>
                  <Text style={styles.scheduleTime}>10:45 AM</Text>
                </View>

                {/* Arrow Icon */}
                <Icon
                  name="arrow-right"
                  size={20}
                  color="#000"
                  style={styles.arrowIcon}
                />

                {/* Activity Name */}
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#eac6e78c",
                    padding: 10,
                    paddingVertical: 12,
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.scheduleActivity}>Playway classroom</Text>

                  {/* Expand Icon */}
                  <Icon
                    name={
                      expandedAccordion === 11
                        ? "chevron-down"
                        : "chevron-right"
                    }
                    size={20}
                    color="#000"
                    style={styles.expandIcon}
                  />
                </View>
              </TouchableOpacity>

              {/* Accordion Body */}
              {expandedAccordion === 11 && (
                <View
                  style={[
                    containerStyle,
                    styles.accordionContent,
                    { backgroundColor: "#eac6e78c" },
                  ]}
                >
                  <Text style={styles.accordionText}>
                    🎃 The check-in process ensures that each student is
                    accounted for at the start of the day. Teachers perform a
                    quick review of each student’s health and well-being,
                    encouraging them to share how they’re feeling and anything
                    new they'd like to talk about.🏆
                  </Text>
                  <View style={styles.viewImagesContainer}>
                    <Text
                      style={styles.viewImagesText}
                      onPress={() => navigation.navigate("ActivityPageDetails")}
                    >
                      View Images
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </>
        )}

        {/* 2nd Item */}
        {selectedTab === "Personal" && (
          <>
            <View style={styles.scheduleRow}>
              <TouchableOpacity
                onPress={() => toggleAccordion(3)}
                style={styles.accordionHeader}
              >
                <View style={styles.timeContainer}>
                  <Text style={styles.scheduleTime}>11:00 AM</Text>
                </View>

                <Icon
                  name="arrow-right"
                  size={20}
                  color="#000"
                  style={styles.arrowIcon}
                />

                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#eac6e78c",
                    padding: 10,
                    paddingVertical: 12,
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.scheduleActivity}>Fruit Break</Text>

                  <Icon
                    name={
                      expandedAccordion === 3 ? "chevron-down" : "chevron-right"
                    }
                    size={20}
                    color="#000"
                    style={styles.expandIcon}
                  />
                </View>
              </TouchableOpacity>

              {expandedAccordion === 3 && (
                <View
                  style={[
                    containerStyle,
                    styles.accordionContent,
                    { backgroundColor: "#eac6e78c" },
                  ]}
                >
                  <Text style={styles.accordionText}>
                    🎃 The check-in process ensures that each student is
                    accounted for at the start of the day. Teachers perform a
                    quick review of each student’s health and well-being,
                    encouraging them to share how they’re feeling and anything
                    new they'd like to talk about.🏆
                  </Text>
                  <View style={styles.viewImagesContainer}>
                    <Text
                      style={styles.viewImagesText}
                      onPress={() => navigation.navigate("ActivityPageDetails")}
                    >
                      View Images
                    </Text>
                  </View>
                </View>
              )}
            </View>

            <View style={styles.scheduleRow}>
              <TouchableOpacity
                onPress={() => toggleAccordion(4)}
                style={styles.accordionHeader}
              >
                <View style={styles.timeContainer}>
                  <Text style={styles.scheduleTime}>11:30 PM</Text>
                </View>

                <Icon
                  name="arrow-right"
                  size={20}
                  color="#000"
                  style={styles.arrowIcon}
                />

                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#eac6e78c",
                    padding: 10,
                    paddingVertical: 12,
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.scheduleActivity}>Tea Break</Text>

                  <Icon
                    name={
                      expandedAccordion === 4 ? "chevron-down" : "chevron-right"
                    }
                    size={20}
                    color="#000"
                    style={styles.expandIcon}
                  />
                </View>
              </TouchableOpacity>

              {expandedAccordion === 4 && (
                <View
                  style={[
                    containerStyle,
                    styles.accordionContent,
                    { backgroundColor: "#eac6e78c" },
                  ]}
                >
                  <Text style={styles.accordionText}>
                    🎃 The check-in process ensures that each student is
                    accounted for at the start of the day. Teachers perform a
                    quick review of each student’s health and well-being,
                    encouraging them to share how they’re feeling and anything
                    new they'd like to talk about.🏆
                  </Text>
                  <View style={styles.viewImagesContainer}>
                    <Text
                      style={styles.viewImagesText}
                      onPress={() => navigation.navigate("ActivityPageDetails")}
                    >
                      View Images
                    </Text>
                  </View>
                </View>
              )}
            </View>
            <View style={styles.scheduleRow}>
              <TouchableOpacity
                onPress={() => toggleAccordion(5)}
                style={styles.accordionHeader}
              >
                <View style={styles.timeContainer}>
                  <Text style={styles.scheduleTime}>11:45 AM</Text>
                </View>

                <Icon
                  name="arrow-right"
                  size={20}
                  color="#000"
                  style={styles.arrowIcon}
                />

                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#eac6e78c",
                    padding: 10,
                    paddingVertical: 12,
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.scheduleActivity}>Power Break</Text>

                  <Icon
                    name={
                      expandedAccordion === 5 ? "chevron-down" : "chevron-right"
                    }
                    size={20}
                    color="#000"
                    style={styles.expandIcon}
                  />
                </View>
              </TouchableOpacity>

              {expandedAccordion === 5 && (
                <View
                  style={[
                    containerStyle,
                    styles.accordionContent,
                    { backgroundColor: "#eac6e78c" },
                  ]}
                >
                  <Text style={styles.accordionText}>
                    🎃 The check-in process ensures that each student is
                    accounted for at the start of the day. Teachers perform a
                    quick review of each student’s health and well-being,
                    encouraging them to share how they’re feeling and anything
                    new they'd like to talk about.🏆
                  </Text>
                  <View style={styles.viewImagesContainer}>
                    <Text
                      style={styles.viewImagesText}
                      onPress={() => navigation.navigate("ActivityPageDetails")}
                    >
                      View Images
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </>
        )}

        {/* Repeat for other items */}
        {/* 3rd Item */}
        {selectedTab === "Daycare" && (
          <>
            <View style={styles.scheduleRow}>
              <TouchableOpacity
                onPress={() => toggleAccordion(6)}
                style={styles.accordionHeader}
              >
                <View style={styles.timeContainer}>
                  <Text style={styles.scheduleTime}>12:00 PM</Text>
                </View>

                <Icon
                  name="arrow-right"
                  size={20}
                  color="#000"
                  style={styles.arrowIcon}
                />

                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#eac6e78c",
                    padding: 10,
                    paddingVertical: 12,
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.scheduleActivity}>Had a Short Nap</Text>

                  <Icon
                    name={
                      expandedAccordion === 6 ? "chevron-down" : "chevron-right"
                    }
                    size={20}
                    color="#000"
                    style={styles.expandIcon}
                  />
                </View>
              </TouchableOpacity>

              {expandedAccordion === 6 && (
                <View
                  style={[
                    containerStyle,
                    styles.accordionContent,
                    { backgroundColor: "#eac6e78c" },
                  ]}
                >
                  <Text style={styles.accordionText}>
                    🎃 The check-in process ensures that each student is
                    accounted for at the start of the day. Teachers perform a
                    quick review of each student’s health and well-being,
                    encouraging them to share how they’re feeling and anything
                    new they'd like to talk about.🏆
                  </Text>
                  <View style={styles.viewImagesContainer}>
                    <Text
                      style={styles.viewImagesText}
                      onPress={() => navigation.navigate("ActivityPageDetails")}
                    >
                      View Images
                    </Text>
                  </View>
                </View>
              )}
            </View>
            <View style={styles.scheduleRow}>
              <TouchableOpacity
                onPress={() => toggleAccordion(7)}
                style={styles.accordionHeader}
              >
                <View style={styles.timeContainer}>
                  <Text style={styles.scheduleTime}>12:30 PM</Text>
                </View>

                <Icon
                  name="arrow-right"
                  size={20}
                  color="#000"
                  style={styles.arrowIcon}
                />

                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#eac6e78c",
                    padding: 10,
                    paddingVertical: 12,
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.scheduleActivity}>Had a Long Nap</Text>

                  <Icon
                    name={
                      expandedAccordion === 7 ? "chevron-down" : "chevron-right"
                    }
                    size={20}
                    color="#000"
                    style={styles.expandIcon}
                  />
                </View>
              </TouchableOpacity>

              {expandedAccordion === 7 && (
                <View
                  style={[
                    containerStyle,
                    styles.accordionContent,
                    { backgroundColor: "#eac6e78c" },
                  ]}
                >
                  <Text style={styles.accordionText}>
                    🎃 The check-in process ensures that each student is
                    accounted for at the start of the day. Teachers perform a
                    quick review of each student’s health and well-being,
                    encouraging them to share how they’re feeling and anything
                    new they'd like to talk about.🏆
                  </Text>
                  <View style={styles.viewImagesContainer}>
                    <Text
                      style={styles.viewImagesText}
                      onPress={() => navigation.navigate("ActivityPageDetails")}
                    >
                      View Images
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </>
        )}

        {/* Repeat for other items */}
        {/* 4th Item */}
        {selectedTab === "Virtual" && (
          <>
            <View style={styles.scheduleRow}>
              <TouchableOpacity
                onPress={() => toggleAccordion(8)}
                style={styles.accordionHeader}
              >
                <View style={styles.timeContainer}>
                  <Text style={styles.scheduleTime}>01:00 PM</Text>
                </View>

                <Icon
                  name="arrow-right"
                  size={20}
                  color="#000"
                  style={styles.arrowIcon}
                />

                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#eac6e78c",
                    padding: 10,
                    paddingVertical: 12,
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.scheduleActivity}>
                    Virtual Conference
                  </Text>

                  <Icon
                    name={
                      expandedAccordion === 2 ? "chevron-down" : "chevron-right"
                    }
                    size={20}
                    color="#000"
                    style={styles.expandIcon}
                  />
                </View>
              </TouchableOpacity>

              {expandedAccordion === 8 && (
                <View
                  style={[
                    containerStyle,
                    styles.accordionContent,
                    { backgroundColor: "#eac6e78c" },
                  ]}
                >
                  <Text style={styles.accordionText}>
                    🎃 The check-in process ensures that each student is
                    accounted for at the start of the day. Teachers perform a
                    quick review of each student’s health and well-being,
                    encouraging them to share how they’re feeling and anything
                    new they'd like to talk about.🏆
                  </Text>
                  <View style={styles.viewImagesContainer}>
                    <Text
                      style={styles.viewImagesText}
                      onPress={() => navigation.navigate("ActivityPageDetails")}
                    >
                      View Images
                    </Text>
                  </View>
                </View>
              )}
            </View>
            <View style={styles.scheduleRow}>
              <TouchableOpacity
                onPress={() => toggleAccordion(9)}
                style={styles.accordionHeader}
              >
                <View style={styles.timeContainer}>
                  <Text style={styles.scheduleTime}>02:00 PM</Text>
                </View>

                <Icon
                  name="arrow-right"
                  size={20}
                  color="#000"
                  style={styles.arrowIcon}
                />

                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#eac6e78c",
                    padding: 10,
                    paddingVertical: 12,
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.scheduleActivity}>Exam Conference</Text>

                  <Icon
                    name={
                      expandedAccordion === 9 ? "chevron-down" : "chevron-right"
                    }
                    size={20}
                    color="#000"
                    style={styles.expandIcon}
                  />
                </View>
              </TouchableOpacity>

              {expandedAccordion === 9 && (
                <View
                  style={[
                    containerStyle,
                    styles.accordionContent,
                    { backgroundColor: "#eac6e78c" },
                  ]}
                >
                  <Text style={styles.accordionText}>
                    🎃 The check-in process ensures that each student is
                    accounted for at the start of the day. Teachers perform a
                    quick review of each student’s health and well-being,
                    encouraging them to share how they’re feeling and anything
                    new they'd like to talk about.🏆
                  </Text>
                  <View style={styles.viewImagesContainer}>
                    <Text
                      style={styles.viewImagesText}
                      onPress={() => navigation.navigate("ActivityPageDetails")}
                    >
                      View Images
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </>
        )}

        {/* Repeat for the rest of the items */}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  greetContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  greetingTextContainer: {
    flexDirection: "column",
  },
  greetingText: {
    fontSize: 24,
    color: "#333",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  greetImage: {
    height: 100,
    width: 100,
    marginRight: 30,
  },
  categoryTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  tab: {
    alignItems: "center",
  },
  textHead: {
    // borderColor: "#B272A4",
    // borderWidth: 1,
    // borderStyle: "dotted",
    // backgroundColor: "#fff",
    // borderRadius: 15,
    // padding: 13,
  },
  textHead1: {
    borderColor: "#B272A4",
    borderWidth: 1,
    borderStyle: "dotted",
    backgroundColor: "#B272A4",
    borderRadius: 15,
    padding: 13,
  },
  tabText: {
    fontSize: 12,
    color: "#7a6c91",
  },
  scheduleContainer: {
    paddingHorizontal: 20,
  },
  scheduleRow: {
    alignItems: "center",
    marginBottom: 10,
  },
  accordionHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  timeContainer: {
    backgroundColor: "#B272A4",
    padding: 6,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  scheduleTime: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  arrowIcon: {
    marginHorizontal: 5,
  },
  scheduleActivity: {
    fontSize: 14,
    color: "#333",
  },
  expandIcon: {
    marginLeft: 10,
  },

  planetContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  accordionContent: {
    backgroundColor: "#eac6e78c",
    padding: 14,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: "97%",
    // marginBottom: 20,
  },
  accordionText: {
    fontSize: 14,
    color: "#333",
  },
  viewImagesContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  viewImagesText: {
    fontSize: 14,
    color: "#B272A4",
  },

  // tabButton: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   padding: 10,
  //   backgroundColor: "#fff",
  // },
  tab: {
    backgroundColor: "#fff",
    borderRadius: 10,

    margin: 5,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#B272A4",
    borderWidth: 1,
    borderStyle: "dotted",
  },
  activeTab: {
    backgroundColor: "#B272A4",
    borderColor: "#B272A4",
    borderWidth: 1,
    borderStyle: "dotted",
    borderRadius: 15,
  },
});

export default ActivitiesPage;
