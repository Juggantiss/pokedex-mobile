import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons, loadPokemons, isNext }) {
  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      keyExtractor={(pokemon, index) => String(index)}
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            color="#AEAEAE"
            style={styles.spinner}
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60
  }
});
