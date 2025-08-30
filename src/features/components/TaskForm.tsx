interface TaskFormProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescr: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  onSendTaks: () => void;
}

export default function TaskForm({
  setTitle,
  setDescr,
  setName,
  setPhone,
  setCity,
  onSendTaks,
}: TaskFormProps) {
  return (
    <>
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
    </>
  );
}
