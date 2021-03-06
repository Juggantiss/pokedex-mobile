import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { capitalize } from "lodash";
import getColorByType from "../utils/getColorByType";
import { useNavigation } from "@react-navigation/native";

export default function PokemonCard({ pokemon }) {
  const navigation = useNavigation();

  const bgStyles = {
    backgroundColor: getColorByType(pokemon.type),
    ...styles.bgStyles
  };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.imagen }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10
  },
  spacing: {
    flex: 1,
    padding: 5
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 100,
    height: 100
  }
});
