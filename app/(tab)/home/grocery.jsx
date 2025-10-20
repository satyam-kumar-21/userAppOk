import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Header from "../../../components/home/header";
import SearchBox from "../../../components/home/searchBox";

const { width } = Dimensions.get("window");
const cardWidth = 140;

const Grocery = () => {
  const sections = [
    {
      title: "Pooja Saman",
      data: [
        { id: "1", name: "Incense Sticks", image: "https://cdn-icons-png.flaticon.com/512/2907/2907275.png", quantity: "1 pack", price: "₹50", discount: "10%" },
        { id: "2", name: "Camphor", image: "https://cdn-icons-png.flaticon.com/512/2907/2907276.png", quantity: "50 gm", price: "₹40" },
        { id: "3", name: "Dhoop Cones", image: "https://cdn-icons-png.flaticon.com/512/2907/2907277.png", quantity: "1 pack", price: "₹60" },
      ],
    },
    {
      title: "Rashan Saman",
      data: [
        { id: "4", name: "Rice", image: "https://cdn-icons-png.flaticon.com/512/415/415734.png", quantity: "1 kg", price: "₹60", discount: "20%" },
        { id: "5", name: "Wheat Flour", image: "https://cdn-icons-png.flaticon.com/512/415/415731.png", quantity: "1 kg", price: "₹50" },
        { id: "6", name: "Sugar", image: "https://cdn-icons-png.flaticon.com/512/415/415729.png", quantity: "1 kg", price: "₹45" },
        { id: "7", name: "Salt", image: "https://cdn-icons-png.flaticon.com/512/415/415730.png", quantity: "500 gm", price: "₹25" },
      ],
    },
    {
      title: "Snacks & Namkeen",
      data: [
        { id: "8", name: "Chips", image: "https://cdn-icons-png.flaticon.com/512/1046/1046793.png", quantity: "1 pack", price: "₹30" },
        { id: "9", name: "Nuts", image: "https://cdn-icons-png.flaticon.com/512/1046/1046789.png", quantity: "200 gm", price: "₹120", discount: "15%" },
        { id: "10", name: "Cookies", image: "https://cdn-icons-png.flaticon.com/512/1046/1046791.png", quantity: "1 pack", price: "₹50" },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <SearchBox />

        {sections.map((section, idx) => (
          <View key={idx} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10 }}
            >
              {section.data.map((item) => (
                <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.8}>
                  {item.discount && (
                    <View style={styles.discountBadge}>
                      <Text style={styles.discountText}>{item.discount} OFF</Text>
                    </View>
                  )}
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                  <TouchableOpacity style={styles.cartButton}>
                    <Text style={styles.cartText}>Add</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Grocery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7ed",
  },
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ff914d",
    marginLeft: 10,
    marginBottom: 10,
  },
  card: {
    width: cardWidth,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginRight: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
    position: "relative",
  },
  discountBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#ff914d",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    zIndex: 10,
  },
  discountText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 12,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  quantity: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ff914d",
    marginBottom: 5,
  },
  cartButton: {
    backgroundColor: "#ff914d",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 8,
  },
  cartText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
