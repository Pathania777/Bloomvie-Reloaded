import PokemonCard from "./pokemonCard";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";

export default function PokemonList() {
  const charmanderDate = {
    name: "charmander",
    image: require("../assests/charmander.png"),
    type: "fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"],
  };

  const flare = {
    name: "flare",
    image: require("../assests/flare.png"),
    type: "glass",
    hp: 43,
    moves: ["Growl", "Leer"],
    weakness: ["fire", "Rock"],
  };

  const pikachu = {
    name: "pikachu",
    image: require("../assests/pikachu.png"),
    type: "electric",
    hp: 67,
    moves: ["Ember", "Growl"],
    weakness: ["fire", "water"],
  };

  const sbor = {
    name: "sbor",
    image: require("../assests/sbor.png"),
    type: "fire",
    hp: 54,
    moves: ["Leer"],
    weakness: ["Water"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderDate} />
        <PokemonCard {...sbor} />
        <PokemonCard {...pikachu} />
        <PokemonCard {...flare} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
