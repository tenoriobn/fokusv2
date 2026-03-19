import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ title, onPress, icon, outline }) => {
  return (
    <Pressable
      style={[styles.button, outline && styles.outlineButton]}
      onPress={onPress}
    >
      {icon}
      <Text style={[styles.buttonText, outline && styles.outlineButtonText]}>
        {title}
      </Text>
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
  outlineButton: {
    backgroundColor: "transparent",
    borderColor: "#B872FF",
    borderWidth: 2,
  },
  buttonText: {
    color: "#021123",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  outlineButtonText: {
    color: "#B872FF",
  },
});
