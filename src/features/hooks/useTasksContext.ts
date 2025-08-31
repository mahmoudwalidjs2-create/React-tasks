import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function useTasksContext() {
  const context = useContext(TaskContext);
  if (!context) throw new Error('Context is used outside the provider');
  return context;
}

export default useTasksContext;