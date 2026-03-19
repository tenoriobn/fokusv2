import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/FokusButton";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} />
      <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua {"\n"}produtividade,{"\n"}
          <Text style={styles.bold}>mergulhe no que{"\n"} importa</Text>
        </Text>
        <Image
          style={styles.homeImg}
          source={require("../assets/images/home.png")}
        />
        <FokusButton
          title="Quero iniciar!"
          onPress={() => console.log("navegar")}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  inner: {
    gap: 16,
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "200",
    fontSize: 26,
  },
  bold: {
    fontWeight: "500",
  },
  homeImg: {
    maxWidth: 318,
    maxHeight: 266,
    resizeMode: "contain",
  },
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  },
});
