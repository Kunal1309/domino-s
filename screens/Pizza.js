import { StyleSheet, Text, View, SafeAreaView, FlatList, Pressable } from "react-native";
import React, { useContext } from "react";
import PizzaComponent from "../components/PizzaComponent";
import { Ionicons } from "@expo/vector-icons";
import pizzaMania from "../data/pizzaMania";
import { useNavigation } from "@react-navigation/native";

const Pizza = () => {
  const data = pizzaMania;
  const navigation = useNavigation();
  const { cart, setCart } = useContext(CartItems);
  const total = cart
    .map((item) => Number(item.price * item.quantity))
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <SafeAreaView>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={24}
        color="black"
      />
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <PizzaComponent pizza={item} />}
      />
      {total === 0 ? null : (
        <Pressable
        onPress={() => navigation.navigate("Cart")}
          style={{
            backgroundColor: "green",
            padding: 10,
            position: "absolute",
            bottom: 100,
            left: 150,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
              
            }}
          >
            Go to Cart
          </Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default Pizza;

const styles = StyleSheet.create({});
