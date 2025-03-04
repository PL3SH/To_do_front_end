import api from './api';
import { jwtDecode } from 'jwt-decode';

/* export const registerUser = async (userData) => {
  const response = await api.post('/signup', userData);
  return response.data;
}; */

export const registerUser = async ({ email, password, password_confirmation }) => {
  try {
    const response = await api.post('/signup', { 
      user: { email, password, password_confirmation } // Rails espera esta estructura
    });
    return response.data;
  } catch (error) {
    console.error('Error en el registro:', error.response?.data || error.message);
    throw error; // Para que el frontend pueda manejar el error
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    console.log('Full response headers:', response.headers); // Debug log para ver todos los headers

    // Intentar obtener el token del header
    const token = response.headers['authorization'] || 
                 response.headers['x-auth-token'] ||
                 response.headers.get('authorization');

    console.log('Token from headers:', token); // Debug log

    if (!token) {
      console.error('No token found in headers');
      return null;
    }

    // Si el token viene con el prefijo 'Bearer ', lo removemos
    const cleanToken = token.replace('Bearer ', '');

    try {
      const decodedUser = jwtDecode(cleanToken);
      localStorage.setItem('token', cleanToken);
      return decodedUser;
    } catch (tokenError) {
      console.error('Invalid token received:', tokenError);
      return null;
    }
  } catch (error) {
    console.error('Login failed:', error.response?.data || error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await api.delete('/logout'); // Si tu backend requiere una llamada
    //localStorage.removeItem('token');
    return true;
  } catch (error) {
      console.error('Error during logout:', error);
      alert("Error no ha sido posible salir de la sesion")
    return false;
  }
};

export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  return token ?  jwtDecode(token) : null;
};
