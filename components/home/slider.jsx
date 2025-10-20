import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const Slider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      title: "Fresh Fruits",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
      title: "Vegetables",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      title: "Snacks & Sweets",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=800&q=80",
      title: "Grocery Essentials",
    },
  ];

  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= slides.length) nextIndex = 0;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { opacity: currentIndex === index ? 1 : 0.3 },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  card: {
    width: width * 0.9,
    height: 180,
    marginHorizontal: width * 0.05 / 2,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    position: "absolute",
    bottom: 15,
    left: 15,
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ff914d",
    marginHorizontal: 5,
  },
});
