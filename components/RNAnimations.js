import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withTiming,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  TapGestureHandler,
} from "react-native-gesture-handler";

const SIZE = 120;
const BOUNDARY_OFFSET = 50;

export default function RNAnimations() {
  const offset = useSharedValue(0);
  const width = useSharedValue(0);

  const scale = useSharedValue(1);

  const onLayout = (event) => {
    width.value = event.nativeEvent.layout.width;
  };

  const pan = Gesture.Pan()
    .onChange((event) => {
      offset.value += event.changeX;
    })
    .onFinalize((event) => {
      offset.value = withDecay({
        velocity: event.velocityX,
        rubberBandEffect: true,
        clamp: [
          -(width.value / 2) + SIZE / 2 + BOUNDARY_OFFSET,
          width.value / 2 - SIZE / 2 - BOUNDARY_OFFSET,
        ],
      });
    });

  const animatedPanStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const handleTap = () => {
    scale.value = withTiming(scale.value === 1 ? 1.5 : 1, { duration: 200 });
  };

  const animatedTapStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <View onLayout={onLayout} style={styles.wrapper}>
          <GestureDetector gesture={pan}>
            <Animated.View style={[styles.box, animatedPanStyle]} />
          </GestureDetector>
        </View>

        <TapGestureHandler onActivated={handleTap}>
          <Animated.View style={[styles.circle, animatedTapStyle]} />
        </TapGestureHandler>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: SIZE,
    width: SIZE,
    backgroundColor: "#b58df1",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "blue",
    marginTop: 20,
  },
});

// or use   react-native-animatable

// import React from "react";
// import { View, Text } from "react-native";
// import * as Animatable from "react-native-animatable";

// const RNAnimations = () => {
//   return (
//     <Animatable.View animation="fadeIn" duration={4500}>
//       <Text>Hello, World!</Text>
//     </Animatable.View>
//   );
// };
// export default RNAnimations;
