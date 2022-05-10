import { useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import { getPokemonsApi } from "../api/pokemon";

export default function Pokedex() {
  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const response = await getPokemonsApi();
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    return loadPokemons;
  }, []);

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
