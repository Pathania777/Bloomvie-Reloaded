import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { MotiView, useDynamicAnimation } from "moti";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

function Shape() {
  const animation = useDynamicAnimation(() => ({
    opacity: 1,
  }));

  // Shared values for dragging
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Gesture for dragging
  const panGesture = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  // Animated styles to update position
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Pressable
        onPressIn={() => {
          animation.animateTo({
            opacity: 0.4,
          });
        }}
        onPressOut={() => {
          animation.animateTo((current) => ({
            ...current,
            opacity: 1,
          }));
        }}
      >
        <MotiView
          state={animation}
          style={[styles.shape, styles.shape2, animatedStyle]}
        />
      </Pressable>
    </GestureDetector>
  );
}

export default function MotiAnimations() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Shape />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "black",
  },
  shape2: {
    backgroundColor: "hotpink",
    marginTop: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#111",
  },
});
