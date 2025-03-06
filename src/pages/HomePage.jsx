import { useState } from 'react'
import { CardLogin } from '../forms/CardLogin'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { CardRegister } from '../forms/CardRegister'
import { CardTask } from '../cards/CardTask'
import { useAuth } from '../context/authContext';
import { logoutUser} from '../services/authService'
import { TaskForm } from '../forms/TaskForm';
import { getTasks } from '../services/taskService';

function HomePage() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogout = async () => {
    const result = await logoutUser();
    if (result){
      localStorage.removeItem('token');
      setUser(null);
      navigate('/');
    }
  };

  function CreateCards() {
    const response = getTasks();
    
    // First check if response is null (error case)
    if (!response || []) {
        return (
            <div className="text-center p-4 bg-red-100 rounded-lg">
                <p className="text-red-600">Error loading tasks. Please try again later.</p>
            </div>
        );
    }

    const tasklist = response;
    
    // Check if the array is empty
    if (tasklist.length === 0 || null) {
        return (
            <div className="text-center p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-600">No tasks found. Create your first task!</p>
            </div>
        );
    }

    // If we have tasks, render them
    const list = tasklist.map(task => {
        return (
            <li key={task.id} className="mb-4">
                <CardTask 
                    title={task.taskname} 
                    description={task.description} 
                    status={task.status}
                />
            </li>
        );
    });

    return (
        <ul className='space-y-4'>{list}</ul>
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
            <TaskForm />
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
