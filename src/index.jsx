import { useState } from 'react'
import { CardLogin } from './forms/CardLogin'
import './App.css'
import { CardRegister } from './forms/CardRegister'
import { CardTask } from './cards/CardTask'


function App() {
  

  return (
    <>
      <div>
       <CardTask title="Task" description="Description..........................." />
      </div>
    </>
  )
}

export default App
