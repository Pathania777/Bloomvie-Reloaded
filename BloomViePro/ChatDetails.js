import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const messages = [
  {
    id: "1",
    sender: "Krystina Denial",
    time: "10:45",
    text: "Hi, Nicholas Good Evening 😄",
    type: "received",
  },
  {
    id: "2",
    sender: "Krystina Denial",
    time: "12:45",
    text: "How was your UI/UX Design Course Like.? 😄",
    type: "received",
  },
  {
    id: "3",
    time: "15:29",
    text: "Hi, Morning too Krystina",
    type: "sent",
  },
  {
    id: "4",
    time: "15:52",
    images: ["image1.png", "image2.png"], // Add image URIs
    type: "sent",
  },
  {
    id: "5",
    time: "15:29",
    text: "Hello, I also just finished the Sketch Basic ⭐⭐⭐⭐",
    type: "sent",
  },
];

const ChatDetails = () => {
  const renderMessage = ({ item }) => {
    if (item.images) {
      // Render image messages
      return (
        <View style={[styles.messageContainer, styles.sentMessage]}>
          <View style={styles.imageContainer}>
            {item.images.map((image, index) => (
              <View key={index} style={styles.imagePlaceholder} />
            ))}
          </View>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      );
    }

    return (
      <View
        style={[
          styles.messageContainer,
          item.type === "received"
            ? styles.receivedMessage
            : styles.sentMessage,
        ]}
      >
        {item.sender && <Text style={styles.senderText}>{item.sender}</Text>}
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat</Text>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F7F5FA",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  chatList: {
    paddingBottom: 16,
  },
  messageContainer: {
    maxWidth: "80%",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E1C5E2",
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#D6E9FF",
  },
  senderText: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
    color: "#333",
  },
  timeText: {
    fontSize: 12,
    color: "#666",
    textAlign: "right",
    marginTop: 5,
  },
  imageContainer: {
    flexDirection: "row",
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: "#000",
    marginRight: 5,
    borderRadius: 5,
  },
});

export default ChatDetails;
