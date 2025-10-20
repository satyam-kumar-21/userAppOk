import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Header from "../../../components/home/header";
import SearchBox from "../../../components/home/searchBox";

const { width } = Dimensions.get("window");
const cardWidth = (width - 60) / 2; // padding + spacing

const Food = () => {
  const foodItems = [
    { id: "1", name: "Pizza", image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", quantity: "1 pc", price: "₹250" },
    { id: "2", name: "Burger", image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png", quantity: "1 pc", price: "₹120" },
    { id: "3", name: "Sandwich", image: "https://cdn-icons-png.flaticon.com/512/1046/1046790.png", quantity: "1 pc", price: "₹100" },
    { id: "4", name: "French Fries", image: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png", quantity: "1 pack", price: "₹80" },
    { id: "5", name: "Pasta", image: "https://cdn-icons-png.flaticon.com/512/1046/1046788.png", quantity: "1 plate", price: "₹150" },
    { id: "6", name: "Hot Dog", image: "https://cdn-icons-png.flaticon.com/512/1046/1046785.png", quantity: "1 pc", price: "₹90" },
    { id: "7", name: "Taco", image: "https://cdn-icons-png.flaticon.com/512/1046/1046787.png", quantity: "1 pc", price: "₹110" },
    { id: "8", name: "Nuggets", image: "https://cdn-icons-png.flaticon.com/512/1046/1046791.png", quantity: "6 pcs", price: "₹140" },
    { id: "9", name: "Wrap", image: "https://cdn-icons-png.flaticon.com/512/1046/1046789.png", quantity: "1 pc", price: "₹130" },
    { id: "10", name: "Samosa", image: "https://cdn-icons-png.flaticon.com/512/1046/1046792.png", quantity: "2 pcs", price: "₹50" },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Box */}
        <SearchBox />

        {/* Food Grid */}
        <View style={styles.grid}>
          {foodItems.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity style={styles.cartButton}>
                <Text style={styles.cartText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7ed",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  card: {
    width: cardWidth,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  quantity: {
    fontSize: 14,
    color: "#555",
    marginVertical: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ff914d",
    marginBottom: 5,
  },
  cartButton: {
    backgroundColor: "#ff914d",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  cartText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
