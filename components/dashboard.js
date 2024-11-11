import { View, Text, StyleSheet, Button, TextInput,} from "react-native";

export default function Dashboard ({navigation}){


    return (

        <View style={styles.container}>

            <Text>I am  DashBoard</Text>

            <Button title="Toggle drawer" onPress={()=>navigation.toggleDrawer()}/>
            <Button title="Settings" onPress={()=>navigation.jumpTo("Settings")}/>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          backgroundColor: "#F5F5F5",
          
        },

       
  
  
  });