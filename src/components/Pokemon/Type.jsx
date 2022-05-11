import { StyleSheet, View, Text } from "react-native";
import { capitalize } from "lodash";
import getColorByType from "../../utils/getColorByType";

export default function Type({ types }) {
  const color = (type) => getColorByType(type);

  return (
    <View style={styles.content}>
      {types.map((item) => (
        <View
          key={item.type.name}
          style={{ backgroundColor: color(item.type.name), ...styles.pill }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10
  }
});
