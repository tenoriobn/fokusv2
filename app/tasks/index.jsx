import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskItem from "../../components/TaskItem";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import { router } from "expo-router";

export default function Tasks() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Lista de tarefas:</Text>
        <View style={styles.inner}>
          <TaskItem completed={true} text="Estudar React" />
          <TaskItem text="Estudar React Native" />
        </View>

        <FokusButton
          title="Adicionar nova tarefa"
          icon={<IconPlus outline />}
          outline
          onPress={() => router.navigate("/add-task")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    alignItems: "center",
  },
  wrapper: {
    gap: 40,
    width: "90%",
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 26,
  },
  inner: {
    gap: 8,
  },
});
