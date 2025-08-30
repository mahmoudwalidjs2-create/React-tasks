type Task = {
  _id: string;
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  userDetails: {
    name: string;
    city: string;
    phone: string;
    publicIp: string;
  };
};

interface TaskCardProps {
  dataGetAllTasks: Task[] | undefined;
}

export default function TaskCard({ dataGetAllTasks }:TaskCardProps) {
  return (
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
  );
}
