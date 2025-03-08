import { useState } from 'react'
import { TaskForm } from '../forms/TaskForm';

export function CardTask({ id, title, description, status, dueDate, onDelete }) {
    console.log('CardTask props:', { id, title, description, status, dueDate }); // Debug log
    
    const [isOpen, setIsOpen] = useState(false);//state para abri la card desplegable
    const [isMarked, setIsMarked] = useState(status);//state para el checkbutton

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            onDelete(id);
        }
    };

    return (
        <>
        
        <div className="w-full max-w-md transition-all duration-300">
            {/* Card Header - Always Visible */}
            <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-lg rounded-t-lg border border-white/20">
                <div className="flex items-center gap-3 flex-1">
                    <button 
                        onClick={() => setIsMarked(!isMarked)}
                        className="text-gray-600 hover:text-blue-500 transition-colors">
                        {isMarked ? (
                            <img src="/mark_check.svg" alt="Marked" className="w-6 h-6" />
                        ) : (
                            <img src="/mark.svg" alt="Mark" className="w-6 h-6" />
                        )}
                    </button>
                    <h2 className="text-xl font-bold text-gray-800 cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}>
                        {title || 'No Title'}
                    </h2>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 backdrop-blur-lg">
                    <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors">
                        <img src="/edit.svg" alt="Edit" className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={handleDelete}
                        className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors">
                        <img src="/delete.svg" alt="Delete" className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Dropdown Content */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen 
                    ? 'max-h-48 opacity-100' 
                    : 'max-h-0 opacity-0'
            }`}>
                <div className="p-4 bg-white/5 backdrop-blur-lg rounded-b-lg border-x border-b border-white/20">
                    <p className="text-gray-600">{description || 'No Description'}</p>
                    <div className="mt-2">
                        <span className={`px-2 py-1 rounded text-sm ${
                            status === 'completed' ? 'bg-green-100 text-green-800' : 
                            'bg-yellow-100 text-yellow-800'
                        }`}>
                            {status || 'pending'}
                        </span>
                        {dueDate && (
                            <span className="ml-2 text-sm text-gray-500">
                                Due: {new Date(dueDate).toLocaleDateString()}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}