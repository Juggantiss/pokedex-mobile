import { FlatList, StyleSheet } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons }) {
  return (
    <FlatList
      keyExtractor={(pokemon) => String(pokemon.id)}
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5
  }
});
