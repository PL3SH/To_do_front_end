import api from './api';

// Function to get all tasks
export const getTasks = async () => {
    try {
        const response = await api.get('/tasks');
        
        // Check if response.data exists and is an array
        if (response.data && Array.isArray(response.data)) {
            return response.data;
        } else {
            console.error('Invalid response format:', response);
            return [];  // Return empty array instead of null for better handling
        }
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return null;  // Return null only for actual errors
    }
};

// Function to create a new task
export const createTask = async (taskData) => {
    try {
        const response = await api.post('/tasks', taskData);
        return response.data;
    } catch (error) {
        console.error('Error creating task:', error);
        return null;
    }
};