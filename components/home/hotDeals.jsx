import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const HotDeals = () => {
  const products = [
    {
      id: "1",
      name: "Organic Apples",
      price: "₹120/kg",
      discount: "40% OFF",
      image: "https://cdn-icons-png.flaticon.com/512/135/135622.png",
      route: "/category/fruits",
    },
    {
      id: "2",
      name: "Fresh Carrots",
      price: "₹80/kg",
      discount: "30% OFF",
      image: "https://cdn-icons-png.flaticon.com/512/135/135620.png",
      route: "/category/vegetables",
    },
    {
      id: "3",
      name: "Bread Loaf",
      price: "₹40",
      discount: "50% OFF",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
      route: "/category/food",
    },
    {
      id: "4",
      name: "Chocolate",
      price: "₹150",
      discount: "20% OFF",
      image: "https://cdn-icons-png.flaticon.com/512/3075/3075975.png",
      route: "/category/sweets",
    },
  ];

  const renderItem = ({ item }) => (
    <Link href={item.route} asChild>
      <TouchableOpacity style={styles.card} activeOpacity={0.8}>
        <Image source={{ uri: item.image }} style={styles.image} />
        
        {/* Discount Badge */}
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{item.discount}</Text>
        </View>

        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 Hot Deals</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HotDeals;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ff914d",
    marginLeft: 20,
    marginBottom: 10,
  },
  card: {
    width: 140,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
    borderRadius: 8,
  },
  discountBadge: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "#ff4d4d",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
  },
  discountText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ff914d",
  },
});
