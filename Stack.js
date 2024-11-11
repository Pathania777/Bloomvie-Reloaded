

import { View, Text, StyleSheet, Button, TextInput, Pressable} from "react-native";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from './components/Home';
import About from './components/About';


const Stack = createNativeStackNavigator()

export const AboutStack =()=>
{
    return(
        <Stack.Navigator  initialRouteName="Home" screenOptions={
                {
                  headerStyle: {
                    backgroundColor:'green',
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle:
                  {
                    fontWeight: 'bold'
                  },
                  headerRight: ()=>
                  (
                    <Pressable onPress={()=>alert("menu is pressed")}>
                      <Text style={{color: '#fff', fontSize: 16}}>
                        Menu
                      </Text>
                    </Pressable>
                  ),
                  contentStyle: {
                    backgroundColor: 'red'
                  }
            
                }
               }>
                <Stack.Screen name="Home" component={Home}  options={
                  {title: "HomePage",
                    
                  }
                }/>
                <Stack.Screen name="About" component={About}  initialParams={
                  {name:'ram'}
                }
                
                options={
                  ({route})=>(
                    {
                      title: route.params.name
                    }
                  )
                }/>
               </Stack.Navigator>

    );
}
 export default function App (){

return (
<NavigationContainer>
  <AboutStack/>

</NavigationContainer>

);

}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        
      },


});
