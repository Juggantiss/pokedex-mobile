import { Ionicons } from "@expo/vector-icons";

export default function Favorite({ id }) {
  console.log(id);
  const addFavorite = () => {
    console.log("Add to favoritos");
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
