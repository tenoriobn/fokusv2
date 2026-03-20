import { FlatList, StyleSheet, Text, View } from "react-native";
import TaskItem from "../../components/TaskItem";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import { router } from "expo-router";
import useTaskContent from "../../components/context/useTaskContent";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tasks() {
  const { tasks, deleteTask } = useTaskContent();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskItem
                completed={item.completed}
                text={item.description}
                onPressDelete={() => deleteTask(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            ListHeaderComponent={
              <Text style={styles.text}>Lista de tarefas:</Text>
            }
            ListFooterComponent={
              <View style={{ marginTop: 16 }}>
                <FokusButton
                  title="Adicionar nova tarefa"
                  icon={<IconPlus outline />}
                  outline
                  onPress={() => router.navigate("/add-task")}
                />
              </View>
            }
          />
        </View>
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
    marginBottom: 16,
  },
  inner: {
    gap: 8,
  },
});
