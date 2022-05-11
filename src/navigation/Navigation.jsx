import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="FavoriteStack">
      <Tab.Screen
        name="FavoriteStack"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="PokedexStack"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: () => renderPokeball()
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi cuenta",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-o" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const renderPokeball = () => (
  <Image
    source={require("../assets/pokeball.png")}
    style={{ width: 75, height: 75, top: -15 }}
  />
);
