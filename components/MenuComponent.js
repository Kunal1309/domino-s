import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MenuComponent = () => {
    const navigation = useNavigation();
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>Explore Menu</Text>
      <Pressable
        style={{
          backgroundColor: "#006491",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding:20,
          marginTop:14,
          borderRadius:10,
        }}
      >
        <Pressable onPress={()=>navigation.navigate("Pizza")}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://www.dominos.co.in/files/items/Dominator.jpg",
            }}
          />
          <Text style={{textAlign:"center", fontSize:17, color:"white", marginTop:10,}}>CHICKEN PIZZA</Text>
        </Pressable>

        <Pressable>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg",
            }}
          />
          <Text style={{textAlign:"center", fontSize:17, color:"white", marginTop:10,}}>INDI CHICKEN TIKKA</Text>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate("PizzaMania")}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://www.dominos.co.in/files/items/IndianChickenTikka.jpg",
            }}
          />
          <Text  style={{textAlign:"center", fontSize:17, color:"white", marginTop:10,}}>PEPPER BARBECUE CHICKEN</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default MenuComponent;

const styles = StyleSheet.create({});
