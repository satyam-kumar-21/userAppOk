import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Foodie Express 🍕</Text>
            <Text style={styles.subtitle}>
                Fast, hot & delicious food at your doorstep!
            </Text>

            {/* Direct Home Button */}
            <Link href="/(tab)/home" asChild>
                <TouchableOpacity style={styles.homeButton} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>Continue as Gues</Text>
                </TouchableOpacity>
            </Link>

            {/* Login Button */}
            <Link href="/login" asChild>
                <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff7ed",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: "#ff914d",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: "#555",
        marginVertical: 15,
        textAlign: "center",
    },
    homeButton: {
        backgroundColor: "#ff914d",
        paddingVertical: 16,      // enough space top & bottom
        paddingHorizontal: 30,
        borderRadius: 12,
        marginTop: 20,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 6,
        minWidth: 200,
        alignItems: "center",
        justifyContent: "center", // CENTER text vertically
    },
    loginButton: {
        backgroundColor: "#ffa94d",
        paddingVertical: 16,
        paddingHorizontal: 30,
        borderRadius: 12,
        marginTop: 15,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 6,
        minWidth: 200,
        alignItems: "center",
        justifyContent: "center", // CENTER text vertically
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "800",
        textAlign: "center",
        lineHeight: 24,           // ensure proper vertical spacing
    },

});
