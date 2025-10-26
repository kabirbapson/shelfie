import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Slot, Stack, Tabs } from "expo-router";
// import { Colors } from "../constants/Colors";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  //   const colorScheme = useColorScheme();
  //   console.log(colorScheme);
  //   const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <>
      <StatusBar value="auto" />
      {/* screenOptions={{
           headerStyle: { backgroundColor: theme.background },
           headerTintColor: theme.text,
         }} */}
      <Stack>
        <Tabs />
        <Stack.Screen name="{auth}" options={{}} />
        <Stack.Screen name="index" options={{ title: "Home Page" }} />
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="register" options={{ title: "Register" }} />
        <Slot />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
