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

const Agriculture = () => {
  const sections = [
    {
      title: "Fertilizers",
      data: [
        { id: "1", name: "Urea", image: "https://cdn-icons-png.flaticon.com/512/2907/2907245.png", price: "₹500/50kg", discount: "10%" },
        { id: "2", name: "DAP", image: "https://cdn-icons-png.flaticon.com/512/2907/2907247.png", price: "₹700/50kg", discount: "15%" },
        { id: "3", name: "NPK", image: "https://cdn-icons-png.flaticon.com/512/2907/2907243.png", price: "₹650/50kg", discount: "12%" },
      ],
    },
    {
      title: "Seeds",
      data: [
        { id: "4", name: "Wheat Seeds", image: "https://cdn-icons-png.flaticon.com/512/2910/2910940.png", price: "₹120/kg", discount: "5%" },
        { id: "5", name: "Rice Seeds", image: "https://cdn-icons-png.flaticon.com/512/2910/2910938.png", price: "₹100/kg", discount: "10%" },
        { id: "6", name: "Corn Seeds", image: "https://cdn-icons-png.flaticon.com/512/2910/2910942.png", price: "₹80/kg", discount: "8%" },
      ],
    },
    {
      title: "Pesticides",
      data: [
        { id: "7", name: "Neem Oil", image: "https://cdn-icons-png.flaticon.com/512/2907/2907265.png", price: "₹200/litre", discount: "10%" },
        { id: "8", name: "Insecticide", image: "https://cdn-icons-png.flaticon.com/512/2907/2907267.png", price: "₹350/litre", discount: "12%" },
        { id: "9", name: "Fungicide", image: "https://cdn-icons-png.flaticon.com/512/2907/2907263.png", price: "₹300/litre", discount: "15%" },
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

export default Agriculture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f4e6",
  },
  section: {
    marginTop: 20,
    paddingLeft: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2e7d32",
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
    color: "#2e7d32",
    marginBottom: 5,
  },
  cartButton: {
    backgroundColor: "#2e7d32",
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
