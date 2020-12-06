import api from './api';


export const createCuidador = async (cuidador) => {
  const response = await api.post('/cuidadors', {
    cuidador
  });
  if (response.status === 201) {
    return response.data;
  }
  return null;
} 

export const login = async (credentials) => {
  const response = await api.post('/cuidadors/login', credentials)
  if (response.status === 200) {
    const { token } = response.data;
    localStorage.setItem('token', token)
    return true;
  }
  return false;
}