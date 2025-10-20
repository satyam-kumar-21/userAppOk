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
const cardWidth = (width - 60) / 2; // 20 padding left + 20 right + 20 between cards

const Vegetables = () => {
  const vegItems = [
    { id: "1", name: "Tomato", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", quantity: "1 kg", price: "₹40" },
    { id: "2", name: "Potato", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", quantity: "1 kg", price: "₹30" },
    { id: "3", name: "Onion", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", quantity: "1 kg", price: "₹50" },
    { id: "4", name: "Carrot", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", quantity: "500 gm", price: "₹35" },
    { id: "5", name: "Cabbage", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", quantity: "1 pc", price: "₹25" },
    { id: "6", name: "Capsicum", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", quantity: "500 gm", price: "₹60" },
    { id: "7", name: "Spinach", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", quantity: "250 gm", price: "₹20" },
    { id: "8", name: "Green Beans", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", quantity: "500 gm", price: "₹50" },
    { id: "9", name: "Cauliflower", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", quantity: "1 pc", price: "₹45" },
    { id: "10", name: "Beetroot", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", quantity: "500 gm", price: "₹40" },
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
          {vegItems.map((item) => (
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

export default Vegetables;

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
