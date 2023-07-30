import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import MenuComponent from "../components/MenuComponent";

const HomeScreen = () => {
  const data = [
    {
      id: "0",
      name: "MARGHERITA",
      description:
        "A hugely popular margherita, with a deliciously tangy single cheese topping",
      image: "https://www.dominos.co.in/files/items/Margherit.jpg",
      price: 130,
      veg: true,
    },
    {
      id: "1",
      name: "FARM HOUSE",
      description:
        "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
      image: "https://www.dominos.co.in/files/items/Farmhouse.jpg",
      price: 170,
      veg: true,
    },
    {
      id: "2",
      name: "MEXICAN GREEN WAVE",
      description:
        "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.",
      image: "https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg",
      price: 180,
      veg: true,
    },
    {
      id: "3",
      name: "PANEER MAKHANI",
      description: "Paneer and Capsicum on Makhani Sauce",
      image: "https://www.dominos.co.in/files/items/Paneer_Makhni.jpg",
      price: 200,
      veg: true,
    },
    {
      id: "4",
      name: "INDI TANDOORI PANEER",
      description:
        "It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayo",
      image: "https://www.dominos.co.in/files/items/IndianTandooriPaneer.jpg",
      price: 160,
      veg: true,
    },
    {
      id: "5",
      name: "VEGGIE PARADISE",
      description: "Goldern Corn, Black Olives, Capsicum & Red Paprika",
      image:
        "https://www.dominos.co.in/files/items/Digital_Veggie_Paradise_olo_266x265.jpg",
      price: 220,
      veg: true,
    },
    {
      id: "6",
      name: "CHICKEN SAUSAGE",
      description: "Chicken Sausage ,Cheese",
      image: "https://www.dominos.co.in/files/items/Chicken_Sausage.jpg",
      price: 250,
      veg: false,
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, key) => {
          <View style={{ margin: 10 }} key={key}>
            <Image
              style={{ width: 220, height: 130 }}
              source={{ uri: item.image }}
            />
          </View>;
        })}
      </ScrollView>

      <MenuComponent />

      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 120, borderRadius: 7 }}
          source={{
            uri: "https://www.dominos.co.in/files/items/Dominator.jpg",
          }}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 120, borderRadius: 7 }}
          source={{
            uri: "https://www.dominos.co.in/files/items/Dominator.jpg",
          }}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 120, borderRadius: 7 }}
          source={{
            uri: "https://www.dominos.co.in/files/items/Dominator.jpg",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
