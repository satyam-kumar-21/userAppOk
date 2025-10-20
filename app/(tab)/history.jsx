import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const History = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Order History</Text>
      <Text style={styles.subtitle}>
        You haven’t placed any orders yet 🍱  
        <Text style={{ color: "#ff914d", fontWeight: "bold" }}>
          Start ordering now!
        </Text>
      </Text>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },
});
