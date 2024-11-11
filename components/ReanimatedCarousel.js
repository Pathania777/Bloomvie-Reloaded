import React, { useRef } from "react";
import {
  View as RNView,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";

const { width: viewportWidth } = Dimensions.get("window");

const data = [
  {
    title: "Slide 1",
    image:
      "https://plus.unsplash.com/premium_photo-1666901328554-29162d8b58ed?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Slide 2",
    image:
      "https://plus.unsplash.com/premium_photo-1666900492819-9d9744e10bc7?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Slide 3",
    image:
      "https://plus.unsplash.com/premium_photo-1666900852769-714859977030?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ReanimatedCarousel = () => {
  const carouselRef = useRef(null);

  const renderItem = ({ index }) => (
    <RNView style={styles.slide}>
      <Image source={{ uri: data[index].image }} style={styles.image} />
      <Text style={styles.title}>{data[index].title}</Text>
    </RNView>
  );

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* Carousel */}
      <Carousel
        ref={carouselRef}
        loop={true}
        width={viewportWidth}
        height={400}
        data={data}
        renderItem={renderItem}
        onSnapToItem={(index) => console.log("Current Index: ", index)}
        autoplay={true}
        autoplayInterval={3000}
        style={{ overflow: "visible" }}
      />

      {/* Left Button */}
      <TouchableOpacity style={styles.leftButton} onPress={handlePrev}>
        <Text style={styles.buttonText}>{"<"}</Text>
      </TouchableOpacity>

      {/* Right Button */}
      <TouchableOpacity style={styles.rightButton} onPress={handleNext}>
        <Text style={styles.buttonText}>{">"}</Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  slide: {
    width: viewportWidth,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: "#000",
    marginTop: 10,
  },
  leftButton: {
    position: "absolute",
    left: 10,
    top: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 50,
  },
  rightButton: {
    position: "absolute",
    right: 10,
    top: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ReanimatedCarousel;
