import { router } from "expo-router";
import useTaskContent from "../../components/context/useTaskContent";
import FormTask from "../../components/FormTask";

export default function AddTask() {
  const { addTask } = useTaskContent();

  const submitTask = (description) => {
    addTask(description);
    router.navigate("/tasks");
  };

  return <FormTask onFormSubmit={submitTask} />;
}
