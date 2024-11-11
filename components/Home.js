import { View, Text, StyleSheet, Button, TextInput,} from "react-native";

export default function Home ({navigation, route}){


    return(

        <View style= {styles.container}>

            <Text style= {styles.text}>I am Home </Text>
            <Text style= {styles.text}>{route.params?.result} </Text>
            <Button title="Go to About" onPress={()=>navigation.navigate("About", {name: 'Sahil'})}/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          backgroundColor: "#F5F5F5",
          
        },

        text:
        {
            fontSize: 34
        }
  
  
  });
