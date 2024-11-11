// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   ImageBackground,
//   Image,
//   StatusBar,
// } from "react-native";

// export default function LandingPage() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ImageBackground
//         source={require("./assests/BackGroundBloomvie.jpg")}
//         style={styles.backgroundImage}
//         imageStyle={{ opacity: 0.3 }}
//       >
//         <View style={styles.logoContainer}>
//           <Image
//             source={require("./assests/Logo2.png")}
//             style={styles.logo}
//             resizeMode="contain"
//           />
//           <Text style={styles.text}>Bloomvie</Text>
//           <Text style={styles.textInner}>From Where It All Begins</Text>
//         </View>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,

//     justifyContent: "center",
//   },
//   backgroundImage: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "Pink",
//   },
//   logoContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     borderRadius: 15,
//     padding: 20,
//     width: 300,
//     height: 300,
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 34,
//     color: "purple",
//     fontWeight: "bold",
//   },
//   textInner: {
//     fontSize: 18,
//     color: "#000",
//   },
// });

import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LandingPage() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("LoginPage");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assests/BackGroundBloomvie.jpg")}
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.3 }}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("./assests/Logo2.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.text}>Bloomvie</Text>
          <Text style={styles.textInner}>From Where It All Begins</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "Pink",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: 300,
    height: 300,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 34,
    color: "purple",
    fontWeight: "bold",
  },
  textInner: {
    fontSize: 18,
    color: "#000",
  },
});
