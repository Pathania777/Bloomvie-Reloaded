import React, { useState, useEffect } from "react";
import {
  GiftedChat,
  InputToolbar,
  Bubble,
  Send,
} from "react-native-gifted-chat";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const customInputToolbar = (props) => {
  return <InputToolbar {...props} containerStyle={styles.inputToolbar} />;
};

const customBubble = (props) => {
  const isSupportMessage = props.currentMessage.user._id === 2;

  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          backgroundColor: isSupportMessage ? "#EDEDF1" : "#F0F0F0",
          borderRadius: 20,
          marginBottom: 5,
        },
        right: {
          backgroundColor: "#0084FF", // WhatsApp blue
          borderRadius: 20,
          marginBottom: 5,
        },
      }}
      textStyle={{
        left: {
          color: "#000", // Black for incoming messages
        },
        right: {
          color: "#fff", // White for outgoing messages
        },
      }}
    />
  );
};

const customSend = (props) => {
  return (
    <Send {...props} containerStyle={styles.sendContainer}>
      <View style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send</Text>
      </View>
    </Send>
  );
};

const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const initialMessages = [
      {
        _id: 1,
        text: "Hello, how can I help you?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Support",
        },
      },
    ];
    setMessages(initialMessages);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
          name: "User Name",
        }}
        renderInputToolbar={(props) => customInputToolbar(props)}
        renderBubble={(props) => customBubble(props)}
        renderSend={(props) => customSend(props)}
        placeholder="Type a message..."
        scrollToBottom={true}
        alwaysShowSend={true}
        isTyping={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0", // Light gray background
  },
  inputToolbar: {
    backgroundColor: "#fff", // White input toolbar
    borderTopColor: "#E8E8E8",
    borderTopWidth: 1,
    padding: 8,
    elevation: 2, // Shadow for elevation effect
  },
  sendContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  sendButton: {
    backgroundColor: "#0084FF", // WhatsApp blue
    padding: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ChatBox;
0;
