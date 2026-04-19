import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import useTaskContent from "../../components/context/useTaskContent";
import FormTask from "../../components/FormTask";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const { tasks, updateTask } = useTaskContent();

  const task = tasks.find((t) => t.id === Number(id));

  const submitTask = (description) => {
    updateTask(id, description);
    router.navigate("/tasks");
  };

  if (!task) {
    return (
      <View>
        <Text>Não foi encontrada uma tarefa com o id: {id}</Text>
      </View>
    );
  }

  return <FormTask onFormSubmit={submitTask} defaultValue={task.description} />;
}
