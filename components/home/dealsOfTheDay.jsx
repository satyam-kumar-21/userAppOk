import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const DealOfTheDay = () => {
  const deal = {
    name: "Fresh Mangoes",
    price: "₹200/kg",
    discount: "50% OFF",
    image: "https://cdn-icons-png.flaticon.com/512/135/135622.png",
    route: "/category/fruits",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌟 Deal of the Day</Text>

      <Link href={deal.route} asChild>
        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
          <Image source={{ uri: deal.image }} style={styles.image} />

          {/* Discount Badge */}
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{deal.discount}</Text>
          </View>

          <Text style={styles.name}>{deal.name}</Text>
          <Text style={styles.price}>{deal.price}</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default DealOfTheDay;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ff914d",
    marginBottom: 10,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
  },
  discountBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#ff4d4d",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  discountText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ff914d",
  },
});
