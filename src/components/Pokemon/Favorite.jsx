import { Ionicons } from "@expo/vector-icons";
import {
  addPokemonFavoriteApi,
  getPokemonFavoriteApi
} from "../../api/favorite";

export default function Favorite({ id }) {
  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  const getFav = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  };

  return (
    <Ionicons
      name="heart-outline"
      size={20}
      color="#fff"
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
