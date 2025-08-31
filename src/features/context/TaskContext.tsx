import { createContext, ReactNode, useState } from 'react';
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
  title: string;
  setTitle: (value: string) => void;
  descr: string;
  setDescr: (value: string) => void;
  name: string;
  setName: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  city: string;
  setCity: (value: string) => void;

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
  const [title, setTitle] = useState<string>('');
  const [descr, setDescr] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const { dataGetAllTasks, isLoadingGetAllTasks, refetchGetAllTasks } =
    useGetAllTasks();
  const { mutateAddTask, isLoadingAddTask } = useAddTask();
  return (
    <TaskContext.Provider
      value={{
        title,
        setTitle,
        descr,
        setDescr,
        name,
        setName,
        phone,
        setPhone,
        city,
        setCity,
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
