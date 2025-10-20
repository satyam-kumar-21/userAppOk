import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Tab layout as the first screen */}
      <Stack.Screen name="tab" />
    </Stack>
  );
}
