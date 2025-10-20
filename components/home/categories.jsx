import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Categories = () => {
  const data = [
    { name: "Food", icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", route: "/(tab)/home/food" },
    { name: "Vegetables", icon: "https://cdn-icons-png.flaticon.com/512/135/135620.png", route: "/(tab)/home/vegetables" },
    { name: "Fruits", icon: "https://cdn-icons-png.flaticon.com/512/135/135622.png", route: "/(tab)/home/fruits" },
    { name: "Grocery", icon: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png", route: "/(tab)/home/grocery" },
    { name: "Sweets", icon: "https://cdn-icons-png.flaticon.com/512/3075/3075975.png", route: "/(tab)/home/sweets" },
    { name: "Agriculture", icon: "https://img.favpng.com/12/14/7/happy-farmer-farmer-smiling-with-wheat-harvest-illustration-WY2p6gD0_t.jpg", route: "/(tab)/home/agriculture" },
  ];

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <Link key={index} href={item.route} asChild>
          <TouchableOpacity style={styles.card} activeOpacity={0.7}>
            <Image source={{ uri: item.icon }} style={styles.icon} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingHorizontal: 10, marginTop: 10 },
  card: { width: "30%", alignItems: "center", marginBottom: 20, backgroundColor: "#fff", paddingVertical: 15, borderRadius: 12, elevation: 3, shadowColor: "#000", shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4 },
  icon: { width: 40, height: 40, marginBottom: 8 },
  text: { fontSize: 14, fontWeight: "600", color: "#333", textAlign: "center" },
});
