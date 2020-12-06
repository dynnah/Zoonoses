import api from './api';
import jwtDecode from 'jwt-decode';


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

export const getCuidador = async () => {
  const token = localStorage.getItem('token')
  const { cuidador_id } = jwtDecode(token)
  const response = await api.get(`/cuidadors/${cuidador_id}`)
  if (response.status === 200) {
    return response.data;
  }
  return null;
}

export const updateCuidador = async (cuidador) => {
  const token = localStorage.getItem('token')
  const { cuidador_id } = jwtDecode(token)
  const response = await api.patch(`/cuidadors/${cuidador_id}`, {
    cuidador
  });
  if (response.status === 200) {
    return response.data;
  }
  return null;
} 