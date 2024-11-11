// Import necessary components
import React from "react";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack"; // Import Stack Navigator
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";
import LoginPag from "./LoginPag";
import LanPage from "./LanPage";
import Dashboard from "./Dashboard";
import IntroScreen from "./IntroScreen";
import TeacherDash from "./TeacherDash";
import Chat from "./Chat"; // Ensure you import Chat
import Gallery from "./Gallery";
import CustomHeader from "./CustomHeader"; // Import the CustomHeader
import ChildProfile from "./ChildProfile";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails"; // Import BlogDetails

import CalendarEvents from "./CalendarEvents";

import ManageClassroom from "./ManageClassroom";

import MClassroomAchild from "./MClassroomAchild";

import MClassroomAparent from "./MClassroomAparent";

import MClassroomSclass from "./MClassroomSclass";

import MClassroomAInfo from "./MClassroomAInfo";

import StudyReports from "./StudyReports";

import ChatBox from "./ChatBox";

import ActivitiesPage from "./ActivitiesPage";

import ActivityPageDetails from "./ActivityPageDetails";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator(); // Create Stack Navigator

// Create BlogStack for navigating between Blog and BlogDetails
function BlogStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="BlogDetails" component={BlogDetails} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="LanPage"
      screenOptions={({ route }) => {
        const tabBarVisible =
          route.name !== "LanPage" &&
          route.name !== "LoginPag" &&
          route.name !== "IntroScreen";

        return {
          headerShown: false,
          tabBarActiveTintColor: "#B272A4",
          tabBarInactiveTintColor: "#ccc",
          tabBarStyle: {
            display: tabBarVisible ? "flex" : "none",
          },
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#fff",
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          height: 70,
          paddingTop: 10,
        };
      }}
    >
      <Tab.Screen
        name="LanPage"
        component={LanPage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="LoginPag"
        component={LoginPag}
        options={{
          tabBarLabel: "Message",
          tabBarIcon: ({ color, size }) => (
            <View style={{ position: "relative" }}>
              <Icon name="comment" color={color} size={size} />
              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{
          tabBarLabel: "Activities",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TeacherDash"
        component={TeacherDash}
        options={{
          tabBarLabel: "TeacherDash",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-circle" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Chat" // Add Chat here
        component={Chat}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <Icon name="comment" color={color} size={size} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="BlogStack" // Use BlogStack here
        component={BlogStack}
        options={{
          tabBarLabel: "Blog",
          tabBarIcon: ({ color, size }) => (
            <Icon name="book" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

function CustomDrawerContent(props) {
  const { navigation } = props;

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      navigation.closeDrawer();
      navigation.navigate("LoginPag");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image source={require("../assests/Logo2.png")} style={styles.logo} />
          <Text style={{ fontSize: 20, color: "#B272A4", fontWeight: "bold" }}>
            Bloomvie
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.closeDrawer()}
          style={styles.closeButton}
        >
          <Icon name="close" size={20} color="#A8A8AA" />
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Icon name="sign-out" size={20} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

export default function RenderPag() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        drawerActiveTintColor: "#B272A4",
        drawerInactiveTintColor: "#ccc",
        drawerStyle: {
          padding: 20,
          width: "80%",
        },
        swipeEnabled: !(route.name === "LanPage" || route.name === "LoginPag"),
      })}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Dashboard}
        options={{
          drawerLabel: "Profile",
          drawerIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={LoginPag}
        options={{
          drawerLabel: "Messages",
          drawerIcon: ({ color, size }) => (
            <Icon name="comment" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Activities"
        component={IntroScreen}
        options={{
          drawerLabel: "Activities",
          drawerIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chat" // Include Chat in the Drawer as well
        component={Chat}
        options={{
          drawerLabel: "Chat",
          drawerIcon: ({ color, size }) => (
            <Icon name="comment" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Gallery" // Include Gallery in the Drawer
        component={Gallery}
        options={{
          drawerLabel: "Gallery",
          drawerIcon: ({ color, size }) => (
            <Icon name="image" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="ChildProfile" // Include ChildProfile in the Drawer
        component={ChildProfile}
        options={{
          drawerLabel: "ChildProfile",
          drawerIcon: ({ color, size }) => (
            <Icon name="user-circle" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Blog" // Blogspot
        component={BlogStack} // Updated to use BlogStack
        options={{
          drawerLabel: "Blog",
          drawerIcon: ({ color, size }) => (
            <Icon name="book" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="ChatBox" // Include Blog in the Drawer
        component={ChatBox} // Updated to use BlogStack
        options={{
          drawerLabel: "ChatBox",
          drawerIcon: ({ color, size }) => (
            <Icon name="comment" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="CalendarEvents" // Include Blog in the Drawer
        component={CalendarEvents} // Updated to use BlogStack
        options={{
          drawerLabel: "CalendarEvents",
          drawerIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="ManageClassroom"
        component={ManageClassroom}
        options={{
          drawerLabel: "ManageClassroom",
          drawerIcon: ({ color, size }) => (
            <Icon name="graduation-cap" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="MClassroomAchild"
        component={MClassroomAchild}
        options={{
          drawerLabel: "MClassroomAchild",
          drawerIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="MClassroomAparent"
        component={MClassroomAparent}
        options={{
          drawerLabel: "MClassroomAparent",
          drawerIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="MClassroomSclass"
        component={MClassroomSclass}
        options={{
          drawerLabel: "MClassroomSclass",
          drawerIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="MClassroomAInfo"
        component={MClassroomAInfo}
        options={{
          drawerLabel: "MClassroomAInfo",
          drawerIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="StudyReports"
        component={StudyReports}
        options={{
          drawerLabel: "StudyReports",
          drawerIcon: ({ color, size }) => (
            <Icon name="book" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="ActivitiesPage"
        component={ActivitiesPage}
        options={{
          drawerLabel: "ActivitiesPage",
          drawerIcon: ({ color, size }) => (
            <Icon name="anchor" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="ActivityPageDetails"
        component={ActivityPageDetails}
        options={{
          drawerLabel: "ActivityPageDetails",
          drawerIcon: ({ color, size }) => (
            <Icon name="rocket" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  badgeContainer: {
    position: "absolute",
    right: -5,
    top: -5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  drawerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  logo: {
    width: 50,
    height: 50,
  },
  closeButton: {
    padding: 10,
  },
  logoutButton: {
    backgroundColor: "#B272A4",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
  badgeContainer: {
    position: "absolute",
    right: -10,
    top: -10,
    backgroundColor: "#B272A4",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
