import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // Correct Expo import

const AttachmentInput = () => {
  const [imageUri, setImageUri] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
      });

      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
      alert("Something went wrong while picking the image. Please try again.");
    }
  };

  const toggleEditOption = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    console.log("Save changes logic here");
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an Image" onPress={pickImage} />
      {imageUri && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />

          <TouchableOpacity
            style={styles.editButton}
            onPress={toggleEditOption}
          >
            <Text style={styles.editText}>{isEditing ? "Cancel" : "Edit"}</Text>
          </TouchableOpacity>

          {isEditing && (
            <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  editText: {
    color: "#fff",
    fontSize: 16,
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: "#28A745",
    padding: 10,
    borderRadius: 5,
  },
  saveText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default AttachmentInput;
