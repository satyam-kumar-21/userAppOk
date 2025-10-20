import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      {/* App Name */}
      <Text style={styles.title}>Foodie Express</Text>

      {/* Cart Icon */}
      <TouchableOpacity style={styles.cartButton}>
        <Ionicons name="cart-outline" size={28} color="#ff914d" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    // paddingVertical: 25,
    paddingTop:25,
    paddingBottom:10,
    backgroundColor: "#fff7ed",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3, // shadow for Android
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4, // shadow for iOS
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ff914d",
  },
  cartButton: {
    padding: 5,
  },
});
