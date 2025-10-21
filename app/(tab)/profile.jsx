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
      <Text style={styles.warningTitle}>Oops!</Text>
      <Text style={styles.warningText}>
        You are not logged in. Please login to access your profile.
      </Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.loginButtonText}>Go to Login</Text>
      </TouchableOpacity>
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
  warningTitle: {
  fontSize: 32,
  fontWeight: "700",
  color: "#ff5c5c",
  marginBottom: 10,
},
warningText: {
  fontSize: 16,
  color: "#555",
  textAlign: "center",
  marginBottom: 20,
  paddingHorizontal: 20,
},
loginButton: {
  backgroundColor: "#ff914d",
  paddingVertical: 14,
  paddingHorizontal: 30,
  borderRadius: 12,
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 3,
},
loginButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "700",
  textAlign: "center",
},

});

