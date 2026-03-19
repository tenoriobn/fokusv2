import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskItem from "../../components/TaskItem";

export default function Tasks() {
  return (
    <SafeAreaView>
      <Text>Página para listar tarefas</Text>
      <TaskItem completed={true} text="Estudar React" />
      <TaskItem text="Estudar React Native" />
    </SafeAreaView>
  );
}
