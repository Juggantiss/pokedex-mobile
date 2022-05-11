import { Text, FlatList, StyleSheet } from "react-native";

export default function PokemonList({ pokemons }) {
  return (
    <FlatList
      keyExtractor={(pokemon) => String(pokemon.id)}
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5
  }
});
