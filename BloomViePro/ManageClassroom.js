import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const studentData = [
  { id: "1", name: "Cooper Willey", image: require("../assests/Chat1.png") },
  { id: "2", name: "Eleanor Parsons", image: require("../assests/Chat2.png") },
  { id: "3", name: "Leo Raca", image: require("../assests/Chat3.png") },
  { id: "4", name: "Odette Rolfe", image: require("../assests/Chat4.png") },
  {
    id: "5",
    name: "Samantha Connolly",
    image: require("../assests/Chat5.png"),
  },
];

const ManageClassroom = () => {
  const navigation = useNavigation(); // Initialize navigation

  const renderStudent = ({ item }) => (
    <View style={styles.studentContainer}>
      <Image source={item.image} style={styles.studentImage} />
      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{item.name}</Text>
        <View style={styles.actionsContainer}>
          <Text style={styles.actionText}>Profile</Text>
          <Text style={styles.actionText}>Communicate</Text>
          <Text style={styles.actionText}>Reports</Text>
        </View>
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={["#f7e4f5", "#fff"]}
      style={styles.container}
      start={{ x: 0, y: 0 }} // Start at the top
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Manage classroom</Text>
      </View>

      <View style={styles.categoryTabs}>
        {/* Category icons */}
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

      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Text style={styles.studentsCount}>12/20</Text>
      </View>

      <FlatList
        data={studentData}
        renderItem={renderStudent}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("MClassroomAchild")} // Navigate to MClassroomAchild page
        >
          <Text style={styles.addButtonText}>Add Student</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: StatusBar.currentHeight },
  header: { padding: 16, alignItems: "center" },
  headerText: { fontSize: 18, fontWeight: "bold", color: "#7a6c91" },
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
  studentsCount: {
    textAlign: "center",
    color: "#7a6c91",
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  studentContainer: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  studentImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  studentInfo: { flex: 1 },
  studentName: { fontWeight: "bold", fontSize: 16 },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 15,
    marginTop: 5,
  },
  actionText: { fontSize: 14, color: "#7a6c91" },
  buttonContainer: {
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  addButton: {
    backgroundColor: "#B272A4",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
  },
  addButtonText: { color: "white", fontWeight: "bold" },
});

export default ManageClassroom;
