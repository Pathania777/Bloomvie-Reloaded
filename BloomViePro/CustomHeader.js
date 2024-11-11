// CustomHeader.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CustomHeader = ({ title, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#b57baf",
      }}
    >
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={24} color="#fff" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          color: "#fff",
          fontWeight: "bold",
          marginLeft: 16,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default CustomHeader;
