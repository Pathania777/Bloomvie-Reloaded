// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './screens/Home';
// import About from './screens/About';

// import LoginPag from "./BloomViePro/LoginPag";

// import LandingPage from "./LandingPage";

// import Contact from "./components/LoginScreen/Home";

// import Flex from "./components/Flex";

// import ModalC from "./components/modalC";
// import ModalComponent from "./components/modalC";

// import { StyleSheet } from "react-native";

// import { Button } from "react-native-web";

// import { Image, Button} from 'react-native';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>

//       <Stack.Navigator initialRouteName="Home"

//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}

//       >
//         <Stack.Screen name="Home" component={Home} options={{ title: 'My Home',

//           }}  />
//         <Stack.Screen name="About" component={About}   options={{ title: 'About Me' }}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// TAB NAVIGATION

// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>My name is Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>i am Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator

//       >
//       <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// stack navigator for each tab

// import * as React from 'react';
// import { Button, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Details!</Text>
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// const HomeStack = createNativeStackNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//       <HomeStack.Screen name="Details" component={DetailsScreen} />
//     </HomeStack.Navigator>
//   );
// }

// const SettingsStack = createNativeStackNavigator();

// function SettingsStackScreen() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//       <SettingsStack.Screen name="Details" component={DetailsScreen} />
//     </SettingsStack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{ headerShown: false }}>
//         <Tab.Screen name="HomeStack" component={HomeStackScreen} />
//         <Tab.Screen name="SettingsStack" component={SettingsStackScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// DRAWER NAVIGATION

// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// MODAL in reactNative

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
//       <Button
//         onPress={() => navigation.navigate('MyModal')}
//         title="Open Modal"
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View>
//       <Text>Details</Text>
//     </View>
//   );
// }

// function ModalScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30 }}>This is a modal!</Text>
//       <Button onPress={() => navigation.goBack()} title="Dismiss" />
//     </View>
//   );
// }

// const RootStack = createStackNavigator();

// function RootStackScreen() {
//   return (
//     <RootStack.Navigator>
//       <RootStack.Group>
//         <RootStack.Screen name="Home" component={HomeScreen} />
//         <RootStack.Screen name="Details" component={DetailsScreen} />
//       </RootStack.Group>
//       <RootStack.Group screenOptions={{ presentation: 'modal' }}>
//         <RootStack.Screen name="MyModal" component={ModalScreen} />
//       </RootStack.Group>
//     </RootStack.Navigator>
//   );
// }

// animations

// import * as React from 'react';
// import { View, Button, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Animated from 'react-native-reanimated';

// const Stack = createNativeStackNavigator();

// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//       <Animated.Image
//         source={{ uri: 'https://picsum.photos/id/39/200' }}
//         style={{ width: 300, height: 300 }}
//         sharedTransitionTag="tag"
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Animated.Image
//         source={{ uri: 'https://picsum.photos/id/39/200' }}
//         style={{ width: 100, height: 100 }}
//         sharedTransitionTag="tag"
//       />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// modal

// import { useState } from "react";
// import { View, Button, Text, Modal } from "react-native";

// export default function App() {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   return (
//     <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
//       <Button
//         title="Press"
//         onPress={() => setIsModalVisible(true)}
//         color="midnightblue"
//       />

//       <Modal visible={isModalVisible}

//       onRequestClose={()=>setIsModalVisible(false)}

//       animationType="slide"

//       presentationStyle="pagesheet">

{
  /* presentationStyle="pagesheet"  only for IOS  */
}

{
  /* incase userpress backbutton in phone so modal will close   use  onRequestClose*/
}

{
  /* 
        <View style={{ flex: 1, backgroundColor: "beige", padding: 60 }}>
          <Text>Modal Content</Text>

          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)} 
          />
        </View>
      </Modal>
    </View>
  );
} */
}

// import { SafeAreaFrameContext, SafeAreaView } from "react-native-safe-area-context";
// Status BAR
// import React, { useState } from "react";
// import { View, Button, Text, StatusBar } from "react-native";

// export default function App() {
//   const [isStatusBarVisible, setIsStatusBarVisible] = useState(true);

//   const showStatusBar = () => {
//     setIsStatusBarVisible(true);
//   };

//   const hideStatusBar = () => {
//     setIsStatusBarVisible(false);
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: "beige", padding: 60 }}>
//       {isStatusBarVisible && (
//         <StatusBar backgroundColor="red" barStyle="light-content" />
//       )}

//       <Button title="Show StatusBar" onPress={showStatusBar} />
//       <Button title="Hide StatusBar" onPress={hideStatusBar} style={{ marginTop: 10 }} />

//       <Text style={{ marginTop: 20 }}>
//         StatusBar is {isStatusBarVisible ? "Visible" : "Hidden"}
//       </Text>
//     </View>
//   );
// }

// activity indicator

// import { View, Button, Text, ActivityIndicator } from "react-native";

// export default function App() {

//   return (

// <View style={{ flex: 1, backgroundColor: "beige", padding: 60 }}>

//   <ActivityIndicator/>
//   <ActivityIndicator  size="large" color="orange"/>
// </View>
//   );
// }

// custom components sharing props

// import { View } from "react-native";

// import Home from './screens/Home';
// export default function App(){

//   return(

// <View style={{ flex: 1, backgroundColor: "beige", padding: 60 }}>

// <Home  name="Sahil"/>

// </View>

//   );
// }

// styling   either use inline or PREFFERED :  stylesheet API

// const styles =StyleSheet.create({

//   light:
//   {
//     color: 'red',
//     backgroundColor: 'grey'
// ,
// dark:
//   {
//     color: 'orange',
//     backgroundColor: 'grey'

//   }
//   }
// })

// <View style={styles.light}/>

// flex container and properties

//  import { View, Text, StyleSheet } from "react-native";

//  import Box from './screens/Box'

//  export default function App(){

//    return(

//      <View style={styles.container}>

//  <Box style={{backgroundColor: "red",  position: "absolute", top:30 , left:40, zIndex: 2}}>Box 1</Box>
//  <Box style={{backgroundColor: "orange", }}>Box 2</Box>
//   <Box style={{backgroundColor: "green", }}>Box 3</Box>
//  <Box style={{backgroundColor: "cyan", }}>Box 4</Box>
//  <Box style={{backgroundColor: "yellow",}}>Box 5</Box>
// <Box style={{backgroundColor: "purple"}}>Box 6</Box>
//  <Box style={{backgroundColor: "blue"}}>Box 7</Box>

//      </View>

//    );
//  }

//  const styles = StyleSheet.create({

//    container: {

//      marginTop:90,
//      borderWidth: 6
//      ,
//      borderColor: "black",
//      flex: 1,

//      position: 'relative'

//     }

//     })

// dimensions API

// import { View, Text, StyleSheet, Dimensions, useWindowDimensions, SafeAreaView } from "react-native";

// export default function App(){

//   const windowWidth = useWindowDimensions().width;
// const windowHeight = useWindowDimensions().height;

//   return(
// <SafeAreaView  style ={styles.safeContainer}>
// <View style={styles.container}>

//       <View

// style={[styles.box,
//  { height:  windowHeight > 500 ? "70%" : "90%",
//   width: windowWidth > 600 ? "60%" : "90%"
//  }
// ]}

//       >
//            <Text

//            style={{fontSize: windowWidth > 500 ? 50 :24}}

//            >Welcome</Text>
//       </View>

// </View>
// </SafeAreaView>
//   );
// }

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// const styles = StyleSheet.create({

// safeContainer: {
//   flex: 1,
//   backgroundColor: 'plum',
// }
// ,
//     container: {
// backgroundColor: 'plum',
// alignItems: 'center',
// justifyContent: 'center',
//  flex:1
//    },
//    box:{

// width: windowWidth > 500 ? "70%" : "90%",
// height:windowHeight > 600 ? "60%" : "90%",
// backgroundColor: 'lightblue',
//       alignItems: 'center',
// justifyContent: 'center',

//  },
//  text:
//  {
//   fontSize:  windowWidth > 500 ? 50 : 24,
//  }

// })

// PLATFORM SPECIFIC CODE

//     import { View, Text, StyleSheet, Dimensions, useWindowDimensions, SafeAreaView, Platform } from "react-native";

// export default function App(){

//   const windowWidth = useWindowDimensions().width;
// const windowHeight = useWindowDimensions().height;

//   return(
// <SafeAreaView  style ={styles.safeContainer}>
// <View style={styles.container}>

//       <View >

// <Text

//            style={styles.text}

//            >Welcome</Text>
//       </View>

// </View>
// </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({

// safeContainer: {
//   flex: 1,
//   backgroundColor: 'plum',

//   paddingTop: Platform.OS==="android" ? 40: 80
// }
// ,
//     container: {
// backgroundColor: 'plum',

//    flex:1
//      },

//      text:
//      {
//       ...Platform.select({
//         ios:{
// color: "purple",
// fontSize: 40
//         },
//         android:
//         {
//           color: "green",
//           fontSize: 30
//         }
//       })
//      }

//     })

// ACtivity   using pokemonCard.js imported in APP.js

// import PokemonCard from "./components/pokemonCard";

// import { View, Text, StyleSheet, SafeAreaView, Platform, ScrollView} from "react-native";

// export default function App(){

//   const charmanderDate =
//   {

//     name :"charmander",
//     image:require("./assests/charmander.png"),
//     type:"fire",
//     hp: 39,
//     moves: ["Scratch", "Ember", "Growl", "Leer"],
//     weakness: ["Water", "Rock"]

//   };

//   const flare =
//   {

//     name :"flare",
//     image:require("./assests/flare.png"),
//     type:"glass",
//     hp: 43,
//     moves: [ "Growl", "Leer"],
//     weakness: ["fire", "Rock"]

//   };

//   const pikachu =
//   {

//     name :"pikachu",
//     image:require("./assests/pikachu.png"),
//     type:"electric",
//     hp: 67,
//     moves: [ "Ember", "Growl"],
//     weakness: ["fire", "water"]

//   };

//   const sbor =
//   {

//     name :"sbor",
//     image:require("./assests/sbor.png"),
//     type:"fire",
//     hp: 54,
//     moves: [ "Leer"],
//     weakness: ["Water"]

//   };

//   return(

//     <SafeAreaView style= {styles.container}>
//          <ScrollView>
//          <PokemonCard{...charmanderDate}/>
//          <PokemonCard{...sbor}/>
//          <PokemonCard{...pikachu}/>
//          <PokemonCard{...flare}/>
//          </ScrollView>

//       </SafeAreaView>

//   );
// }

// const styles = StyleSheet.create({

//   container:
//   {
//  flex: 1,
//  backgroundColor : "#f5f5f5",
// paddingTop : Platform.OS ==="android" ? 30 :0
//   },

// })

// LISTS

// import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar} from "react-native";

// import  pokemonList  from './data.json';

// export default function App()
// {

//   return(

//     <SafeAreaView style = {styles.container}>
//       <ScrollView style={styles.scrollView}>

//       {
//         pokemonList.map(pokemon=>{
//           return(
//             <View key={pokemon.id} style={styles.card}>
//                <Text  style={styles.cardText}>{pokemon.type}</Text>
//                <Text style={styles.cardText}>{pokemon.name}</Text>

//              </View>

//           )
//         })
//       }
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({

//   container:
//   {
//     flex: 1,
//     backgroundColor: '#f5f5f5',

//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollView:
//   {
//     paddingHorizontal: 16
//   },
//   card:
//   {
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius:8,
//     borderWidth:1,
//     marginBottom:16
//   },
//   cardText :
//   {
//     fontSize: 30
//   }

// }
// );

// FLATLISTS

// import { View, Text, StyleSheet, FlatList, SafeAreaView} from "react-native";

//  import  pokemonList  from './data.json';

//  export default function App()
//  {

//    return(

//      <SafeAreaView style = {styles.container}>
//        <View style={styles.viewList}>
//        <FlatList
//        data={pokemonList}
//        renderItem={({item})=>{

//         return(
//                       <View key={item.id} style={styles.card}>
//                          <Text  style={styles.cardText}>{item.type}</Text>
//                          <Text style={styles.cardText}>{item.name}</Text>

//                         </View>

//                   );
//        }}

//        ItemSeparatorComponent={<View style={{height:16}}/>}
//        ListEmptyComponent={<Text>No Items</Text>}
//        ListHeaderComponent={<Text style={styles.headerText}>POKEMONS</Text> }

//        ListFooterComponent={<Text style={styles.headerText}>POKEMONS FOOter</Text> }
//        />
//        </View>
//      </SafeAreaView>
//    )
//  }

//  const styles = StyleSheet.create({

//    container:
//    {
//      flex: 1,
//      backgroundColor: '#f5f5f5',

//    },
//    scrollView:
//    {
//      paddingHorizontal: 16
//    },
//    card:   {
//      backgroundColor: '#fff',
//     padding: 16,
//      borderRadius:8,
//      borderWidth:1,

//    },
//    cardText :
//    {
//      fontSize: 30
//    },
//    viewList:
//    {
//     padding:20
//    },
//    headerText:
//    {
//     fontSize:24,
//     textAlign:"center",
//     marginBottom:12

//    }

//  }
//  );

// SECTIONLIST

// import { View, Text, StyleSheet, StatusBar, SectionList} from "react-native";
// import groupedPokemonList  from './groupedData.json';
// export default function App()

// {

//   return (
//   <SafeAreaView style={styles.container}>

// <View style={styles.scrollView}>
//         <SectionList
//           sections={groupedPokemonList}
//           renderItem={({ item }) => {
//             return (
//               <View style={styles.card}>
//                 <Text style={styles.cardText}>{item}</Text>
//               </View>
//             );
//           }}
//           renderSectionHeader={({ section }) => (
//             <Text style={styles.sectionHeaderText}>{section.type}</Text>
//           )}
//           ItemSeparatorComponent={() => (
//             <View
//               style={{
//                 height: 16,
//               }}
//             />
//           )}
//           SectionSeparatorComponent={() => (
//             <View
//               style={{
//                 height: 16,
//               }}
//             />
//           )}
//         />
//       </View>
//   </SafeAreaView>

//   );

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollView: {
//     paddingHorizontal: 16,
//   },
//   card: {
//     backgroundColor: "#FFFFFF",
//     padding: 16,
//     borderRadius: 8,

//     borderWidth: 1,
//   },
//   cardText: {
//     fontSize: 30,
//   },
//   headerText: {
//     fontSize: 24,
//     textAlign: "center",
//     marginBottom: 12,
//   },
//   footerText: {
//     fontSize: 24,
//     textAlign: "center",
//     marginTop: 12,
//   },
//   sectionHeaderText: {
//     backgroundColor: "#FFFFFF",
//     fontSize: 24,
//     fontWeight: "bold",
//   },
// });

// TEXTINPUT

// import { View, Text, StyleSheet, StatusBar, SafeAreaView, TextInput} from "react-native";

// import { useState } from "react";

// export default function App()

// {
//   const [name,setName] = useState("")

//   return(
// <SafeAreaView style={styles.container}>
//   <TextInput style={styles.input} value={name} onChangeText={setName}  multiline></TextInput>
//   <Text style={styles.text}>My  name is  {name}</Text>
// </SafeAreaView>

//   );
// }

// const styles = StyleSheet.create({
//    container: {
//        flex: 1,
//    backgroundColor: "#F5F5F5",
//        paddingTop: StatusBar.currentHeight,
//      },

//      input:
//      {
//       height: 40,
//       margin: 12,
//       padding:10,
//       borderWidth: 1
//      },
//      text:
//      {
//       fontSize:30,
//       padding:10
//      }
//     })

// switch

// uses to create toggle button   and toggle can be managed by useState hook

{
  /* <Switch
    

  // use usestate hook  for  changing toggle states
  

  /> */
}

// import SectionLists from "./components/SectionLists";
// LOGIN FORM

//   import { View, Text, StyleSheet, Button, TextInput, Image, KeyboardAvoidingView, Platform} from "react-native";

//   import { useState } from "react";

//   export default function App()
//   {

//     const [userName, setUserName] = useState("")
//     const[password, setPassword] = useState("")

//     const [errors, setErrors] = useState({})

//     const validateForm = ()=>

//     {
//       let errors={}
//       if(!userName)errors.userName= "username is required"
//       if(!password)errors.password= "password is required"
//       setErrors(errors);
//       return Object.keys(errors).length===0
//     }

//     const handleSubmit =()=>
//     {

//       if(validateForm()){
//         console.log("submitted", userName, password);
//         setUserName("");
//         setPassword("");
//         setErrors({});

//       }
//     }

//   return (
// <KeyboardAvoidingView  behavior="padding"  keyboardVerticalOffset={Platform.OS==='ios' ? 100: 0} style={styles.container}>
//   <View style={styles.form}>

//     <Image source={require("./assests/charmander.png")}  style={styles.image}/>

// <Text style={styles.label}>UserName</Text>
// <TextInput style={styles.input} placeholder="Enter UserName"  value={userName} onChangeText={setUserName}/>

// {

//   errors.userName ? <Text style={styles.errortext}>{errors.userName}</Text> : null
// }
// <Text style={styles.label}>Password</Text>
// <TextInput style={styles.input}  placeholder="Enter Password" secureTextEntry value={password} onChangeText={setPassword}/>
// {

// errors.password ? <Text style={styles.errortext}>{errors.password}</Text> : null
// }

// <Button  title="Login" onPress={()=>{handleSubmit()}}/>

//   </View>

// </KeyboardAvoidingView>

//   );

//   }

//   const styles = StyleSheet.create({
//        container: {
//            flex: 1,
//        justifyContent: "center",
//        paddingHorizontal: 20,
//        backgroundColor: "#f5f5f5"
//          },

//          form:
//          {

//           backgroundColor:"#fff",
//           padding: 20,
//           borderRadius: 10,
//           shadowColor: "black",

//           shadowOffset:{
//             width: 0,
//             height: 2
//           },
//           shadowOpacity: 0.25,
//           shadowRadius: 4,
//           elevation: 5,
//         },

//           label:
//           {
//             fontSize: 16,
//             marginBottom: 5,
//             fontWeight: 'bold'
//           },
//           input:
//           {
//             marginBottom: 15,
//             padding: 10,
//             height:40,
//             borderColor: "#ddd",
//             borderWidth: 1 ,
//             borderRadius: 5

//           },
//           image:{
//             width: 200,
//             height: 200,
//             alignSelf: 'center',
//             marginBottom: 30

//           },
//           errortext:
//           {
//             color: 'red',
//             marginBottom: 10
//           }

//         }
//       )

//******** */ NETWORKING  - GET, POST data from API  and ERROR Handling ***

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   ActivityIndicator,
//   TextInput,
//   Button,
// } from "react-native";

// const App = () => {
//   const [postList, setPostList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [postTitle, setPostTitle] = useState("");
//   const [postBody, setPostBody] = useState("");
//   const [isPosting, setIsPosting] = useState(false);
//   const [error, setError] = useState("");

//   const fetchData = async (limit = 10) => {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
//       );
//       const data = await response.json();
//       setPostList(data);
//       setIsLoading(false);
//       setError("");
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setIsLoading(false);
//       setError("Failed to fetch post list.");
//     }
//   };

//   const addPost = async () => {
//     setIsPosting(true);
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             title: postTitle,
//             body: postBody,
//           }),
//         }
//       );
//       const newPost = await response.json();
//       setPostList([newPost, ...postList]);
//       setPostTitle("");
//       setPostBody("");
//       setError("");
//     } catch (error) {
//       console.error("Error adding new post:", error);
//       setError("Failed to add new post.");
//     }
//     setIsPosting(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleRefresh = () => {
//     setRefreshing(true);
//     fetchData(20);
//     setRefreshing(false);
//   };

//   if (isLoading) {
//     return (
//       <SafeAreaView style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading...</Text>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       {error ? (
//         <View style={styles.errorContainer}>
//           <Text style={styles.errorText}>{error}</Text>
//         </View>
//       ) : (
//         <>
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Post Title"
//               value={postTitle}
//               onChangeText={setPostTitle}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Post Body"
//               value={postBody}
//               onChangeText={setPostBody}
//             />
//             <Button
//               title={isPosting ? "Adding..." : "Add Post"}
//               onPress={addPost}
//               disabled={isPosting}
//             />
//           </View>
//           <View style={styles.listContainer}>
//             <FlatList
//               data={postList}
//               renderItem={({ item }) => (
//                 <View style={styles.card}>
//                   <Text style={styles.nameText}>{item.title}</Text>
//                   <Text style={styles.typeText}>{item.body}</Text>
//                 </View>
//               )}
//               keyExtractor={(item) => item.id.toString()}
//               ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
//               ListEmptyComponent={<Text>No Posts Found</Text>}
//               ListHeaderComponent={
//                 <Text style={styles.headerText}>Post List</Text>
//               }
//               ListFooterComponent={
//                 <Text style={styles.footerText}>End of list</Text>
//               }
//               refreshing={refreshing}
//               onRefresh={handleRefresh}
//             />
//           </View>
//         </>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//     paddingTop: StatusBar.currentHeight,
//   },
//   loadingContainer: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//     paddingTop: StatusBar.currentHeight,
//     justifyContent: "center", // Center the loading spinner
//     alignItems: "center", // Center the loading spinner
//   },
//   listContainer: {
//     flex: 1,
//     paddingHorizontal: 16,
//   },
//   card: {
//     backgroundColor: "#FFFFFF",
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 1,
//   },
//   nameText: {
//     fontSize: 30,
//   },
//   typeText: {
//     fontSize: 24,
//     color: "#666666",
//   },
//   headerText: {
//     fontSize: 24,
//     textAlign: "center",
//     marginBottom: 12,
//   },
//   footerText: {
//     fontSize: 24,
//     textAlign: "center",
//     marginTop: 12,
//   },
//   inputContainer: {
//     backgroundColor: "#FFFFFF",
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 1,
//     margin: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 8,
//     padding: 8,
//     borderRadius: 8,
//   },
//   errorContainer: {
//     backgroundColor: "#FFC0CB",
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 1,
//     margin: 16,
//     alignItems: "center",
//   },
//   errorText: {
//     color: "#D8000C",
//     fontSize: 16,
//     textAlign: "center",
//   },
// });

// export default App;

// *******NAVIGATION ************

//   Stack NAVIGATION

// import { View, Text, StyleSheet, Button, TextInput, Pressable} from "react-native";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";

// import Home from './components/Home';
// import About from './components/About';

// const Stack = createNativeStackNavigator()
//  export default function App (){

// return (
// <NavigationContainer>
//    <Stack.Navigator  initialRouteName="Home" screenOptions={
//     {
//       headerStyle: {
//         backgroundColor:'green',
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle:
//       {
//         fontWeight: 'bold'
//       },
//       headerRight: ()=>
//       (
//         <Pressable onPress={()=>alert("menu is pressed")}>
//           <Text style={{color: '#fff', fontSize: 16}}>
//             Menu
//           </Text>
//         </Pressable>
//       ),
//       contentStyle: {
//         backgroundColor: 'red'
//       }

//     }
//    }>
//     <Stack.Screen name="Home" component={Home}  options={
//       {title: "HomePage",

//       }
//     }/>
//     <Stack.Screen name="About" component={About}  initialParams={
//       {name:'ram'}
//     }

//     options={
//       ({route})=>(
//         {
//           title: route.params.name
//         }
//       )
//     }/>
//    </Stack.Navigator>

// </NavigationContainer>

// );

// }

// const styles = StyleSheet.create({
//   container: {
//         flex: 1,
//         backgroundColor: "#F5F5F5",

//       },

// });

// Drawer NAVIGATION
// import  'react-native-gesture-handler';

// import { NavigationContainer } from '@react-navigation/native';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { View, Text, StyleSheet, Button, TextInput, Pressable} from "react-native";

// import Dashboard from './components/dashboard';
// import Settings from './components/settings';

// const Drawer = createDrawerNavigator();

// export default function App (){

//   return (
//      <NavigationContainer>
//        <Drawer.Navigator>
//            <Drawer.Screen name='Dashboard' component={Dashboard}  options={
//             {

//               title: 'Dashboard Page',
//               drawerLabel: 'My Dashy',
//               drawerActiveTintColor: '#333',
//               drawerActiveBackgroundColor: 'lightblue',
//               drawerContentStyle:
//               {
//                 backgroundColor:'#c6cbef'
//               }
//             }
//            }/>
//            <Drawer.Screen name='Settings' component={Settings}/>
//        </Drawer.Navigator>

//      </NavigationContainer>

//   );
// }

// const styles = StyleSheet.create({

//   container: {
//             flex: 1,
//             backgroundColor: "#F5F5F5",
//           },
// });

// Tab NAVIGATION

// import { NavigationContainer } from "@react-navigation/native";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { View, Text, StyleSheet, Button, TextInput, Pressable} from "react-native";

// import CourseListScreen from "./components/CourseListScreen";

// import Profile from "./components/Profile";

// import Settings from "./components/settings";

// import Ionicons from "@expo/vector-icons/Ionicons";

// const Tab = createBottomTabNavigator();

// export default function App (){

//   return (

//    <NavigationContainer>
//     <Tab.Navigator
//      screenOptions={
//       {
//         tabBarLabelPosition:"below-icon",
//         tabBarShowLabel: true,
//         tabBarActiveTintColor:'cyan'
//       }
//      }
//     >
//       <Tab.Screen name="CourseListScreen" component={CourseListScreen}/>
//       <Tab.Screen name="Profile" component={Profile}  options={
//         {
//           tabBarLabel: 'My Profile',
//           tabBarIcon: ({color})=><Ionicons name="person" size={20} color={color}/>,
//           tabBarBadge: 5
//         }
//       }/>
//       <Tab.Screen name="Settings" component={Settings}/>
//     </Tab.Navigator>
//    </NavigationContainer>
//   );
// }
// const styles = StyleSheet.create({

//     container: {
//               flex: 1,
//               backgroundColor: "#F5F5F5",
//             },
//   });

// NESTING NAVIGATORS  using Stack.js

// import { NavigationContainer } from "@react-navigation/native";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { View, Text, StyleSheet, Button, TextInput, Pressable} from "react-native";

// import CourseListScreen from "./components/CourseListScreen";

// import Profile from "./components/Profile";

// import Settings from "./components/settings";

// import Ionicons from "@expo/vector-icons/Ionicons";
// import { AboutStack } from "./Stack";

// const Tab = createBottomTabNavigator();

// export default function App (){

//   return (

//    <NavigationContainer>
//     <Tab.Navigator
//      screenOptions={
//       {
//         tabBarLabelPosition:"below-icon",
//         tabBarShowLabel: true,
//         tabBarActiveTintColor:'cyan'
//       }
//      }
//     >
//       <Tab.Screen name="CourseListScreen" component={CourseListScreen}/>
//       <Tab.Screen name="Profile" component={Profile}  options={
//         {
//           tabBarLabel: 'My Profile',
//           tabBarIcon: ({color})=><Ionicons name="person" size={20} color={color}/>,
//           tabBarBadge: 5
//         }
//       }/>
//       <Tab.Screen name="Settings" component={Settings}/>
//       <Tab.Screen name="About Stack" component={AboutStack} options={
//         {
//           headerShown: false
//         }
//       }/>
//     </Tab.Navigator>
//    </NavigationContainer>
//   );
// }
// const styles = StyleSheet.create({

//     container: {
//               flex: 1,
//               backgroundColor: "#F5F5F5",
//             },
//   });

// TODO LIST   Project  - via useState HOOKs  using Task.js

// import React, { useState } from "react";
// import {
//   KeyboardAvoidingView,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Keyboard,
//   ScrollView,
//   Platform,
// } from "react-native";
// import Task from "./components/Task";

// export default function App() {
//   const [task, setTask] = useState();
//   const [taskItems, setTaskItems] = useState([]);

//   const handleAddTask = () => {
//     Keyboard.dismiss();
//     setTaskItems([...taskItems, task]);
//     setTask(null);
//   };

//   const completeTask = (index) => {
//     let itemsCopy = [...taskItems];
//     itemsCopy.splice(index, 1);
//     setTaskItems(itemsCopy);
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         contentContainerStyle={{
//           flexGrow: 1,
//         }}
//         keyboardShouldPersistTaps="handled"
//       >
//         <View style={styles.tasksWrapper}>
//           <Text style={styles.sectionTitle}>Today's tasks</Text>
//           <View style={styles.items}>
//             {taskItems.map((item, index) => {
//               return (
//                 <TouchableOpacity
//                   key={index}
//                   onPress={() => completeTask(index)}
//                 >
//                   <Task text={item} />
//                 </TouchableOpacity>
//               );
//             })}
//           </View>
//         </View>
//       </ScrollView>

//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={styles.writeTaskWrapper}
//       >
//         <TextInput
//           style={styles.input}
//           placeholder={"Write a task"}
//           value={task}
//           onChangeText={(text) => setTask(text)}
//         />
//         <TouchableOpacity onPress={() => handleAddTask()}>
//           <View style={styles.addWrapper}>
//             <Text style={styles.addText}>+</Text>
//           </View>
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E8EAED",
//   },
//   tasksWrapper: {
//     paddingTop: 80,
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   items: {
//     marginTop: 30,
//   },
//   writeTaskWrapper: {
//     position: "absolute",
//     bottom: 60,
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//   },
//   input: {
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: "#FFF",
//     borderRadius: 60,
//     borderColor: "#C0C0C0",
//     borderWidth: 1,
//     width: 250,
//   },
//   addWrapper: {
//     width: 60,
//     height: 60,
//     backgroundColor: "#FFF",
//     borderRadius: 60,
//     justifyContent: "center",
//     alignItems: "center",
//     borderColor: "#C0C0C0",
//     borderWidth: 1,
//   },
//   addText: {},
// });

// React NATIVE   ANIMATION API AND  Reanimated

// import React, { useRef, useEffect } from "react";
// import { Animated, Text, View } from "react-native";

// const FadeInView = (props) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,

//       duration: 2000,
//       useNativeDriver: true,
//     }).start();
//   }, [fadeAnim]);

//   return (
//     <Animated.View
//       style={{
//         ...props.style,
//         opacity: fadeAnim,
//       }}
//     >
//       {props.children}
//     </Animated.View>
//   );
// };

// export default () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <FadeInView
//         style={{
//           width: 250,
//           height: 50,
//           backgroundColor: "powderblue",
//         }}
//       >
//         <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>
//           Fading in
//         </Text>
//       </FadeInView>
//     </View>
//   );
// };

// react native REANIMATED

// import { Button, View } from "react-native";
// import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

// export default function App() {
//   const width = useSharedValue(100);

//   const handlePress = () => {
//     width.value = withSpring(width.value + 50);
//   };

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Animated.View
//         style={{
//           width,
//           height: 100,
//           backgroundColor: "violet",
//           borderRadius: 30,
//         }}
//       />
//       <Button onPress={handlePress} title="Click me" />
//     </View>
//   );
// }

// import React, { useState } from "react";
// import { View, Button, StyleSheet, Pressable } from "react-native";
// import Animated, { Keyframe, Easing } from "react-native-reanimated";

// export default function KeyframeExample() {
//   const [visible, setVisible] = useState(true);

//   const enteringAnimation = new Keyframe({
//     0: {
//       opacity: 0,
//       transform: [
//         { translateY: 50 },
//         { rotate: "820deg" },
//         { skewX: "0deg" },
//         { scale: 0 },
//       ],
//     },
//     50: {
//       opacity: 0.5,
//       transform: [
//         { translateY: 25 },
//         { rotate: "-180deg" },
//         { skewX: "30deg" },
//         { scale: 0.5 },
//       ],
//       easing: Easing.out(Easing.quad),
//     },
//     100: {
//       opacity: 1,
//       transform: [
//         { translateY: 0 },
//         { rotate: "0deg" },
//         { skewX: "0deg" },
//         { scale: 1 },
//       ],
//     },
//   }).duration(1000);

//   const exitingAnimation = new Keyframe({
//     0: {
//       opacity: 1,
//       transform: [{ translateY: 0 }, { rotateZ: "0deg" }],
//     },
//     10: {
//       opacity: 1,
//       transform: [{ translateY: 25 }, { rotateZ: "0deg" }],
//       easing: Easing.exp,
//     },
//     50: {
//       opacity: 0.5,
//       transform: [{ translateY: -100 }, { rotateZ: "60deg" }],
//     },
//     100: {
//       opacity: 0,
//       transform: [{ translateY: -300 }, { rotateZ: "120deg" }],
//     },
//   }).duration(1000);

//   return (
//     <View style={styles.container}>
//       {visible && (
//         <Animated.View
//           entering={enteringAnimation}
//           exiting={exitingAnimation}
//           style={styles.box}
//         >
//           <Pressable
//             onPress={() => setVisible(!visible)}
//             style={styles.button}
//           />
//         </Animated.View>
//       )}

//       <Button title="Animate box" onPress={() => setVisible(!visible)} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 250,
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   button: {
//     height: "100%",
//     width: "100%",
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: "#b58df1",
//     borderRadius: 24,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 48,
//   },
// });

// Using MOTI Library

// import { MotiImage, AnimatePresence, Text } from "moti";
// import React, { useState } from "react";
// import { StyleSheet, View, useWindowDimensions } from "react-native";
// import { wrap } from "popmotion";

// export default function Gallery() {
//   const { width } = useWindowDimensions();
//   const [[index, direction], setState] = useState([0, 0]);

//   const paginate = (direction: 1 | -1) => () => {
//     setState(([index]) => {
//       return [index + direction, direction];
//     });
//   };

//   const url = photos[wrap(0, photos.length, index)];

//   return (
//     <View style={styles.container}>
//       <AnimatePresence initial={false} custom={direction}>
//         <MotiImage
//           from={{
//             opacity: 0,
//             translateX: direction * width,
//           }}
//           animate={{
//             opacity: 1,
//             translateX: 0,
//             zIndex: 1,
//           }}
//           exit={(custom) => {
//             "worklet";
//             return {
//               opacity: 0,
//               translateX: custom * width * -1,
//               zIndex: 0,
//             };
//           }}
//           style={[styles.image, { width }]}
//           key={index}
//           source={{ uri: url }}
//           transition={{
//             translateX: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 200, type: "timing" },
//           }}
//         />
//       </AnimatePresence>
//       <View style={styles.actions}>
//         <Text selectable={false} style={styles.button} onPress={paginate(-1)}>
//           👈
//         </Text>
//         <Text selectable={false} style={styles.button} onPress={paginate(1)}>
//           👉
//         </Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#0D1117",
//   },
//   padded: {
//     padding: 16,
//   },
//   image: {
//     ...StyleSheet.absoluteFillObject,
//     alignSelf: "center",
//   },
//   actions: {
//     flexDirection: "row",
//     margin: 16,
//     justifyContent: "space-between",
//     zIndex: 1,
//   },
//   button: {
//     fontSize: 42,
//     backgroundColor: "white",
//     height: 75,
//     width: 75,
//     borderRadius: 100,
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center",
//     lineHeight: 75,
//   },
//   action: {},
// });

// const photos = [
//   `https://images.unsplash.com/photo-1551871812-10ecc21ffa2f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=929&q=80`,
//   `https://images.unsplash.com/photo-1530447920184-b88c8872?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJvY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`,
//   `https://images.unsplash.com/photo-1581069700310-8cf2e1b6baf0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHJvY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`,
//   `https://images.unsplash.com/photo-1562802378-063ec186a863?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1c2hpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`,
// ];

// Using MOTI Library

// import { StyleSheet, Text } from "react-native";
// import { MotiView } from "moti";

// function Shape() {
//   return (
//     <MotiView
//       from={{
//         translateY: -100,
//       }}
//       animate={{
//         translateY: 0,
//       }}
//       transition={{
//         loop: true,
//         type: "timing",
//         duration: 1500,
//         delay: 100,
//       }}
//       style={styles.shape}
//     >
//       <Text style={styles.text}>Hello World</Text>
//     </MotiView>
//   );
// }

// export default function Loop() {
//   return (
//     <MotiView style={styles.container}>
//       <Shape />
//     </MotiView>
//   );
// }

// const styles = StyleSheet.create({
//   shape: {
//     justifyContent: "center",
//     height: 250,
//     width: 250,
//     borderRadius: 25,
//     marginRight: 10,
//     backgroundColor: "white",
//     alignItems: "center",
//   },
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//     backgroundColor: "#9c1aff",
//   },
//   text: {
//     fontSize: 20,
//     color: "black", // Set text color
//     fontWeight: "bold",
//   },
// });

// Using Lottie  Library

// import { useRef, useEffect } from "react";
// import { Button, StyleSheet, View } from "react-native";
// import LottieView from "lottie-react-native";

// export default function App() {
//   const animation = useRef(null);
//   useEffect(() => {}, []);

//   return (
//     <View style={styles.animationContainer}>
//       <LottieView
//         autoPlay
//         ref={animation}
//         style={{
//           width: 200,
//           height: 200,
//           backgroundColor: "#eee",
//         }}
//         source={require("./assests/charmander.png")}
//       />
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Restart Animation"
//           onPress={() => {
//             animation.current?.reset();
//             animation.current?.play();
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   animationContainer: {
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
//   buttonContainer: {
//     paddingTop: 20,
//   },
// });

// with Fontawesome ICONS  MOTI

// import { Text, View, StyleSheet, Pressable } from "react-native";
// import { AnimatePresence, MotiView } from "moti";
// import { useState } from "react";
// import FontAwesome from "react-native-vector-icons/FontAwesome";

// export default function ActionMenu() {
//   const [expanded, setExpanded] = useState(false);
//   return (
//     <View style={styles.container}>
//       <Text style={{ color: "white", textAlign: "center" }}>
//         Click the button in the bottom right!
//       </Text>
//       <Pressable
//         onPress={() => setExpanded(!expanded)}
//         style={[
//           styles.button,
//           {
//             backgroundColor: expanded ? "#2F4EB2" : "#10243E",
//             borderColor: "#2F4EB2",
//           },
//         ]}
//       >
//         <MotiView
//           style={{ position: "absolute" }}
//           animate={{ scale: expanded ? 1.5 : 1 }}
//           transition={{
//             duration: 150,
//             type: "timing",
//           }}
//         >
//           <Text>
//             <FontAwesome name="gift" size={24} color="white" />
//           </Text>
//         </MotiView>
//       </Pressable>
//       <AnimatePresence>
//         {expanded && (
//           <View style={{ position: "absolute", bottom: 0, right: 0 }}>
//             {actions.map((action, i) => (
//               <ActionButton key={i.toString()} action={action} index={i} />
//             ))}
//           </View>
//         )}
//       </AnimatePresence>
//     </View>
//   );
// }

// function ActionButton({ action, index }) {
//   return (
//     <MotiView
//       transition={{ delay: index * 100, damping: 15, mass: 1 }}
//       from={{
//         opacity: 0,
//         translateX: 0,
//       }}
//       animate={{
//         opacity: 1,
//         translateX: -65 * (index + 1),
//       }}
//       exit={{
//         opacity: 0,
//         translateX: 0,
//       }}
//     >
//       <Pressable
//         onPress={() => console.log(action.type)}
//         style={[
//           styles.button,
//           {
//             backgroundColor: action.color,
//             shadowColor: action.color,
//             borderColor: action.border,
//           },
//         ]}
//       >
//         <Text>
//           <FontAwesome name={action.icon} size={24} color="white" />
//         </Text>
//       </Pressable>
//     </MotiView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#111",
//     padding: 8,
//   },
//   button: {
//     borderRadius: 100,
//     width: 55,
//     height: 55,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     bottom: 50,
//     right: 20,
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3,
//     zIndex: 1,
//     borderWidth: 2,
//   },
// });

// const actions = [
//   {
//     type: "Send",
//     color: "#341A34",
//     icon: "user",
//     border: "#692D6F",
//   },
//   {
//     type: "Scan",
//     color: "#16301D",
//     icon: "camera",
//     border: "#2F6E3B",
//   },
//   {
//     type: "Activity",
//     color: "#3B1813",
//     icon: "life-ring",
//     border: "#7F2315",
//   },
// ];

// react native SWIPER SLIDER

// import React, { useRef } from "react";
// import Icon from "react-native-vector-icons/FontAwesome";
// import {
//   View,
//   Image,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
// } from "react-native";
// import Swiper from "react-native-swiper";

// const data = [
//   {
//     title: "Slide 1",
//     image:
//       "https://plus.unsplash.com/premium_photo-1666901328554-29162d8b58ed?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Slide 2",
//     image:
//       "https://plus.unsplash.com/premium_photo-1666900492819-9d9744e10bc7?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Slide 3",
//     image:
//       "https://plus.unsplash.com/premium_photo-1666900852769-714859977030?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

// const App = () => {
//   const swiperRef = useRef(null);

//   const renderNextButton = () => (
//     <TouchableOpacity
//       style={styles.button}
//       onPress={() => swiperRef.current.scrollBy(1)}
//     >
//       <Icon name="angle-right" size={20} color="#000" />
//     </TouchableOpacity>
//   );

//   const renderPrevButton = () => (
//     <TouchableOpacity
//       style={styles.button}
//       onPress={() => swiperRef.current.scrollBy(-1)}
//     >
//       <Icon name="angle-left" size={20} color="#000" />
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.swiperContainer}>
//         <Swiper
//           ref={swiperRef}
//           style={styles.wrapper}
//           showsButtons={false}
//           autoplay={true}
//           autoplayTimeout={3}
//         >
//           {data.map((item, index) => (
//             <View style={styles.slide} key={index}>
//               <Image source={{ uri: item.image }} style={styles.image} />
//             </View>
//           ))}
//         </Swiper>
//         <View style={styles.buttonContainer}>
//           {renderPrevButton()}
//           {renderNextButton()}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   swiperContainer: {
//     position: "relative",
//     width: "100%",
//     height: "100%",
//   },
//   wrapper: {},
//   slide: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "lightgray",
//   },
//   image: {
//     width: "100%",
//     height: "70%",
//     borderRadius: 8,
//   },
//   buttonContainer: {
//     position: "absolute",
//     top: "50%",
//     left: 0,
//     right: 0,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//   },
//   button: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 50,
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
// });

// export default App;

// React native REANIMATED carousel

// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Dimensions,
//   FlatList,
// } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// // const { width: viewportWidth } = Dimensions.get("window");

// // const data = [
// //   {
// //     title: "Slide 1",
// //     image:
// //       "https://plus.unsplash.com/premium_photo-1666901328554-29162d8b58ed?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   },
// //   {
// //     title: "Slide 2",
// //     image:
// //       "https://plus.unsplash.com/premium_photo-1666900492819-9d9744e10bc7?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   },
// //   {
// //     title: "Slide 3",
// //     image:
// //       "https://plus.unsplash.com/premium_photo-1666900852769-714859977030?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   },
// // ];

// // const App = () => {
// //   const flatListRef = useRef(null);

// //   const renderItem = ({ item }) => (
// //     <View style={styles.slide}>
// //       <Image source={{ uri: item.image }} style={styles.image} />

// //       <Text style={styles.title}>{item.title}</Text>
// //     </View>
// //   );

// //   return (
// //     <GestureHandlerRootView style={styles.container}>
// //       <FlatList
// //         data={data}
// //         renderItem={renderItem}
// //         horizontal
// //         pagingEnabled
// //         keyExtractor={(item) => item.title}
// //         showsHorizontalScrollIndicator={false}
// //         ref={flatListRef}
// //         onScrollEndDrag={(event) => {
// //           const index = Math.floor(
// //             event.nativeEvent.contentOffset.x / viewportWidth
// //           );
// //           console.log("Current Index: ", index);
// //         }}
// //       />
// //     </GestureHandlerRootView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "#fff",
// //   },
// //   slide: {
// //     width: viewportWidth,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   image: {
// //     width: "100%",
// //     height: 300,
// //     borderRadius: 10,
// //   },
// //   title: {
// //     fontSize: 24,
// //     color: "#000",
// //     marginTop: 10,
// //   },
// // });

// // export default App;

// import React, { useRef } from "react";
// import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import Carousel from "react-native-reanimated-carousel";

// const { width: viewportWidth } = Dimensions.get("window");

// const data = [
//   {
//     title: "Slide 1",
//     image:
//       "https://plus.unsplash.com/premium_photo-1666901328554-29162d8b58ed?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Slide 2",
//     image:
//       "https://plus.unsplash.com/premium_photo-1666900492819-9d9744e10bc7?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Slide 3",
//     image:
//       "https://plus.unsplash.com/premium_photo-1666900852769-714859977030?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

// const App = () => {
//   const carouselRef = useRef(null);

//   const renderItem = ({ index }) => (
//     <View style={styles.slide}>
//       <Image source={{ uri: data[index].image }} style={styles.image} />
//       <Text style={styles.title}>{data[index].title}</Text>
//     </View>
//   );

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <Carousel
//         ref={carouselRef}
//         loop
//         width={viewportWidth}
//         height={400} // Adjust height as needed
//         data={data}
//         renderItem={renderItem}
//         onSnapToItem={(index) => console.log("Current Index: ", index)} // Log current index
//         autoplay
//         autoplayInterval={3000} // Change interval as needed
//         style={{ overflow: "visible" }} // Optional for styling
//       />
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   slide: {
//     width: viewportWidth,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     width: "100%",
//     height: 300,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 24,
//     color: "#000",
//     marginTop: 10,
//   },
// });

// export default App;

// import React, { useRef } from "react";
// import {
//   View as RNView,
//   Text,
//   Image,
//   StyleSheet,
//   Dimensions,
//   Button,
//   LinearGradient,
// } from "react-native"; // Rename View to RNView
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import Carousel from "react-native-reanimated-carousel";

// const { width: viewportWidth } = Dimensions.get("window");

// const data = [
//   {
//     title: "Slide 1",
//     image:
//       "https://plus.unsplash.com/premium_photo-1666901328554-29162d8b58ed?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Slide 2",
//     image:
//       "https://plus.unsplash.com/premium_photo-1666900492819-9d9744e10bc7?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Slide 3",
//     image:
//       "https://plus.unsplash.com/premium_photo-1666900852769-714859977030?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

// const App = () => {
//   const carouselRef = useRef(null);

//   const renderItem = ({ index }) => (
//     <RNView style={styles.slide}>
//       <Image source={{ uri: data[index].image }} style={styles.image} />
//       <Text style={styles.title}>{data[index].title}</Text>
//     </RNView>
//   );

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <Carousel
//         ref={carouselRef}
//         loop={true}
//         width={viewportWidth}
//         height={400} // Adjust height as needed
//         data={data}
//         renderItem={renderItem}
//         onSnapToItem={(index) => console.log("Current Index: ", index)} // Log current index
//         autoplay={true}
//         autoplayInterval={3000} // Change interval as needed
//         style={{ overflow: "visible" }} // Optional for styling
//       />
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   slide: {
//     width: viewportWidth,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     width: "100%",
//     height: 300,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 24,
//     color: "#000",
//     marginTop: 10,
//   },
// });

// export default App;

// *****************
// React Native UI library

// Use React Native ELEMENTS  UI

// Form Handling   - use React HOOK Forms

// **********styles

// *** In React native postion absolute is relative to position element which is closest positioned ancestor, if none is found, screen will be treated as relative.********

// import React, { useRef } from "react";
// import {
//   Animated,
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   SafeAreaView,
// } from "react-native";

// const App = () => {

//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   const fadeIn = () => {

//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 5000,
//       useNativeDriver: true,
//     }).start();
//   };

//   const fadeOut = () => {

//     Animated.timing(fadeAnim, {
//       toValue: 0,
//       duration: 3000,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Animated.View
//         style={[
//           styles.fadingContainer,
//           {
//             opacity: fadeAnim,
//           },
//         ]}
//       >
//         <Text style={styles.fadingText}>Fading Text</Text>
//       </Animated.View>
//       <View style={styles.buttonRow}>
//         <Button title="Fade In" onPress={fadeIn} />
//         <Button title="Fade Out" onPress={fadeOut} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   fadingContainer: {
//     padding: 20,
//     backgroundColor: "powderblue",
//   },
//   fadingText: {
//     fontSize: 28,
//   },
//   buttonRow: {
//     flexDirection: "row",
//     marginTop: 20,
//     justifyContent: "space-between",
//     gap: 20,
//   },
// });

// export default App;

// another  animation Example

// import React from "react";
// import { Button, View, StyleSheet } from "react-native";
// import Animated, {
//   useSharedValue,
//   useAnimatedProps,
//   withTiming,
// } from "react-native-reanimated";
// import Svg, { Circle } from "react-native-svg";

// const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// export default function App() {

//   const r = useSharedValue(20);

//   const handlePress = () => {
//     r.value += 10;
//   };

//   const animatedProps = useAnimatedProps(() => ({
//     r: withTiming(r.value),
//   }));

//   return (
//     <View style={styles.container}>
//       <Svg height="100" width="100">
//         <AnimatedCircle
//           cx="50%"
//           cy="50%"
//           fill="#b58df1"
//           animatedProps={animatedProps}
//         />
//       </Svg>
//       <Button onPress={handlePress} title="Click me" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   svg: {
//     width: 100,
//     height: 100,
//   },
// });

// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
// } from "react-native";

// const Header = () => {
//   const handleMenuPress = () => {
//     console.log("Menu button pressed");
//     // Add your menu toggle logic here
//   };

//   return (
//     <View style={styles.headerContainer}>
//       <TouchableOpacity onPress={handleMenuPress}>
//         <Image
//           source={{
//             uri: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           }} // Replace with your menu icon URL
//           style={styles.menuIcon}
//         />
//       </TouchableOpacity>
//       <Text style={styles.title}>Header Title</Text>
//       <Image
//         source={{
//           uri: "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww",
//         }} // Replace with your header image URL
//         style={styles.headerImage}
//       />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.headerWrapper}>
//         <Header />
//       </View>
//       {/* Other components go here */}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff", // Background color for the main view
//   },
//   headerWrapper: {
//     // Adds padding to position the header below the status bar
//     paddingTop: 20, // Adjust this value based on your design
//     paddingTop: StatusBar.currentHeight,
//   },
//   headerContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: 10,
//     backgroundColor: "#397af8", // Header background color
//   },
//   menuIcon: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//   },
//   title: {
//     fontSize: 20,
//     color: "#fff",
//     flex: 1,
//     textAlign: "center",
//   },
//   headerImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginLeft: 10,
//   },
// });

// export default App;

// Gesture animations in  react-native-reanimated

// import React, { useRef } from "react";
// import { View, StyleSheet, SafeAreaView } from "react-native";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
// } from "react-native-reanimated";
// import {
//   TapGestureHandler,
//   GestureHandlerRootView,
// } from "react-native-gesture-handler";

// const App = () => {
//   const scale = useSharedValue(1);

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ scale: scale.value }],
//     };
//   });

//   const handleTap = () => {
//     scale.value = withTiming(scale.value === 1 ? 1.5 : 1, { duration: 200 });
//   };

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <SafeAreaView style={styles.innerContainer}>
//         <TapGestureHandler onActivated={handleTap}>
//           <Animated.View style={[styles.circle, animatedStyle]} />
//         </TapGestureHandler>
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   innerContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   circle: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: "blue",
//   },
// });

// export default App;

// a basic design with HEADER, Swiper slider and a CARD

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   Button,
//   SafeAreaView,
//   StatusBar,
// } from "react-native";
// import Carousel from "react-native-reanimated-carousel";

// const Header = () => {
//   return (
//     <View style={styles.headerContainer}>
//       <Text style={styles.headerTitle}>Header Title</Text>
//     </View>
//   );
// };

// const CarouselComponent = () => {
//   const data = [
//     {
//       id: 1,
//       uri: "https://plus.unsplash.com/premium_photo-1679314213957-909df10381ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     {
//       id: 2,
//       uri: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     {
//       id: 3,
//       uri: "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww",
//     },
//   ];

//   return (
//     <View style={styles.carouselContainer}>
//       <Carousel
//         loop
//         width={300}
//         height={500}
//         autoPlay={true}
//         data={data}
//         renderItem={({ item }) => (
//           <View style={styles.carouselItem}>
//             <Image source={{ uri: item.uri }} style={styles.carouselImage} />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const Card = () => {
//   return (
//     <View style={styles.card}>
//       <Image
//         source={{
//           uri: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww",
//         }}
//         style={styles.cardImage}
//       />
//       <Text style={styles.cardText}>
//         This is a card with an image and text.
//       </Text>
//       <Button title="Click Me" onPress={() => alert("Button Pressed!")} />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Header />
//       <CarouselComponent />
//       <Card />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f9fa",
//     paddingTop: StatusBar.currentHeight,
//   },
//   headerContainer: {
//     padding: 16,
//     backgroundColor: "#397af8",
//     alignItems: "center",
//   },
//   headerTitle: {
//     color: "#fff",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   carouselContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 16,
//     flex: 1,
//   },
//   carouselItem: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   carouselImage: {
//     width: 300,
//     height: 350,
//     borderRadius: 10,
//   },
//   card: {
//     padding: 16,
//     backgroundColor: "#cdcdcd",
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 2,
//     marginHorizontal: 16,
//     marginTop: 32,
//     flex: 1,
//   },
//   cardImage: {
//     width: "100%",
//     height: 100,
//     borderRadius: 10,
//   },
//   cardText: {
//     marginVertical: 10,
//     fontSize: 16,
//   },
// });

// export default App;

// Linear Gradient USe  ********

// import React from "react";
// import { View, Text, StyleSheet, StatusBar, Button, Alert } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <LinearGradient
//         colors={["#ff69b4", "#ff0000", "#ffff00"]}
//         locations={[0.2, 0.6, 1]}
//         style={styles.linearGradient}
//       >
//         <View style={styles.buttonBox}>
//           <Button
//             title="Facebook"
//             onPress={() => Alert.alert("Hello")}
//             color="#ff69b4"
//           />
//         </View>
//       </LinearGradient>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: StatusBar.currentHeight,
//   },
//   linearGradient: {
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 5,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonText: {
//     fontSize: 18,
//     textAlign: "center",
//     margin: 10,
//     color: "navy",
//     backgroundColor: "transparent",
//     fontSize: 34,
//     fontWeight: "bold",
//   },
//   buttonBox: {
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     padding: 20,
//   },
// });

// **************************???????????////////////************ */

// **
// ___
// ****

//_____________*****23 10  2024*****_____________________

// **
// ___
// ****
// *************************************************???????????////////////************ */

// Executor for all pages

// Stack Navigation

// import { NavigationContainer } from "@react-navigation/native";

// import Main from "./components/StackNavigation/Main";

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Main />
//     </NavigationContainer>
//   );
// };

// export default App;

// Drawer Naivigation

// import { NavigationContainer } from "@react-navigation/native";
// import Main from "./components/DrawerNavigation/Main";

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Main />
//     </NavigationContainer>
//   );
// };

// export default App;

// Tab Navigation

// import { NavigationContainer } from "@react-navigation/native";
// import Main from "./components/TabNavigation/Main";

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Main />
//     </NavigationContainer>
//   );
// };
// export default App;

// RN -Modal

// import modalC from "./components/modalC";

// export default function App() {
//   return <modalC />;
// }

// Flex and properties

// import Flex from "./components/Flex";
// const App = () => {
//   return <Flex />;
// };

// export default App;

// RN -Lists  - FLATLIST

// import Flatlist from "./components/Flatlist";

// const App = () => {
//   return <Flatlist />;
// };

// export default App;

// RN -Lists  - SECTIONLISt

// import SectionLists from "./components/SectionLists";

// const App = () => {
//   return <SectionLists />;
// };

// export default App;

// RN sliders/ Carousels

// Swiper slider

// import RnSwiper from "./components/RnSwiper";

// const App = () => {
//   return <RnSwiper />;
// };

// export default App;

// RN Reanimated Carousel

// import ReanimatedCarousel from "./components/ReanimatedCarousel";
// const App = () => {
//   return <ReanimatedCarousel />;
// };

// export default App;

// linear gradient style

// import LinearGrad from "./components/LinearGrad";

// const App = () => {
//   return <LinearGrad />;
// };

// export default App;

// RN ANIMATIONS

// using Animations API  or react-native-reanimated -  also we  can use external libraries as LOTTIE or MOTI

// import RNAnimations from "./components/RNAnimations";
// const App = () => {
//   return <RNAnimations />;
// };
// export default App;

// Using MOTI library Animation

// import MotiAnimations from "./components/MotiAnimations";
// const App = () => {
//   return <MotiAnimations />;
// };
// export default App;

// POKEMON CARDS ACTIVITY

// import PokemonList from "./components/PokemonList";
// const App = () => {
//   return <PokemonList />;
// };
// export default App;
// __

// ****

// Integrating ---****** TAILWIND CSS ********---  in RN Project   - can use both Tailwind and Stylesheet in same project
// __

// ****
// import TailwindProject from "./components/TailwindProject";
// const App = () => {
//   return <TailwindProject />;
// };
// export default App;

// Bloomvie LandingPage Sample

// import RNTabView from "./BloomViePro/RNTabView";
import { NavigationContainer } from "@react-navigation/native";
import RenderPag from "./BloomViePro/RenderPag";

// import AttachmentInput from "./components/TabNavigation/Contact";

const App = () => {
  return (
    <NavigationContainer>
      <RenderPag />
    </NavigationContainer>
    // <RNTabView />
  );
};
export default App;
