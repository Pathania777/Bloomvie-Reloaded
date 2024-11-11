import { View, Text, StyleSheet, StatusBar } from "react-native";

import Box from "../screens/Box";

export default function Flex() {
  return (
    <View style={styles.container}>
      <Box
        style={{
          backgroundColor: "red",
          position: "absolute",
          top: 30,
          left: 40,
          zIndex: 2,
        }}
      >
        <Text> Box 1</Text>
      </Box>
      <Box style={{ backgroundColor: "orange" }}>
        <Text> Box 2</Text>
      </Box>

      <Box style={{ backgroundColor: "green" }}>
        <Text> Box 3</Text>
      </Box>
      <Box style={{ backgroundColor: "cyan" }}>
        <Text> Box 4</Text>
      </Box>
      <Box style={{ backgroundColor: "yellow" }}>
        <Text> Box 5</Text>
      </Box>
      <Box style={{ backgroundColor: "purple" }}>
        <Text> Box 6</Text>
      </Box>
      <Box style={{ backgroundColor: "blue" }}>
        <Text> Box 7</Text>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 6,
    borderColor: "black",
    flex: 1,

    position: "relative",
    paddingTop: StatusBar.currentHeight,
  },
});
