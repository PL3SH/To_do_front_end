import { useState } from 'react'
import { CardLogin } from '../forms/CardLogin'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { CardRegister } from '../forms/CardRegister'
import { CardTask } from '../cards/CardTask'
import { useAuth } from '../context/authContext';
import { logoutUser } from '../services/authService'


function HomePage() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
//maneja el logout
  const handleLogout = async () => {
    const result = await logoutUser();
    if (result){
      localStorage.removeItem('token');
      setUser(null);
      navigate('/');
    }
  };


    function CreateCards(){
      const tasklist = [{id:1,taskname:"Lavar la loza",description:"Lavar la loza restante del dia antes de las 12:00pm",status:false},{id:2,taskname:"Lavar la ropa",description:"Lavar la ropa blanca del dia antes de las 11:00pm",status:true}]
      const list = tasklist.map(task => {
        return(
        <li key={task.id}>
          <CardTask title={task.taskname} description={task.description} status={task.status}/>
        </li>)
      })

      return(
        <ul className='tasklist'>{list}</ul>
      )
    }

  return (
    <>
      <div className='taskform'>
      <CreateCards/>
      </div>
    
      <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
        Logout
      </button>
    </>
  )
}

export default HomePage
