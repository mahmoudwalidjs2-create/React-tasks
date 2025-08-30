import { useState } from 'react';
import TaskCard from './features/components/TaskCard';
import useGetAllTasks from './features/hooks/useGetAllTasks';
import useAddTask from './features/hooks/useAddTask';
import TaskForm from './features/components/TaskForm';

function App() {
  const [title, setTitle] = useState<string>('');
  const [descr, setDescr] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const { dataGetAllTasks, isLoadingGetAllTasks, refetchGetAllTasks } =
    useGetAllTasks();
  const { mutateAddTask, isLoadingAddTask } = useAddTask();
  
  if (isLoadingGetAllTasks) {
    return <div className="loading">Loading tasks...</div>;
  }

  if (isLoadingAddTask) {
    return <div className="loading">Loading...</div>;
  }

  const onSendTaks = () => {
    const data = {
      title,
      description: descr,
      userDetails: {
        name,
        phone,
        city,
      },
    };

    mutateAddTask(data, {
      onSuccess: () => {
        refetchGetAllTasks();
      },
    });
    setTitle('');
    setDescr('');
    setName('');
    setPhone('');
    setCity('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="app text-center">
        <TaskCard dataGetAllTasks={dataGetAllTasks} />
      </div>
      <TaskForm
        setTitle={setTitle}
        setDescr={setDescr}
        setCity={setCity}
        setPhone={setPhone}
        setName={setName}
        onSendTaks={onSendTaks}
      />
    </div>
  );
}

export default App;
