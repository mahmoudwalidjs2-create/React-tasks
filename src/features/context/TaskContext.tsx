import { createContext, ReactNode } from 'react';
import useGetAllTasks from '../hooks/useGetAllTasks';
import useAddTask from '../hooks/useAddTask';

export interface TaskInput {
  title: string;
  descr: string;
  name: string;
  phone: string;
  city: string;
}

interface TaskContextType {
  dataGetAllTasks: unknown;
  isLoadingGetAllTasks: boolean;
  refetchGetAllTasks: () => void;
  mutateAddTask: ReturnType<typeof useAddTask>['mutateAddTask'];
  isLoadingAddTask: boolean;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

function TasksProvider({ children }: TaskProviderProps) {
  const { dataGetAllTasks, isLoadingGetAllTasks, refetchGetAllTasks } =
    useGetAllTasks();
  const { mutateAddTask, isLoadingAddTask } = useAddTask();
  return (
    <TaskContext.Provider
      value={{
        dataGetAllTasks,
        isLoadingAddTask,
        mutateAddTask,
        isLoadingGetAllTasks,
        refetchGetAllTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TasksProvider;
export { TaskContext };
