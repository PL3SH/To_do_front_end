import { useState } from 'react';

export function TaskForm() {
    // Add state management for form fields
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate fields including due date
        if (!taskName.trim() || !description.trim() || !dueDate) {
            alert('Please fill all fields');
            return;
        }

        // Create new task object with due date
        const newTask = {
            taskname: taskName,
            description: description,
            dueDate: dueDate,
            status: false
        };

        // Here you would typically send this to a parent component or API
        console.log('New Task:', newTask);

        // Clear form
        setTaskName('');
        setDescription('');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="relative z-10 w-full max-w-sm bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-6 hover:border-white/40 transition-colors duration-300">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Your favorite To-do list</h2>
                <p className="text-gray-500 text-sm mt-2">Please Create a Task to do</p>
            </div>

            <div className="space-y-2">
                <label className="text-gray-700 text-sm font-medium pl-1" htmlFor="task_name">
                    Task Name
                </label>
                <input 
                    type="text"
                    name="task_name"
                    id="task_name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                    placeholder="Enter task name"
                />
            </div>
            
            <div className="space-y-2">
                <label className="text-gray-700 text-sm font-medium pl-1" htmlFor="description">
                    Description
                </label>
                <input 
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                    placeholder="Describe your task"
                />
            </div>

            <div className="space-y-2">
                <label className="text-gray-700 text-sm font-medium pl-1" htmlFor="due_date">
                    Due Date
                </label>
                <input 
                    type="date"
                    name="due_date"
                    id="due_date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-500 text-black rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
                Create Task
            </button>
        </form>
    );
}