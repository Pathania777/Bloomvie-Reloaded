import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const Chat = () => {
  const navigation = useNavigation(); // Get the navigation object

  const chatData = [
    {
      id: "1",
      name: "Krystina Denial",
      message:
        "Lorem ipsum dolor sit amet, for new consectetur and adipiscing elit.",
      time: "just now",
      image: require("../assests/Chat1.png"),
    },
    {
      id: "2",
      name: "Wayne Hilll",
      message:
        "Lorem ipsum dolor sit amet, for new consectetur and adipiscing elit.",
      time: "26 hours",
      image: require("../assests/Chat2.png"),
    },
    {
      id: "3",
      name: "Jennifer Conn",
      message:
        "Lorem ipsum dolor sit amet, for new consectetur and adipiscing elit.",
      time: "yesterday",
      image: require("../assests/Chat3.png"),
    },
    {
      id: "4",
      name: "Evelyn Larson",
      message:
        "Lorem ipsum dolor sit amet, for new consectetur and adipiscing elit.",
      time: "4 weeks",
      image: require("../assests/Chat4.png"),
    },
    {
      id: "5",
      name: "Miss Leigh Hahn",
      message:
        "Lorem ipsum dolor sit amet, for new consectetur and adipiscing elit.",
      time: "3 months",
      image: require("../assests/Chat5.png"),
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={item.image} style={styles.profileImage} />
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ChatDetails", { chatId: item.id })
            }
          >
            <Text style={styles.chatName}>{item.name}</Text>
          </TouchableOpacity>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <Text style={styles.backArrow}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#B0B0B0"
      />
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.chatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: "#F8F8F8",
  },
  backArrow: {
    fontSize: 24,
    color: "#333",
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  searchInput: {
    backgroundColor: "#F2EAF6",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    fontSize: 16,
  },
  chatList: {
    paddingHorizontal: 20,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2EAF6",
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatName: {
    fontSize: 16,
    fontWeight: "600",
  },
  chatMessage: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  chatTime: {
    fontSize: 12,
    color: "#B272A4",
    marginLeft: 10,
  },
});

export default Chat;
