// app/login.jsx
import { Link, useRouter } from "expo-router";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  ActivityIndicator,
  Animated,
  Easing,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../redux/slices/userSlice";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [welcomeMsg, setWelcomeMsg] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state) => state.user);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const showWelcome = (message) => {
    setWelcomeMsg(message);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.in(Easing.ease),
      }).start(() => setWelcomeMsg(""));
    }, 1500); // message stays for 1.5s
  };

  const handleLogin = async () => {
  if (!mobile || !password) {
    alert("Please enter both mobile number and password!");
    return;
  }
  if (mobile.length < 10) {
    alert("Please enter a valid 10-digit mobile number!");
    return;
  }

  try {
    const resultAction = await dispatch(signin({ mobile, password }));

    // Check if login fulfilled
    if (signin.fulfilled.match(resultAction)) {
      const payload = resultAction.payload;
      // payload contains _id, name, mobile, token
      if (payload && payload._id && payload.token) {
        const name = payload.name ? payload.name : "User";
        showWelcome(`Welcome back, ${name}! 🎉`);
        setMobile("");
        setPassword("");
        setTimeout(() => router.push("/home"), 1500);
        
      } else {
        alert("Login succeeded but user data is missing!");
      }
    } else {
      if (resultAction.payload && resultAction.payload.message) {
        alert(resultAction.payload.message);
      } else if (resultAction.error && resultAction.error.message) {
        alert(resultAction.error.message);
      } else {
        alert("Login failed");
      }
    }
  } catch (err) {
    console.log("Login error:", err);
    alert("Something went wrong. Please try again!");
  }
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
            onChangeText={(text) => setMobile(text.replace(/[^0-9]/g, ""))}
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

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>

          {error && <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>}

          <Text style={styles.footer}>
            Don’t have an account?{" "}
            <Link href="/signup" style={styles.link}>
              Sign Up
            </Link>
          </Text>
        </View>

        {/* Animated welcome message */}
        {welcomeMsg ? (
          <Animated.View style={[styles.welcomeOverlay, { opacity: fadeAnim }]}>
            <Text style={styles.welcomeText}>{welcomeMsg}</Text>
          </Animated.View>
        ) : null}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover", justifyContent: "center" },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  logo: { width: 90, height: 90, marginBottom: 10 },
  title: { fontSize: 30, fontWeight: "800", color: "#fff" },
  subtitle: { fontSize: 16, color: "#f1f1f1", marginBottom: 30, textAlign: "center" },
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
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  footer: { marginTop: 15, textAlign: "center", color: "#eee" },
  link: { color: "#ff914d", fontWeight: "600" },
  welcomeOverlay: {
    position: "absolute",
    top: 50,
    backgroundColor: "#4BB543", // attractive green
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});
