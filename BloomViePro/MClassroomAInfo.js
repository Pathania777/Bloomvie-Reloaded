import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";

const MClassroomAInfo = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState(null);
  const [dietaryRequirement, setDietaryRequirement] = useState(null);
  const [socialMediaPermission, setSocialMediaPermission] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = date.toLocaleDateString();
    setDob(formattedDate);
    hideDatePicker();
  };

  const handleSubmit = () => {
    setSuccessModalVisible(true);

    setTimeout(() => {
      setSuccessModalVisible(false);
      navigation.navigate("ManageClassroom");
    }, 2000);
  };

  return (
    <LinearGradient
      colors={["#f7e4f5", "#fff"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Additional Info</Text>
        <Text style={styles.stepText}>Step 4/4</Text>
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
        <Text style={styles.label}>Dietary Requirements</Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => setDietaryRequirement(value)}
            items={[
              { label: "Carbs", value: "Carbs" },
              { label: "Protein", value: "Protein" },
              { label: "Vitamins", value: "Vitamins" },
              { label: "Minerals", value: "Minerals" },
            ]}
            style={{
              inputIOS: styles.pickerSelectStyles,
              inputAndroid: styles.pickerSelectStyles,
            }}
            placeholder={{ label: "Please Select", value: null }}
            value={dietaryRequirement}
          />
        </View>

        <Text style={styles.label}>Allergies</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Here"
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={styles.label}>Medication</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Here"
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={styles.label}>
          Permitted For Social Media / Marketing Images
        </Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => setSocialMediaPermission(value)}
            items={[
              { label: "Yes", value: "Yes" },
              { label: "No", value: "No" },
            ]}
            style={{
              inputIOS: styles.pickerSelectStyles,
              inputAndroid: styles.pickerSelectStyles,
            }}
            placeholder={{ label: "Please Select", value: null }}
            value={socialMediaPermission}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleSubmit}>
          <Text style={styles.nextButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      {/* Success Modal   */}
      <Modal
        transparent={true}
        visible={isSuccessModalVisible}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FontAwesome name="check-circle" size={50} color="green" />
            <Text style={styles.successText}>Success</Text>
          </View>
        </View>
      </Modal>
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
    justifyContent: "flex-end",
    paddingBottom: 20,
    flexDirection: "row",
    gap: 20,
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
  pickerContainer: {
    height: 40,
    borderWidth: 1,
    borderColor: "#cdcdcd",
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  pickerSelectStyles: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#cdcdcd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  nextButton: {
    backgroundColor: "#B272A4",
    padding: 15,
    paddingHorizontal: 35,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  nextButtonText: { color: "white", fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 200,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 10,
  },
  successText: {
    marginTop: 10,
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
});

export default MClassroomAInfo;
