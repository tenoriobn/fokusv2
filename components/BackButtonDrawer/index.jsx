import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export const BackButtoonDrawer = ({ backHref }) => {
  return (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#FFF"
      style={{ marginLeft: 16 }}
      onPress={() => router.navigate(backHref)}
    />
  );
};
