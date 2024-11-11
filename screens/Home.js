

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

// const Home = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = () => {
//     navigation.navigate('About');
//   };

//   return (
//     <ImageBackground
//       source={{ uri: 'https://picsum.photos/200/300?grayscale' }} 
//       style={styles.background}
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>Login</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//         <Button title="Submit" onPress={handleSubmit} />
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   container: {
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', 
//     padding: 20,
//     borderRadius: 10,
//     margin: 20,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//     width: '100%',
//   },
// });

// export default Home;


import { View,  Text} from "react-native";

export default function Home ({name}){


  return(
    <View style={{ flex: 1, backgroundColor: "beige", padding: 60 }}>

       <Text>Hello, {name}</Text>
     </View>

  );
}