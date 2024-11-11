import { View, Text, StyleSheet, Button, TextInput, Pressable, StatusBar} from "react-native";

export default function App ()

{

    return (
      <View>
        <Text>Hello</Text>
        <StatusBar style="auto"/>
      </View>
    );
}

const styles = StyleSheet.create({


        container: {
                  flex: 1,
                  backgroundColor: "#F5F5F5",
                },
      });