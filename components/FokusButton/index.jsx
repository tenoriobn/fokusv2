import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ title, onPress, icon }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon}
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 8,
  },
  buttonText: {
    color: "#021123",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
