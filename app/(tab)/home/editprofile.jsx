import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Animated, Easing } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import { updateUser } from "../../../redux/slices/userSlice"; // import the update action

const EditProfile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (user) {
      setName(user.name);
      setMobile(user.mobile);
    }
  }, [user]);

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
    }, 1500);
  };

  const handleSave = () => {
    if (!name || !mobile) {
      Alert.alert("Error", "Name and mobile cannot be empty!");
      return;
    }
    if (mobile.length < 10) {
      Alert.alert("Error", "Please enter a valid 10-digit mobile number!");
      return;
    }

    // Dispatch Redux update action
    dispatch(updateUser({ name, mobile }))
      .then((res) => {
        if (res.payload && res.payload._id) {
          showSuccess("Profile updated successfully!");
          setTimeout(() => router.push("/profile"), 1600);
        } else {
          Alert.alert("Error", "Failed to update profile!");
        }
      })
      .catch(() => {
        Alert.alert("Error", "Failed to update profile!");
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Change Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Change Number</Text>
        <TextInput
          style={styles.input}
          value={mobile}
          onChangeText={(text) => setMobile(text.replace(/[^0-9]/g, ""))}
          keyboardType="numeric"
          maxLength={10}
        />
      </View>

      <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => router.push("/profile")}>
        <Text style={styles.buttonText}>Back to Profile</Text>
      </TouchableOpacity>

      {successMsg ? (
        <Animated.View style={[styles.successOverlay, { opacity: fadeAnim }]}>
          <Text style={styles.successText}>{successMsg}</Text>
        </Animated.View>
      ) : null}
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff7ed",
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    color: "#333",
  },
  inputGroup: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    width: "80%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: "#4BB543",
  },
  backButton: {
    backgroundColor: "#ff914d",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  successOverlay: {
    position: "absolute",
    top: 50,
    backgroundColor: "#4BB543",
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
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});
