import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Header Title</Text>
    </View>
  );
};

const CarouselComponent = () => {
  const data = [
    {
      id: 1,
      uri: "https://plus.unsplash.com/premium_photo-1679314213957-909df10381ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      uri: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      uri: "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww",
    },
  ];

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop
        width={300}
        height={500}
        autoPlay={true}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={{ uri: item.uri }} style={styles.carouselImage} />
          </View>
        )}
      />
    </View>
  );
};

const Card = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww",
        }}
        style={styles.cardImage}
      />
      <Text style={styles.cardText}>
        This is a card with an image and text.
      </Text>
      <Button title="Click Me" onPress={() => alert("Button Pressed!")} />
    </View>
  );
};

const RnSwiper = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CarouselComponent />
      <Card />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: StatusBar.currentHeight,
  },
  headerContainer: {
    padding: 16,
    backgroundColor: "#397af8",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  carouselContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    flex: 1,
  },
  carouselItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  carouselImage: {
    width: 300,
    height: 350,
    borderRadius: 10,
  },
  card: {
    padding: 16,
    backgroundColor: "#cdcdcd",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: 16,
    marginTop: 32,
    flex: 1,
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    marginVertical: 10,
    fontSize: 16,
  },
});

export default RnSwiper;
