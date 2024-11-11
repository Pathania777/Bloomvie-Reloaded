import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import Collapsible from "react-native-collapsible";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

const StudyReports = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleToggleAccordion = (accordion) => {
    setActiveAccordion(activeAccordion === accordion ? null : accordion);
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
        <Text style={styles.headerText}>Study</Text>
      </View>

      {/* Category Tabs */}
      <View style={styles.categoryTabs}>
        <View style={styles.tab}>
          <View style={styles.textHead}>
            <Image
              source={require("../assests/healthcare.png")}
              style={styles.textBody}
            />
          </View>
          <Text style={styles.tabText}>Health</Text>
        </View>
        <View style={styles.tab}>
          <View style={styles.textHead}>
            <Image
              source={require("../assests/reading.png")}
              style={styles.textBody}
            />
          </View>
          <Text style={styles.tabText}>Study</Text>
        </View>
        <View style={styles.tab}>
          <View style={styles.textHead}>
            <Image
              source={require("../assests/star.png")}
              style={styles.textBody}
            />
          </View>
          <Text style={styles.tabText}>Talent</Text>
        </View>
        <View style={styles.tab}>
          <View style={styles.textHead}>
            <Image
              source={require("../assests/rising.png")}
              style={styles.textBody}
            />
          </View>
          <Text style={styles.tabText}>Progress</Text>
        </View>
      </View>

      {/* Greeting */}
      <View style={styles.greetContainer}>
        <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Text style={styles.greetingText}>Hello,</Text>
          <Text style={styles.userName}>
            Julie James <Text>👋</Text>
          </Text>
        </View>
        <Image
          source={require("../assests/ABC.png")}
          style={styles.greetImage}
        />
      </View>

      {/* Study Updates Header */}
      <View style={styles.studyUpdatesHeader}>
        <Text style={styles.studyUpdatesText}>Julie James Study Updates</Text>
        <Image
          source={require("../assests/Talk.png")}
          style={{ height: 24, width: 24 }}
        />
      </View>

      {/* Accordion Sections */}
      <View style={styles.updatesSection}>
        <TouchableOpacity
          onPress={() => handleToggleAccordion("vocabulary")}
          style={[
            styles.accordionHeader,
            activeAccordion !== "vocabulary" && styles.accordionMargin,
          ]}
        >
          <Image
            source={require("../assests/redbook.png")}
            style={{ height: 24, width: 24 }}
          />
          <Text style={styles.accordionText}>Vocabulary Growth</Text>
          <Icon
            name={
              activeAccordion === "vocabulary"
                ? "chevron-down"
                : "chevron-right"
            }
            size={24}
            color="#333"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Collapsible collapsed={activeAccordion !== "vocabulary"}>
          <View style={styles.accordionContent}>
            <Text>
              The child is expanding their vocabulary by learning new words each
              week, including basic nouns, verbs, and adjectives.
            </Text>
          </View>
        </Collapsible>

        <TouchableOpacity
          onPress={() => handleToggleAccordion("listening")}
          style={[
            styles.accordionHeader,
            activeAccordion !== "listening" && styles.accordionMargin,
          ]}
        >
          <Image
            source={require("../assests/ear.png")}
            style={{ height: 24, width: 24 }}
          />
          <Text style={styles.accordionText}>Listening and Comprehension</Text>
          <Icon
            name={
              activeAccordion === "listening" ? "chevron-down" : "chevron-right"
            }
            size={24}
            color="#333"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Collapsible collapsed={activeAccordion !== "listening"}>
          <View style={styles.accordionContent}>
            <Text>
              The child is expanding their vocabulary by learning new words each
              week, including basic nouns, verbs, and adjectives.
            </Text>
          </View>
        </Collapsible>

        <TouchableOpacity
          onPress={() => handleToggleAccordion("verbal")}
          style={[
            styles.accordionHeader,
            activeAccordion !== "verbal" && styles.accordionMargin,
          ]}
        >
          <Image
            source={require("../assests/Talk.png")}
            style={{ height: 24, width: 24 }}
          />
          <Text style={styles.accordionText}>Verbal Interaction</Text>
          <Icon
            name={
              activeAccordion === "verbal" ? "chevron-down" : "chevron-right"
            }
            size={24}
            color="#333"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Collapsible collapsed={activeAccordion !== "verbal"}>
          <View style={styles.accordionContent}>
            <Text>
              The child is expanding their vocabulary by learning new words each
              week, including basic nouns, verbs, and adjectives.
            </Text>
          </View>
        </Collapsible>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F8F9FA",
    flexGrow: 1,
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7a6c91",
  },
  categoryTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  tab: {
    alignItems: "center",
  },
  textHead: {
    borderColor: "#B272A4",
    borderWidth: 1,
    borderStyle: "dotted",
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 13,
  },
  textBody: {
    height: 27,
    width: 27,
  },
  tabText: {
    fontSize: 12,
    color: "#7a6c91",
  },
  greetContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    height: 120,
    width: 120,
  },
  studyUpdatesHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
    gap: 10,
  },
  studyUpdatesText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginLeft: 10,
  },
  updatesSection: {
    marginTop: 10,
  },
  accordionHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1bae57a",
    padding: 15,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  accordionMargin: {
    marginBottom: 10,
    marginTop: 10,
  },
  accordionText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
    flex: 1,
  },
  arrowIcon: {
    marginLeft: "auto",
  },
  accordionContent: {
    backgroundColor: "#f1bae57a",
    padding: 15,
    borderRadius: 5,
  },
});

export default StudyReports;
