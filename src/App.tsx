import { useState } from 'react';
import useAddTask from './features/useAddTask';
import useGetAllTasks from './features/useGetAllTasks';

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
        <h1 className="title mb-6 text-3xl font-bold text-gray-800">
          📋 Task Manager
        </h1>

        <div className="task-grid grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {dataGetAllTasks?.map((task) => (
            <div
              key={task._id}
              className="task-card rounded-xl bg-white p-4 text-left shadow-lg transition hover:shadow-xl"
            >
              {/* Title */}
              <h2 className="task-title mb-2 text-xl font-semibold text-gray-700">
                {task.title}
              </h2>

              {/* Description */}
              <p className="task-desc mb-2 text-gray-600">{task.description}</p>

              {/* Status */}
              <p
                className={`status ${task.done ? 'done' : 'pending'} font-semibold text-green-600`}
              >
                {task.done ? '✅ Completed' : '⏳ In Progress'}
              </p>

              {/* Dates */}
              <p className="date text-sm text-gray-500">
                Created: {new Date(task.createdAt).toLocaleString()}
              </p>
              <p className="date text-sm text-gray-500">
                Updated: {new Date(task.updatedAt).toLocaleString()}
              </p>

              {/* User Info */}
              <div className="user-details rounded-lg bg-gray-50 p-2 text-sm">
                <p>
                  <strong>👤 {task.userDetails.name}</strong>
                </p>
                <p>📍 {task.userDetails.city}</p>
                <p>📞 {task.userDetails.phone}</p>
                <p className="ip text-xs text-gray-500">
                  IP: {task.userDetails.publicIp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="mb-2 p-4 text-center text-3xl font-bold text-gray-800">
        ➕ Add New Task
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          className="mb-2 w-full rounded-lg border p-2 focus:ring focus:ring-blue-400"
          onChange={(event) => setTitle(event.target.value)}
          placeholder="title"
          type="text"
        />
        <input
          className="mb-2 w-full rounded-lg border p-2 focus:ring focus:ring-blue-400"
          onChange={(event) => setDescr(event.target.value)}
          placeholder="descr"
          type="text"
        />
        <input
          className="mb-2 w-full rounded-lg border p-2 focus:ring focus:ring-blue-400"
          onChange={(event) => setName(event.target.value)}
          placeholder="name"
          type="text"
        />
        <input
          className="mb-2 w-full rounded-lg border p-2 focus:ring focus:ring-blue-400"
          onChange={(event) => setPhone(event.target.value)}
          placeholder="phone"
          type="text"
        />
        <input
          className="mb-2 w-full rounded-lg border p-2 focus:ring focus:ring-blue-400"
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
    </div>
  );
}

export default App;
