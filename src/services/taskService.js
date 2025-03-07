import api from './api';

// Function to get all tasks
export const getTasks = async () => {
    try {
        const response = await api.get('/tasks');
        console.log('Getting task data:', response.data);
        // Check if response.data exists and is an array
        if (response.data && Array.isArray(response.data)) {
            return response.data;
        } else {
            throw new Error('Invalid response format: ' + JSON.stringify(response.data));
            
        }
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return [];  // Return [] 
    }
};

// Function to create a new task
export const createTask = async (taskData) => {
    try {
        // Log the data being sent
        console.log('Sending task data:', taskData);

        const response = await api.post('/tasks', taskData);
        
        // Log the response
        console.log('Server response:', response);

        if (response.data) {
            return response.data;
        } else {
            throw new Error('No data received from server');
        }
    } catch (error) {
        console.error('Error creating task:', error);
        // Log the error response if available
        if (error.response) {
            console.error('Server error response:', error.response.data);
        }
        return null;
    }
};