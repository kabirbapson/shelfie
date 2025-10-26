import { Pressable, StyleSheet, Text } from "react-native";

const ThemedButton = ({ style, children, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    >
      <Text>{children}</Text>
    </Pressable>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  btn: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "lightblue",
    borderRadius: 5,
  },
});
