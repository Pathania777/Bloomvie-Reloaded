import { View, Text, StyleSheet, Button, TextInput,} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function About ({route, navigation}){

    const {name} = route.params;
    // const navigation = useNavigation();


    return(

        <View style= {styles.container}>

            <Text style= {styles.text}>I am About {name}</Text>
            <Button
            style={styles.btn}
            title="update name"  onPress={()=>navigation.setParams(
                {name: 'sham'}
            )}/>

            <Button
            
            style= {styles.text}
            title="Go to previous data"
            onPress={()=>navigation.navigate("Home", 
                {result: "data from about"}
               
            )}
            />

          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          backgroundColor: "#F5F5F5",
          
        },

        text:
        {
            fontSize: 34
        },
        btn:
        {
            marginBottom: 20
        }
  
  
  });
