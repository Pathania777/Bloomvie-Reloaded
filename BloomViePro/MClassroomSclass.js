import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons"; // For calendar icon
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const MClassroomSclass = () => {
  const navigation = useNavigation(); // Initialize navigation
  const [selectedClass, setSelectedClass] = useState("");
  const [enrollmentDate, setEnrollmentDate] = useState(null);
  const [relationship, setRelationship] = useState("");
  const [daysAttending, setDaysAttending] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const toggleDay = (day) => {
    setDaysAttending((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    setEnrollmentDate(date);
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
        <Text style={styles.headerText}>Select Class</Text>
        <Text style={styles.stepText}>Step 3/4</Text>
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

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Class / Room</Text>

        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedClass(value)}
            items={[
              { label: "Babies", value: "babies" },
              { label: "Toddlers", value: "toddlers" },
              { label: "Junior Preschool", value: "juniorPreschool" },
              { label: "Preschool", value: "preschool" },
            ]}
            placeholder={{ label: "Select Class/Room", value: "" }}
            style={styles.pickerSelectStyles}
            value={selectedClass}
          />
        </View>

        <Text style={styles.label}>Enrollment Date</Text>
        <View style={styles.dobContainer}>
          <TextInput
            style={styles.dobInput}
            placeholder="Select Enrollment Date"
            value={enrollmentDate ? enrollmentDate.toLocaleDateString() : ""}
            editable={false} // Disable manual input
          />
          <TouchableOpacity onPress={showDatePicker}>
            <FontAwesome name="calendar" size={20} color="#7a6c91" />
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Relationship</Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
        />
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => setRelationship(value)}
            items={[
              { label: "Parent", value: "parent" },
              { label: "Guardian", value: "guardian" },
            ]}
            placeholder={{ label: "Select Relationship", value: "" }}
            style={styles.pickerSelectStyles}
            value={relationship}
          />
        </View>
      </View>
      <Text style={styles.label}>Days Attending</Text>
      <View style={styles.daysRow}>
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.dayButton,
              daysAttending.includes(day) && styles.dayButtonSelected,
            ]}
            onPress={() => toggleDay(day)}
          >
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("MClassroomAInfo")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

// Style definitions remain the same

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F3FA",
  },

  categoryTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
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

  pickerContainer: {
    height: 40,
    borderWidth: 1,
    borderColor: "#cdcdcd",
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    // backgroundColor: "#fff",
  },
  dobInput: { flex: 1, height: 40 },
  tab: { alignItems: "center" },
  textHead: {
    borderColor: "#B272A4",
    borderWidth: 1,
    borderStyle: "dotted",
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 13,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 20,
  },
  headerText: { fontSize: 18, fontWeight: "bold", color: "#7a6c91" },
  stepText: { fontSize: 14, color: "#7a6c91" },
  textBody: { fontSize: 25 },
  tabText: { fontSize: 12, color: "#7a6c91" },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#5A2D82",
    marginBottom: 20,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },

  label: {
    fontSize: 14,
    color: "#7a6c91",
    marginBottom: 5,
    fontWeight: "bold",
  },
  stepText: {
    textAlign: "right",
    color: "#A3A3A3",
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: 20,
    flexDirection: "row",
    gap: 20,
  },
  pickerSelectStyles: {
    fontSize: 15,

    lineHeight: 15,
    // paddingHorizontal: 10,
    color: "#333",
    // paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  dateInput: {
    height: 50,
    justifyContent: "center",
    borderColor: "#cdcdcd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  dateText: {
    color: "#A3A3A3",
  },
  daysRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  dayButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#B272A4",
    borderStyle: "dotted",
  },
  dayButtonSelected: {
    backgroundColor: "#DAB1E8",
  },
  dayText: {
    color: "#5A2D82",
    fontWeight: "bold",
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
});

export default MClassroomSclass;
