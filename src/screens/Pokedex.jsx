import { useState, useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  console.log(pokemons);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const response = await getPokemonsApi();
        const pokemonsArray = [];

        for await (const pokemon of response.results) {
          const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            imagen:
              pokemonDetails.sprites.other["official-artwork"].front_default
          });
        }
        setPokemons([...pokemons, ...pokemonsArray]);
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
