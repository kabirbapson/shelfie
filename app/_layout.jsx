import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.background },
          headerTintColor: theme.text,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home Page" }} />
        <Stack.Screen name="about" options={{ title: "About Page" }} />
        <Stack.Screen name="contact" options={{ title: "Contact Page" }} />
        <Slot />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
