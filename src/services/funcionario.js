import api from './api';
import jwtDecode from 'jwt-decode';

export const login = async (credentials) => {
  const response = await api.post('/funcionarios/login', credentials)
  if (response.status === 200) {
    const { token } = response.data;
    localStorage.setItem('token', token)
    return true;
  }
  return false;
}

export const getFuncionario = async () => {
  const token = localStorage.getItem('token')
  const { funcionario_id } = jwtDecode(token)
  const response = await api.get(`/funcionarios/${funcionario_id}`)
  if (response.status === 200) {
    return response.data;
  }
  return null;
}