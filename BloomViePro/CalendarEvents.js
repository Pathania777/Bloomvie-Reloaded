import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  Button,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Calendar } from "react-native-calendars";
import Icon from "react-native-vector-icons/FontAwesome";

const eventsData = {
  "2024-11-15": [
    { time: "10:00-13:00", title: "Parent-Teacher Conference" },
    { time: "14:00-15:00", title: "Sports Meet" },
    { time: "16:00-17:00", title: "Brunch" },
  ],
  "2024-11-20": [{ time: "All Day", title: "Arts & Crafts Day" }],
  "2024-11-22": [
    { time: "19:00-20:00", title: "Story-time with Local Author" },
  ],
};

export default function CalendarEvents() {
  const [selectedDate, setSelectedDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  const handleBlur = () => {
    // Simple date format validation (YYYY-MM-DD)
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(eventDate)) {
      Alert.alert(
        "Invalid Date",
        "Please enter the date in YYYY-MM-DD format."
      );
      setEventDate(""); // Optionally reset the input
    }
  };
  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setEventDate(day.dateString); // Set the date to the selected date
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const renderItem = ({ item }) => (
    <View style={styles.eventItem}>
      <View style={styles.eventData}>
        <View style={styles.row}>
          <View style={styles.dot} />
          <Text style={styles.eventTime}>{item.time}</Text>
        </View>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDate}>{formatDate(selectedDate)}</Text>
      </View>
    </View>
  );

  const addEvent = () => {
    if (eventTitle && eventDate && eventTime) {
      const newEvent = { time: eventTime, title: eventTitle };
      eventsData[eventDate] = [...(eventsData[eventDate] || []), newEvent];
      setEventTitle("");
      setEventDate("");
      setEventTime("");
      setModalVisible(false);
    }
  };

  return (
    <View style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
      <View style={styles.header}>
        {/* <Text style={styles.headerText}>
          Events for {formatDate(selectedDate)}
        </Text> */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.btnAdd}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 5,
            }}
          >
            <Icon name="plus" color={"#fff"} size={15} />
            <Text style={styles.buttonText}>Add Event</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#B272A4",
          },
          "2024-11-15": { marked: true, dotColor: "#FF6347" },
          "2024-11-20": { marked: true, dotColor: "#32CD32" },
          "2024-11-22": { marked: true, dotColor: "#4169E1" },
        }}
        theme={{
          selectedDayBackgroundColor: "#B272A4",
          todayTextColor: "#6C63FF",
          arrowColor: "#B272A4",
          textDayFontWeight: "bold",
          textMonthFontWeight: "bold",
          textMonthFontSize: 20,
          monthTextColor: "#333",
        }}
      />

      <FlatList
        data={eventsData[selectedDate] || []}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.noEventsText}>No events for this day</Text>
        }
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Add Event</Text>
            <TextInput
              style={styles.input}
              placeholder="Event Title"
              value={eventTitle}
              onChangeText={setEventTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Event Date (YYYY-MM-DD)"
              value={eventDate}
              onChangeText={setEventDate}
              onBlur={handleBlur} // Validate on blur
              keyboardType="numeric" // Change if you want to allow dashes
            />
            <TextInput
              style={styles.input}
              placeholder="Event Time (e.g., 10:00-12:00)"
              value={eventTime}
              onChangeText={setEventTime}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={addEvent}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#FFF" },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  eventItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#B272A4",
    marginRight: 10,
  },
  eventTime: { fontSize: 14, color: "#555" },
  eventTitle: { fontSize: 16, fontWeight: "bold", flexShrink: 1 },
  eventDate: { fontSize: 14, color: "#888", marginTop: 5 },
  noEventsText: { textAlign: "center", marginTop: 20, color: "#888" },
  eventData: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "#B272A4",
    padding: 10,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  btnAdd: {
    backgroundColor: "#B272A4",
    borderRadius: 10,
    padding: 10,
    color: "#fff",
    textAlign: "right",
  },
});
