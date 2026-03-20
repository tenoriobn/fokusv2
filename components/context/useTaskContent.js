import { useContext } from "react";
import { TaskContext } from "./TaskProvider";

export default function useTaskContent() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("Tentando acessar o contexto fora do TasksProvider.");
  }

  return context;
}
