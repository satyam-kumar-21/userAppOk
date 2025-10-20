import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !mobile || !password || !confirmPassword) {
      alert("Please fill all fields!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (mobile.length < 10) {
      alert("Please enter a valid 10-digit mobile number!");
      return;
    }

    alert(`Welcome aboard, ${name}! 🍕`);
    // Add your API call or navigation here
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      }}
      style={styles.background}
      blurRadius={2}
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
          }}
          style={styles.logo}
        />

        <Text style={styles.title}>Join Foodie Express</Text>
        <Text style={styles.subtitle}>Get your favorite meals delivered fast 🍔</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#aaa"
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
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#aaa"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>
            Already have an account?{" "}
            <Link href="/login" style={styles.link}>
              Login
            </Link>
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flexGrow: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
  },
  subtitle: {
    fontSize: 15,
    color: "#f1f1f1",
    marginBottom: 25,
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
