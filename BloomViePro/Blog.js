import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  StatusBar,
} from "react-native";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

const Blog = ({ navigation }) => {
  const blogData = [
    {
      id: "1",
      title: "Baby Sleep",
      description:
        "Our tips on how to organize your time to take care of your baby...",
      date: "02 December 2023",
      dateFontSize: 12,
      image: require("../assests/baby-pic.png"),
      backgroundColor: "#EDEDF1",
      gradient: {
        colors: ["#EDEDF1", "#EDEDF1"], // Reversed gradient colors
        locations: [0.3, 1], // Adjust for more contrast
        start: { x: 0, y: 0 },
        end: { x: 0, y: 1 },
      },
    },
    {
      id: "2",
      title: "Baby Food",
      description:
        "Our tips on how to organize your time to take care of your baby...",
      date: "02 December 2023",
      image: require("../assests/Blogs1.png"),
      gradient: {
        colors: ["#AE85AA", "#EFE5F1"], // Reversed gradient colors
        locations: [0.5, 1], // Adjust for more contrast
        start: { x: 0, y: 0 },
        end: { x: 0, y: 1 },
      },

      titleColor: "#fff",
      descriptionColor: "#fff",
      fontSize: 11,
      dateFontSize: 12,
    },
    {
      id: "3",
      title: "Storyteller",
      description:
        "Our tips on how to organize your time to take care of your baby...",
      date: "02 December 2023",
      image: require("../assests/Blogs2.png"),
      dateFontSize: 12,
      backgroundColor: "#EDEDF1",
      gradient: {
        colors: ["#EDEDF1", "#EDEDF1"], // Reversed gradient colors
        locations: [0.5, 1], // Adjust for more contrast
        start: { x: 0, y: 0 },
        end: { x: 0, y: 1 },
      },
    },
  ];

  const renderBlogItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      {item.gradient ? (
        <LinearGradient
          colors={item.gradient.colors} // Accessing colors array properly
          locations={item.gradient.locations} // Adding locations for better contrast
          start={item.gradient.start}
          end={item.gradient.end}
          style={styles.gradientBackground}
        >
          <Content item={item} />
        </LinearGradient>
      ) : (
        <View style={styles.textContainer}>
          <Content item={item} />
        </View>
      )}
    </TouchableOpacity>
  );

  const Content = ({ item }) => (
    <View style={[styles.textContainer, { position: "relative" }]}>
      <View style={{ flex: 1 }}>
        <Text style={[styles.title, { color: item.titleColor || "#B272A4" }]}>
          {item.title}
        </Text>
        <Text
          style={[
            styles.description,
            { color: item.descriptionColor || "#777" },
          ]}
        >
          {item.description}
        </Text>
        <View style={styles.footer}>
          <View style={styles.authorInfo}>
            {/* <Icon name="user" type="font-awesome" size={16} color="#A9A9A9" /> */}
            <Image
              source={require("../assests/Chat4.png")} // Replace with your image path
              style={styles.userImage} // Add styles for your image
            />
            <Text
              style={[styles.authorText, { fontSize: item.fontSize || 11 }]}
            >
              Jenny Kaa
            </Text>
            <Icon
              name="calendar"
              type="font-awesome"
              size={16}
              color="#A9A9A9"
              style={{ marginLeft: 10 }}
            />
            <Text
              style={[
                styles.dateText,
                { fontSize: item.dateFontSize || 14 },
                item.dateFontColor ? { color: item.dateFontColor } : null,
              ]}
            >
              {item.date}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.readMore,
              { color: "#000" },
              {
                textDecorationLine: "underline",
                textDecorationColor: "#000",
              },
              { paddingLeft: 10 },
              { fontWeight: "400" },
            ]}
            onPress={() => navigation.navigate("BlogDetails")}
          >
            <Text>Read Blog</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Blog</Text>
      </View>
      <View style={styles.searchBar}>
        <Icon
          name="search"
          type="font-awesome"
          color="#A9A9A9"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#A9A9A9"
        />
      </View>
      <View style={styles.tabContainer}>
        <Text style={[styles.tab, styles.activeTab]}>Latest</Text>
        <Text style={styles.tab}>Featured</Text>
        <Text style={styles.tab}>Trending</Text>
      </View>
      <FlatList
        data={blogData}
        renderItem={renderBlogItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3E8F2",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tab: {
    fontSize: 16,
    color: "#A9A9A9",
  },
  activeTab: {
    color: "#B272A4",
    fontWeight: "bold",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 17,
    marginBottom: 15,
    overflow: "hidden",
  },
  gradientBackground: {
    borderRadius: 10,
    padding: 7,
  },
  textContainer: {
    flexDirection: "row",
    padding: 7,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
    width: "60%",
    marginBottom: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  authorInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorText: {
    marginLeft: 5,
    fontSize: 11,
    color: "#A9A9A9",
  },
  dateText: {
    marginLeft: 5,
    color: "#A9A9A9",
  },
  readMore: {
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 10,
    position: "absolute",
    right: -16,
    top: -16,
    backgroundColor: "transparent",
  },
  userImage: {
    borderRadius: 50,
    height: 23,
    width: 23,
  },
});

export default Blog;
