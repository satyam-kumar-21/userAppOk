import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for your favorite food..."
        placeholderTextColor="#888"
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 20,
    marginTop: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
