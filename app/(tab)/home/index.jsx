import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../../../components/home/header";
import SearchBox from "../../../components/home/searchBox";
import Categories from "../../../components/home/categories";
import Slider from "../../../components/home/slider";
import HotDeals from "../../../components/home/hotDeals";
import DealOfTheDay from "../../../components/home/dealsOfTheDay";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <Header />

      {/* Scrollable content below header */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <SearchBox />
        <Categories />
        <Slider />
        <HotDeals />
        <DealOfTheDay />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7ed",
  },
  scrollContent: {
    paddingTop: 6, // give enough top padding to avoid content overlapping header
    paddingBottom: 20,
  },
});
