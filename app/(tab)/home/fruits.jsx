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

const Fruits = () => {
  const fruitItems = [
    { id: "1", name: "Apple", image: "https://cdn-icons-png.flaticon.com/512/415/415733.png", quantity: "1 kg", price: "₹150" },
    { id: "2", name: "Banana", image: "https://cdn-icons-png.flaticon.com/512/415/415733.png", quantity: "1 dozen", price: "₹60" },
    { id: "3", name: "Orange", image: "https://cdn-icons-png.flaticon.com/512/415/415733.png", quantity: "1 kg", price: "₹120" },
    { id: "4", name: "Mango", image: "https://cdn-icons-png.flaticon.com/512/415/415733.png", quantity: "1 kg", price: "₹200" },
    { id: "5", name: "Pineapple", image: "https://cdn-icons-png.flaticon.com/512/415/415733.png", quantity: "1 pc", price: "₹100" },
    { id: "6", name: "Grapes", image: "https://cdn-icons-png.flaticon.com/512/415/415733.png", quantity: "500 gm", price: "₹90" },
    { id: "7", name: "Papaya", image: "https://cdn-icons-png.flaticon.com/512/415/415733.png", quantity: "1 pc", price: "₹80" },
    { id: "8", name: "Strawberry", image: "https://cdn-icons-png.flaticon.com/512/415/415733.png", quantity: "250 gm", price: "₹120" },
    { id: "9", name: "Kiwi", image: "https://cdn-icons-png.flaticon.com/512/415/415733.png", quantity: "500 gm", price: "₹150" },
    { id: "10", name: "Watermelon", image: "https://cdn-icons-png.flaticon.com/512/415/415733.png", quantity: "1 pc", price: "₹180" },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <SearchBox />

        <View style={styles.grid}>
          {fruitItems.map((item) => (
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

export default Fruits;

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
