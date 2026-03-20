import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([
    { description: "usuário 1", id: 1 },
    { description: "usuário 2", id: 2 },
    { description: "usuário 3", id: 3 },
    { description: "usuário 4", id: 4 },
    { description: "usuário 5", id: 5 },
    { description: "usuário 6", id: 6 },
    { description: "usuário 7", id: 7 },
    { description: "usuário 8", id: 8 },
    { description: "usuário 9", id: 9 },
    { description: "usuário 10", id: 10 },
  ]);

  const addTask = (description) => {
    console.log("tarefa vai ser adicionada.");
    setTasks((oldState) => {
      return [
        ...oldState,
        {
          description,
          id: oldState.length + 1,
        },
      ];
    });
  };

  const toggleTaskCompleted = (id) => {
    setTasks((oldState) => {
      return oldState.map((t) => {
        if (t.id === id) {
          t.completed = !t.completed;
        }

        return t;
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((oldState) => {
      return oldState.filter((t) => t.id !== id);
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTaskCompleted,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
