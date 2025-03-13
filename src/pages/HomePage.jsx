import { useState,useEffect } from 'react'
import { CardLogin } from '../forms/CardLogin'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { CardRegister } from '../forms/CardRegister'
import { CardTask } from '../cards/CardTask'
import { useAuth } from '../context/authContext';
import { logoutUser} from '../services/authService'
import { TaskForm } from '../forms/TaskForm';
import { getTasks, deleteTask } from '../services/taskService';

function HomePage() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const tasksData = await getTasks();
     // console.log('Tasks received from server:', tasksData); // Debug log
      setTasks(tasksData);
    } catch (error) {
      console.error("Error loading tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    const result = await logoutUser();
    if (result){
      localStorage.removeItem('token');
      setUser(null);
      navigate('/');
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      //console.log('Attempting to delete task:', taskId); // Debug log
      const success = await deleteTask(taskId);
      if (success) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
      } else {
        alert('Failed to delete task');
      }
    } catch (error) {
     // console.error('Error deleting task:', error);
      alert('Error deleting task');
    }
  };

  function CreateCards() {
    console.log('Current tasks in state:', tasks); // Debug log

    if (loading) {
      return <div>Loading tasks...</div>;
    }

    if (!tasks || tasks.length === 0) {
      return (
        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-600">No tasks found. Create your first task!</p>
        </div>
      );
    }

    return (
      <ul className='space-y-4'>
        {tasks.map(task => {
          //console.log('Task being rendered:', task); // Debug log
          return (
            <li key={task.id} className="mb-4">
              <CardTask 
                id={task.id}
                title={task.title}
                description={task.description}
                status={task.status}
                dueDate={task.due_date}
                onDelete={handleDeleteTask}
              />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="min-h-screen p-8  ">
      <div className="max-w-4xl mx-auto">
        {/* Header with Logout */}
        <div className="flex justify-end mb-8">
          <button 
            onClick={handleLogout} 
            className="px-4 py-2 bg-red-500 text-black rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Task Form Section */}
          <div className="md:sticky md:top-8 h-fit">
            <TaskForm onTaskCreated={loadTasks} />
          </div>

          {/* Task List Section */}
          <div className="space-y-4">
            <CreateCards />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
