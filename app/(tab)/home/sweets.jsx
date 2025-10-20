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
const cardWidth = 130;

const Sweets = () => {
  const sections = [
    {
      title: "Indian Sweets",
      data: [
        { id: "1", name: "Gulab Jamun", image: "https://cdn-icons-png.flaticon.com/512/135/135620.png", price: "₹150/kg", discount: "20%" },
        { id: "2", name: "Rasgulla", image: "https://cdn-icons-png.flaticon.com/512/135/135622.png", price: "₹120/kg", discount: "15%" },
        { id: "3", name: "Kaju Katli", image: "https://cdn-icons-png.flaticon.com/512/3075/3075975.png", price: "₹250/100g", discount: "10%" },
        { id: "4", name: "Ladoo", image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", price: "₹100/500g", discount: "25%" },
      ],
    },
    {
      title: "Chocolate Sweets",
      data: [
        { id: "5", name: "Ferrero Rocher", image: "https://cdn-icons-png.flaticon.com/512/135/135620.png", price: "₹500/box", discount: "30%" },
        { id: "6", name: "KitKat", image: "https://cdn-icons-png.flaticon.com/512/135/135622.png", price: "₹50/pack", discount: "10%" },
        { id: "7", name: "Perk", image: "https://cdn-icons-png.flaticon.com/512/3075/3075975.png", price: "₹20/pc", discount: "5%" },
      ],
    },
    {
      title: "Bakery Sweets",
      data: [
        { id: "8", name: "Cupcake", image: "https://cdn-icons-png.flaticon.com/512/135/135622.png", price: "₹60/pc", discount: "15%" },
        { id: "9", name: "Brownie", image: "https://cdn-icons-png.flaticon.com/512/135/135620.png", price: "₹70/pc", discount: "20%" },
        { id: "10", name: "Doughnut", image: "https://cdn-icons-png.flaticon.com/512/3075/3075975.png", price: "₹40/pc", discount: "10%" },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <SearchBox />

        {sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {section.data.map((item) => (
                <View key={item.id} style={styles.card}>
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>{item.discount} OFF</Text>
                  </View>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                  <TouchableOpacity style={styles.cartButton}>
                    <Text style={styles.cartText}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Sweets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7ed",
  },
  section: {
    marginTop: 20,
    paddingLeft: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 10,
  },
  card: {
    width: cardWidth,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginRight: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  discountBadge: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "#ff4d4d",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    zIndex: 1,
  },
  discountText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ff914d",
    marginBottom: 5,
  },
  cartButton: {
    backgroundColor: "#ff914d",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  cartText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
    textAlign: "center",
  },
});
