import { View, Text, Button } from "react-native";
import { getPokemonFavoriteApi } from "../api/favorite";

export default function Favorite() {
  const checkFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  };

  return (
    <View>
      <Text>Favorite</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </View>
  );
}
