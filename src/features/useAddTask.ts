import { useMutation } from "@tanstack/react-query";
import addTask from "../services/apiAddTask";
import { addTaskRequestT } from "../schema/addTaskSchema";

const useAddTask = () => {
  const {
    mutate: mutateAddTask,
    isPending: isLoadingAddTask,
    error: errorAddTask,
  } = useMutation({
    mutationFn: (data: addTaskRequestT) => addTask(data),
  });

  return { mutateAddTask, isLoadingAddTask, errorAddTask };
};

export default useAddTask;
