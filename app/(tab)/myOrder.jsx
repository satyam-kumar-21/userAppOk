import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

const MyOrder = () => {
  const orders = [
    {
      id: 1,
      food: "Pepperoni Pizza",
      status: "Delivered",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      food: "Cheeseburger",
      status: "On the way",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1605475049556-4f9fa31e5f83?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      food: "Sushi Combo",
      status: "Preparing",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1562158074-6221f6b0f347?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return { backgroundColor: "#d4edda", color: "#28a745" };
      case "On the way":
        return { backgroundColor: "#fff3cd", color: "#856404" };
      default:
        return { backgroundColor: "#d1ecf1", color: "#0c5460" };
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      {orders.map((order) => {
        const statusStyle = getStatusStyle(order.status);
        return (
          <View key={order.id} style={styles.card}>
            <Image source={{ uri: order.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.food}>{order.food}</Text>
              <Text style={styles.price}>{order.price}</Text>
              <View style={[styles.statusBadge, { backgroundColor: statusStyle.backgroundColor }]}>
                <Text style={[styles.statusText, { color: statusStyle.color }]}>{order.status}</Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 15,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 120,
    height: 120,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  food: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ff914d",
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginVertical: 5,
  },
  statusText: {
    fontWeight: "700",
    fontSize: 12,
  },
  button: {
    backgroundColor: "#ff914d",
    paddingVertical: 6,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 5,
    alignSelf: "flex-start",
    paddingHorizontal: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
