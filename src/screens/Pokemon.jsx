import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Stats from "../components/Pokemon/Stats";
import Type from "../components/Pokemon/Type";

export default function Pokemon({ navigation, route: { params } }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Ionicons
          name="arrow-back-sharp"
          size={24}
          color={"#fff"}
          onPress={() => navigation.goBack()}
        />
      )
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
