import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
        }}
        style={styles.profileImage}
      />

      {/* User Info */}
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@example.com</Text>
      <Text style={styles.mobile}>+91 9876543210</Text>

      {/* Action Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7ed",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  mobile: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  button: {
    width: "80%",
    backgroundColor: "#ff914d",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: "#ff5c5c",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
