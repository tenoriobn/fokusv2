import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View>
      <Text>Home</Text>
      <Link href={{ pathname: "/pomodoro" }}>Quero iniciar!</Link>
    </View>
  );
}
