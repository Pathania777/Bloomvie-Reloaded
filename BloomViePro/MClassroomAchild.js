import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons"; // For calendar icon
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const MClassroomAchild = () => {
  const navigation = useNavigation(); // Initialize navigation
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // Format the date to a string you prefer
    const formattedDate = date.toLocaleDateString(); // Format as needed
    setDob(formattedDate);
    hideDatePicker();
  };

  return (
    <LinearGradient
      colors={["#f7e4f5", "#fff"]}
      style={styles.container}
      start={{ x: 0, y: 0 }} // Start at the top
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Student</Text>
        <Text style={styles.stepText}>Step 1/4</Text>
      </View>

      <View style={styles.categoryTabs}>
        <View style={styles.tab}>
          <View style={styles.textHead}>
            <Text style={styles.textBody}>👶</Text>
          </View>
          <Text style={styles.tabText}>Babies</Text>
        </View>
        <View style={styles.tab}>
          <View style={styles.textHead}>
            <Text style={styles.textBody}>🧒</Text>
          </View>
          <Text style={styles.tabText}>Toddlers</Text>
        </View>
        <View style={styles.tab}>
          <View style={styles.textHead}>
            <Text style={styles.textBody}>🎓</Text>
          </View>
          <Text style={styles.tabText}>Junior Preschool</Text>
        </View>
        <View style={styles.tab}>
          <View style={styles.textHead}>
            <Text style={styles.textBody}>🏫</Text>
          </View>
          <Text style={styles.tabText}>Preschool</Text>
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={styles.label}>DOB</Text>
        <View style={styles.dobContainer}>
          <TextInput
            style={styles.dobInput}
            placeholder="Select DOB"
            value={dob}
            editable={false} // Disable manual input
          />
          <TouchableOpacity onPress={showDatePicker}>
            <FontAwesome name="calendar" size={20} color="#7a6c91" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Gender</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderOption,
              gender === "Male" && styles.selectedGender,
            ]}
            onPress={() => setGender("Male")}
          >
            <Text style={styles.genderText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderOption,
              gender === "Female" && styles.selectedGender,
            ]}
            onPress={() => setGender("Female")}
          >
            <Text style={styles.genderText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderOption,
              gender === "Other" && styles.selectedGender,
            ]}
            onPress={() => setGender("Other")}
          >
            <Text style={styles.genderText}>Other</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("MClassroomAparent")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: StatusBar.currentHeight },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 20,
  },
  buttonContainer: {
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  headerText: { fontSize: 18, fontWeight: "bold", color: "#7a6c91" },
  stepText: { fontSize: 14, color: "#7a6c91" },
  categoryTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  tab: { alignItems: "center" },
  textHead: {
    borderColor: "#B272A4",
    borderWidth: 1,
    borderStyle: "dotted",
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 13,
  },
  textBody: { fontSize: 25 },
  tabText: { fontSize: 12, color: "#7a6c91" },
  form: { marginTop: 15 },
  label: {
    fontSize: 14,
    color: "#7a6c91",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#cdcdcd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  dobContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  dobInput: { flex: 1, height: 40 },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  genderOption: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
    marginHorizontal: 5,
  },
  selectedGender: {
    backgroundColor: "#b39ddb",
    borderColor: "#b39ddb",
  },
  genderText: { color: "#7a6c91" },
  nextButton: {
    backgroundColor: "#B272A4",
    padding: 15,
    paddingHorizontal: 35,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  nextButtonText: { color: "white", fontWeight: "bold" },
});

export default MClassroomAchild;
