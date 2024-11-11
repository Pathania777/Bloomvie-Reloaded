// About.js

import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const About = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }} // Replace with your image URL
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.paragraph}>
          Welcome to  About Page! This is where you can learn more about our app.
        </Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

        {/* <Button
  title="Update the title"
  onPress={() => navigation.setOptions({ title: 'Updated!' })}
/> */}

        {/* <Button title="Go back" onPress={() => navigagtion.goBack()} /> */}

        {/* <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('About', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      /> */}



        {/* <Button
  title="Go to Details... again"
  onPress={() => navigation.push('About')}
/> */}


      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better readability
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  paragraph: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default About;
