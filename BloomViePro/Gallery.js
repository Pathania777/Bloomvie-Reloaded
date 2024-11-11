import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const images = [
  require("../assests/Gallery1.png"),
  require("../assests/Gallery2.png"),
  require("../assests/Gallery3.png"),
  require("../assests/Gallery1.png"),
  require("../assests/Gallery2.png"),
  require("../assests/Gallery3.png"),
  // Add more images as needed
];

const Gallery = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Gallery</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab1}>
          <Icon name="image" size={24} color="green" />
          <Text style={styles.tabText}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="videocam" size={24} color="blue" />
          <Text style={styles.tabText}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="heart" size={24} color="pink" />
          <Text style={styles.tabText}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="document" size={24} color="navy" />
          <Text style={styles.tabText}>Docs</Text>
        </TouchableOpacity>
      </View>

      {/* Image Grid */}
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => <Image source={item} style={styles.image} />}
        contentContainerStyle={styles.imageGrid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 16,
    backgroundColor: "#b57baf",
  },
  headerTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1e1ec",
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 16,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tab: {
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#B272A4", // Set the border color
    borderStyle: "dotted",
    borderRadius: 8,
  },
  tab1: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#B272A4",
    borderRadius: 8,
  },

  tabText: {
    marginTop: 4,
    fontSize: 12,
    color: "#555",
  },
  imageGrid: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  image: {
    width: "45%",
    height: 100,
    margin: 8,
    borderRadius: 8,
  },
});

export default Gallery;
