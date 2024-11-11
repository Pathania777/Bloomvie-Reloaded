import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

const LoginPag = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsImageVisible(false);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsImageVisible(true);
      }
    );

    // Clear input fields when the component is focused
    const unsubscribe = navigation.addListener("focus", () => {
      setEmailOrUsername("");
      setPassword("");
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
      unsubscribe();
    };
  }, [navigation]);

  const handleLogin = async () => {
    const validCredentials = {
      email: "parent@gmail.com",
      teacherEmail: "teacher@gmail.com",
      password: "Mind@4",
    };

    if (
      (emailOrUsername === validCredentials.email ||
        emailOrUsername === validCredentials.teacherEmail) &&
      password === validCredentials.password
    ) {
      const userRole =
        emailOrUsername === validCredentials.email ? "Parent" : "Teacher";

      // Store the authentication token (you can customize this part)
      await AsyncStorage.setItem("authToken", "your_auth_token_here");

      navigation.navigate("IntroScreen", { userRole });
    } else {
      Alert.alert("Error", "Wrong email or password", [{ text: "OK" }]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}
      >
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Sign In</Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email or Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Email or username"
                placeholderTextColor="#ccc"
                keyboardType="email-address"
                autoCapitalize="none"
                value={emailOrUsername}
                onChangeText={setEmailOrUsername}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Password"
                  placeholderTextColor="#ccc"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Icon
                    name={showPassword ? "eye-off" : "eye"}
                    size={20}
                    color="#ccc"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {isImageVisible && (
              <Image
                source={require("../assests/LoginImage.png")}
                style={styles.image}
              />
            )}

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  signInContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  signInText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#B272A4",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  passwordInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
  },
  button: {
    backgroundColor: "#B272A4",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 376,
    height: 250,
    marginBottom: 30,
  },
});

export default LoginPag;
