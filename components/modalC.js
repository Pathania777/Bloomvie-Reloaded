import { useState } from "react";
import { View, Button, Text, Modal } from "react-native";

export default function modalC() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pagesheet"
      >
        <View style={{ flex: 1, backgroundColor: "beige", padding: 60 }}>
          <Text>Hello World</Text>

          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
