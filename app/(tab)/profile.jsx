import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import { Link, useRouter } from "expo-router";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>No user logged in</Text>
      </View>
    );
  }

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png" }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.mobile}>{user.mobile}</Text>

      <TouchableOpacity
        style={[styles.button, styles.editButton]}
        onPress={() => router.push("/(tab)/home/editprofile")}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>





    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff7ed", justifyContent: "center", alignItems: "center", padding: 20 },
  profileImage: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  name: { fontSize: 24, fontWeight: "700", color: "#333" },
  email: { fontSize: 16, color: "#555", marginTop: 5 },
  mobile: { fontSize: 16, color: "#555", marginBottom: 20 },
  button: { width: "80%", paddingVertical: 12, borderRadius: 10, alignItems: "center", marginTop: 10, justifyContent: "center" },
  editButton: { backgroundColor: "#4BB543" }, // Green color for Edit Profile
  logoutButton: { backgroundColor: "#ff5c5c" }, // Red for logout
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});

