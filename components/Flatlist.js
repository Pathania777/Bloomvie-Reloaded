import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

import pokemonList from "../data.json";

export default function Flatlist() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewList}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          ListEmptyComponent={<Text>No Items</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>POKEMONS</Text>}
          ListFooterComponent={
            <Text style={styles.headerText}>POKEMONS FOOter</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
  },
  viewList: {
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
});
