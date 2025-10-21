import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  Modal,
} from "react-native";
import * as Location from "expo-location";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";

const CurrentLocation = () => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [coords, setCoords] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handlePress = async () => {
    if (!user) {
      setShowLoginModal(true); // show custom modal
      return;
    }

    setLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setAddress("Permission Denied");
        setLoading(false);
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = loc.coords;
      setCoords({ latitude, longitude });

      let geo = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (geo && geo.length > 0) {
        const place = geo[0];
        const areaName = place.name || "";
        const city = place.city || "";
        const region = place.region || "";
        setAddress(`${areaName} ${city}, ${region}`);
      } else {
        setAddress(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
      }
    } catch (error) {
      console.log(error);
      setAddress("Location unavailable");
    } finally {
      setLoading(false);
    }
  };

  const openMap = () => {
    if (!coords) return;
    const url = `https://www.google.com/maps/search/?api=1&query=${coords.latitude},${coords.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={address ? openMap : handlePress}
        activeOpacity={0.7}
      >
        <Entypo name="location-pin" size={20} color="#ff914d" />
        {loading ? (
          <ActivityIndicator size="small" color="#ff914d" style={{ marginLeft: 5 }} />
        ) : (
          <Text style={styles.text}>
            <Text style={styles.label}>Current Location: </Text>
            {address ? address : "Click here to fetch"}
          </Text>
        )}
      </TouchableOpacity>

      {/* Custom Login Modal */}
      <Modal
        visible={showLoginModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowLoginModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Oops! You are not logged in</Text>
            <Text style={styles.modalMessage}>Please login to fetch your location.</Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.loginButton]}
                onPress={() => {
                  setShowLoginModal(false);
                  router.push("/login");
                }}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.homeButton]}
                onPress={() => {
                  setShowLoginModal(false);
                  router.push("/home");
                }}
              >
                <Text style={styles.buttonText}>Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CurrentLocation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffe6cc",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 25,
  },
  text: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "600",
    color: "#ff914d",
    flexShrink: 1,
  },
  label: {
    fontWeight: "700",
    color: "#d46a00",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: "#ff914d",
    textAlign: "center",
  },
  modalMessage: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  loginButton: {
    backgroundColor: "#4BB543",
  },
  homeButton: {
    backgroundColor: "#ff914d",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
