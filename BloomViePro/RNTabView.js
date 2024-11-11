import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: "#ff4081" }]}>
    <Text style={styles.text}>This is the first tab!</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: "#673ab7" }]}>
    <Text style={styles.text}>This is the second tab!</Text>
  </View>
);

export default function RNTabView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = (props) => (
    <View style={styles.tabBar}>
      {props.navigationState.routes.map((route, i) => {
        const isFocused = index === i;
        return (
          <TouchableOpacity
            key={i}
            onPress={() => setIndex(i)}
            style={[
              styles.tabItem,
              isFocused ? styles.tabItemFocused : styles.tabItemUnfocused,
            ]}
          >
            <Text style={styles.iconText}>{route.title[0]}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: 400 }}
      style={{ paddingTop: 30 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  tabItem: {
    width: 100,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  tabItemFocused: {
    backgroundColor: "#673ab7",
  },
  tabItemUnfocused: {
    backgroundColor: "#bdbdbd",
  },
  iconText: {
    fontSize: 18,
    color: "#fff",
  },
});
