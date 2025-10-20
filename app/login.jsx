import React, { useState } from "react";
import { Link } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!mobile || !password) {
      alert("Please enter both mobile number and password!");
      return;
    }
    if (mobile.length < 10) {
      alert("Please enter a valid 10-digit mobile number!");
      return;
    }
    alert(`Welcome back, ${mobile}! 🍕`);
    // Add API call or navigation here
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      }}
      style={styles.background}
      blurRadius={2}
    >
      <View style={styles.overlay}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
          }}
          style={styles.logo}
        />

        <Text style={styles.title}>Foodie Express</Text>
        <Text style={styles.subtitle}>
          Delivering happiness to your doorstep 🍱
        </Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#ccc"
            value={mobile}
            onChangeText={(text) => {
              // Allow only numbers
              const numeric = text.replace(/[^0-9]/g, "");
              setMobile(numeric);
            }}
            keyboardType="numeric"
            maxLength={10}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>
            Don’t have an account?{" "}
            <Link href="/signup" style={styles.link}>
              Sign Up
            </Link>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#f1f1f1",
    marginBottom: 30,
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 15,
    padding: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#ff914d",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  footer: {
    marginTop: 15,
    textAlign: "center",
    color: "#eee",
  },
  link: {
    color: "#ff914d",
    fontWeight: "600",
  },
});
