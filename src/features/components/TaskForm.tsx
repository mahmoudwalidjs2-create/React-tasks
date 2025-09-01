import { useState } from 'react';
import useTasksContext from '../hooks/useTasksContext';

export default function TaskForm() {
  const [title, setTitle] = useState<string>('');
  const [descr, setDescr] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const { mutateAddTask, refetchGetAllTasks } = useTasksContext();

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
    <>
      <h2 className="mb-2 p-4 text-center text-3xl font-bold text-gray-800">
        ➕ Add New Task
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          className="mb-2 w-full rounded-lg border p-2 focus:ring focus:ring-blue-400"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="title"
          type="text"
        />
        <input
          className="mb-2 w-full rounded-lg border p-2 focus:ring focus:ring-blue-400"
          value={descr}
          onChange={(event) => setDescr(event.target.value)}
          placeholder="descr"
          type="text"
        />
        <input
          className="mb-2 w-full rounded-lg border p-2 focus:ring focus:ring-blue-400"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="name"
          type="text"
        />
        <input
          className="mb-2 w-full rounded-lg border p-2 focus:ring focus:ring-blue-400"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="phone"
          type="text"
        />
        <input
          className="mb-2 w-full rounded-lg border p-2 focus:ring focus:ring-blue-400"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="city"
          type="text"
        />
        <button
          className="w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
          onClick={onSendTaks}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
