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
  ScrollView,
  ActivityIndicator,
  Animated,
  Easing,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/slices/userSlice";

const Signup = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state) => state.user);

  const showSuccess = (message) => {
    setSuccessMsg(message);
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
      }).start(() => setSuccessMsg(""));
    }, 1500); // message stays for 1.5s
  };

  const handleSignup = async () => {
    if (!name || !mobile || !password || !confirmPassword) {
      alert("Please fill all fields!");
      return;
    }

    if (mobile.length < 10) {
      alert("Please enter a valid 10-digit mobile number!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const resultAction = await dispatch(signup({ name, mobile, password }));

      if (signup.fulfilled.match(resultAction)) {
        // Show animated success message
        showSuccess(`Registered Successfully! Welcome ${name} 🎉`);

        setName("");
        setMobile("");
        setPassword("");
        setConfirmPassword("");

        // Redirect after 1.5s
        setTimeout(() => router.push("/login"), 1500);
      } else {
        if (resultAction.payload && resultAction.payload.message) {
          alert("Failed: " + resultAction.payload.message);
        } else if (resultAction.error && resultAction.error.message) {
          alert("Failed: " + resultAction.error.message);
        } else {
          alert("Signup failed");
        }
      }
    } catch (err) {
      alert("Signup failed: " + err.message);
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
            placeholder="Mobile Number"
            placeholderTextColor="#aaa"
            value={mobile}
            onChangeText={(text) => setMobile(text.replace(/[^0-9]/g, ""))}
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

          <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Sign Up</Text>
            )}
          </TouchableOpacity>

          {error && <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>}

          <Text style={styles.footer}>
            Already have an account?{" "}
            <Link href="/login" style={styles.link}>
              Login
            </Link>
          </Text>
        </View>

        {/* Animated success message */}
        {successMsg ? (
          <Animated.View style={[styles.successOverlay, { opacity: fadeAnim }]}>
            <Text style={styles.successText}>{successMsg}</Text>
          </Animated.View>
        ) : null}
      </ScrollView>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover" },
  overlay: {
    flexGrow: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
  logo: { width: 90, height: 90, marginBottom: 10 },
  title: { fontSize: 28, fontWeight: "800", color: "#fff" },
  subtitle: { fontSize: 15, color: "#f1f1f1", marginBottom: 25, textAlign: "center" },
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
  successOverlay: {
    position: "absolute",
    top: 50,
    backgroundColor: "#4BB543", // green
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  successText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});
