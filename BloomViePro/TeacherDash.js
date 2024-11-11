import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const TeacherDash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <View>
              <Image
                style={styles.profilePic}
                source={require("../assests/profile.png")}
              />
            </View>
            <View style={styles.userContain}>
              <Text style={styles.greeting}>Hi, Teacher</Text>
              <Text style={styles.daycare}>
                Building Blocks Daycare BC - Canada
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.notificationIcon}
              source={require("../assests/bell.png")}
            />
          </TouchableOpacity>
        </View>

        {/* Cards Section */}
        {/* Cards Section */}
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <LinearGradient
              colors={["#A991D2", "#F7C0E9"]}
              locations={[0.2, 1]} // Specify your gradient color locations
              start={{ x: 0, y: 0.5 }} // Start from the left middle
              end={{ x: 1, y: 0.5 }} // End at the right middle
              style={styles.cardContent}
            >
              <View style={styles.textContainer}>
                <View style={styles.cardNumberContainer}>
                  <Text style={styles.cardNumber}>18/20</Text>
                </View>
                <Text style={styles.cardTitle}>Attending Today</Text>
              </View>
              <Image
                style={styles.cardImage}
                source={require("../assests/dash-bg.png")}
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <LinearGradient
              colors={["#EC6F9E", "#EC8B6A"]}
              locations={[0.2, 1]} // Specify your gradient color locations
              start={{ x: 0, y: 0.5 }} // Start from the left middle
              end={{ x: 1, y: 0.5 }} // End at the right middle
              style={styles.cardContent}
            >
              <View style={styles.textContainer}>
                <View style={styles.cardNumberContainer}>
                  <Text style={styles.cardNumber}>4</Text>
                </View>
                <Text style={styles.cardTitle}>Task List</Text>
              </View>
              <Image
                style={styles.cardImage}
                source={require("../assests/dash-bg.png")}
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <LinearGradient
              colors={["#5670EC", "#07BAFE"]}
              locations={[0.2, 1]} // Specify your gradient color locations
              start={{ x: 0, y: 0.5 }} // Start from the left middle
              end={{ x: 1, y: 0.5 }} // End at the right middle
              style={styles.cardContent}
            >
              <View style={styles.textContainer}>
                <View style={styles.cardNumberContainer}>
                  <Text style={styles.cardNumber}>2</Text>
                </View>
                <Text style={styles.cardTitle}>Messages</Text>
              </View>
              <Image
                style={styles.cardImage}
                source={require("../assests/dash-bg.png")}
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <LinearGradient
              colors={["#EC6F9E", "#EC8B6A"]}
              locations={[0.2, 1]} // Specify your gradient color locations
              start={{ x: 0, y: 0.5 }} // Start from the left middle
              end={{ x: 1, y: 0.5 }} // End at the right middle
              style={styles.cardContent}
            >
              <View style={styles.textContainer}>
                <View style={styles.cardNumberContainer}>
                  <Text style={styles.cardNumber}>3</Text>
                </View>
                <Text style={styles.cardTitle}>Pending Action</Text>
              </View>
              <Image
                style={styles.cardImage}
                source={require("../assests/dash-bg.png")}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Reports Section */}
        <View style={styles.reportsSection}>
          <View style={styles.repoHeader}>
            <Text style={styles.repoHeaderText}>Classrooms</Text>
          </View>
          <View style={styles.repoContainer}>
            <TouchableOpacity style={styles.reportItem}>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../assests/baby.png")}
                  style={styles.reportIcon}
                />
              </View>
              <Text style={styles.reportLabel}>Babies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reportItem}>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../assests/man.png")}
                  style={styles.reportIcon}
                />
              </View>
              <Text style={styles.reportLabel}>Toddlers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reportItem}>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../assests/junior.png")}
                  style={styles.reportIcon}
                />
              </View>
              <Text style={styles.reportLabel}>Junior Preschool</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reportItem}>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../assests/kg.png")}
                  style={styles.reportIcon}
                />
              </View>
              <Text style={styles.reportLabel}>Preschool</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.repoHeader}>
            <Text style={styles.repoHeaderText}>Teacher Area</Text>
          </View>

          <View style={styles.repoContainer}>
            <TouchableOpacity style={styles.reportItem}>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../assests/caland.png")}
                  style={styles.reportIcon}
                />
              </View>
              <Text style={styles.reportLabel}>Apply Leaves</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reportItem}>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../assests/wasComma.png")}
                  style={styles.reportIcon}
                />
              </View>
              <Text style={styles.reportLabel}>Blogs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reportItem}>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../assests/camCo.png")}
                  style={styles.reportIcon}
                />
              </View>
              <Text style={styles.reportLabel}>Capture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reportItem}>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../assests/kg.png")}
                  style={styles.reportIcon}
                />
              </View>
              <Text style={styles.reportLabel}>Activities</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#rgba(243, 232, 242, 0.7)",
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingTop: 60,
  },

  repoHeader: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: 10,
    paddingTop: 10,
  },

  repoHeaderText: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "#B272A4",
    fontWeight: "bold",
    fontSize: 15,
  },

  repoContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
  },
  daycare: {
    fontSize: 12,
    color: "#888",
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },

  cardContainer: {
    marginBottom: 20,
  },
  imageSection: {
    position: "relative",

    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    borderRadius: 15,
    marginVertical: 7,
    backgroundColor: "#AB84FA", // Default color, will be overridden
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0, // Set padding to 0 to allow image to touch the right side
  },
  textContainer: {
    flex: 1, // Allows the text to take available space
    padding: 28, // Add padding here for the text
  },
  cardImage: {
    width: 140, // Set the desired width for your image
    height: "100%", // Fill the height of the card
    resizeMode: "cover", // Ensures the image covers the space
    borderBottomRightRadius: 15,
    overflow: "visible",

    position: "relative",
    top: 3,
    right: -9,
  },
  userContain: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  cardImageContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  cardPurple: {
    backgroundColor: "#AB84FA",
  },
  cardRed: {
    backgroundColor: "#FC8687",
  },
  cardBlue: {
    backgroundColor: "#3C90FB",
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF", // White text
    padding: 5, // Reduced padding for less width
    borderWidth: 2, // Border thickness
    borderColor: "#FFF", // White border
    borderRadius: 15, // Rounded corners
    textAlign: "center", // Center the text
    width: 60, // Set a maximum width
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  cardNumberContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  cardTitle: {
    fontSize: 16,
    color: "#FFF",
  },
  blogSection: {
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "#f3f2f5",
    padding: 10,
    marginBottom: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  blogContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  blogImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
  },

  imageContainer: {
    flexDirection: "column", // Stack the image and "Read Blog" button
    alignItems: "center", // Center them horizontally
  },
  blogTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#B272A4",
  },
  blogText: {
    fontSize: 12,
    color: "#888",
    marginBottom: 6,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  blogAuthor: {
    fontSize: 10,
    color: "#BBB",
  },
  readBlog: {
    fontSize: 14,
    fontWeight: "heavy",
    color: "#000", // Black color for the "Read Blog" link
    textDecorationLine: "underline", // Add underline
  },

  reportsSection: {
    flexDirection: "column",
    justifyContent: "space-between", // Change to space-between to evenly distribute items
    marginBottom: 20,
  },
  reportItem: {
    flexDirection: "column", // Stack icon and text vertically
    alignItems: "center",
    width: "22%", // Set a width for items to prevent stretching
  },
  iconContainer: {
    padding: 10, // Add padding around the image
    borderWidth: 1,
    borderColor: "#B272A4",
    borderStyle: "dotted",
    borderRadius: 40, // Maintain the circular shape
  },
  reportIcon: {
    width: 40,
    height: 40,
    borderRadius: 25, // Make the image circular
  },
  reportLabel: {
    marginTop: 5,
    fontSize: 12,
    color: "#666",
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically centered
  },
  blogger: {
    width: 18,
    height: 18,
    marginBottom: 0, // Remove marginBottom if it's causing issues
    marginRight: 4, // Optional: space between the image and text
  },

  blogger1: {
    width: 15,
    height: 15,
    marginBottom: 0, // Remove marginBottom if it's causing issues
    marginRight: 4, // Optional: space between the image and text
  },
  authorName: {
    marginRight: 4,
    fontSize: 10,
    color: "#888",
  },
  authorDate: {
    marginLeft: 4,
    fontSize: 10,
    color: "#888",
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    borderRadius: 15,
    marginVertical: 7,
    overflow: "hidden", // Ensure the gradient background is clipped to the card's border radius
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0, // Set padding to 0 to allow image to touch the right side
  },
  textContainer: {
    flex: 1, // Allows the text to take available space
    padding: 28, // Add padding here for the text
  },
  cardImage: {
    width: 180, // Set the desired width for your image
    height: "100%", // Fill the height of the card
    resizeMode: "contain", // Ensures the image covers the space
    borderBottomRightRadius: 15,

    position: "relative",
    bottom: -30,
    right: -9,
  },
});

export default TeacherDash;
