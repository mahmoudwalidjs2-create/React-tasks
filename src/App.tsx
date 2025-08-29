import { useState } from "react";
import "./App.css";
import useAddTask from "./features/useAddTask";
import useGetAllTasks from "./features/useGetAllTasks";

function App() {
  const [title, setTitle] = useState<string>("");
  const [descr, setDescr] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");

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
    setTitle("");
    setDescr("");
    setName("");
    setPhone("");
    setCity("");
  };

  return (
    <>
      <div>
        <input
          onChange={(event) => setTitle(event.target.value)}
          placeholder="title"
          type="text"
        />
        <input
          onChange={(event) => setDescr(event.target.value)}
          placeholder="descr"
          type="text"
        />
        <input
          onChange={(event) => setName(event.target.value)}
          placeholder="name"
          type="text"
        />
        <input
          onChange={(event) => setPhone(event.target.value)}
          placeholder="phone"
          type="text"
        />
        <input
          onChange={(event) => setCity(event.target.value)}
          placeholder="city"
          type="text"
        />
        <button onClick={onSendTaks}>Add Task</button>
      </div>
      <div className="app">
        <h1 className="title">📋 Task Manager</h1>

        <div className="task-grid">
          {dataGetAllTasks?.map((task) => (
            <div key={task._id} className="task-card">
              {/* Title */}
              <h2 className="task-title">{task.title}</h2>

              {/* Description */}
              <p className="task-desc">{task.description}</p>

              {/* Status */}
              <p className={`status ${task.done ? "done" : "pending"}`}>
                {task.done ? "✅ Completed" : "⏳ In Progress"}
              </p>

              {/* Dates */}
              <p className="date">
                Created: {new Date(task.createdAt).toLocaleString()}
              </p>
              <p className="date">
                Updated: {new Date(task.updatedAt).toLocaleString()}
              </p>

              <hr />

              {/* User Info */}
              <div className="user-details">
                <p>
                  <strong>👤 {task.userDetails.name}</strong>
                </p>
                <p>📍 {task.userDetails.city}</p>
                <p>📞 {task.userDetails.phone}</p>
                <p className="ip">IP: {task.userDetails.publicIp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
