import TaskCard from './features/components/TaskCard';
import TaskForm from './features/components/TaskForm';
import useTasksContext from './features/hooks/useTasksContext';

function App() {
  const { isLoadingGetAllTasks, isLoadingAddTask } = useTasksContext();

  if (isLoadingGetAllTasks) {
    return <div className="loading">Loading tasks...</div>;
  }

  if (isLoadingAddTask) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <TaskCard />
      <TaskForm />
    </div>
  );
}

export default App;
