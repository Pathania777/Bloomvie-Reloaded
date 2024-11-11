import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";

const TailwindLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    Alert.alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-pink-100 p-4`}>
      <Text style={tw`text-2xl text-gray-700 font-bold mb-6`}>Login Form</Text>

      <TextInput
        style={tw`w-full border border-black rounded p-3 mb-4`}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={tw`w-full border border-black rounded p-3 mb-6`}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity
        onPress={handleSubmit}
        style={tw`bg-green-500 p-3 rounded`}
      >
        <Text style={tw`text-white text-center`}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TailwindLoginForm;

// using nativewind  - not working

// import { Text, View } from "react-native";

// export default function TailwindLoginForm() {
//   return (
//     <View className="flex-1 justify-center items-center bg-white">
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }
