import apiClient from '../client';
import { ILoginData } from './types';

export const api = {
  login(data: ILoginData) {
    return apiClient.post('/login', data);
  },

  getUsers() {
    return apiClient.get('/api/usernames');
  },

  getToken() {
    let result;
    const token = sessionStorage.getItem('token');
    if (token) {
      result = token;
    } else {
      result = '';
    }
    return {
      token: result,
    };
  },

  getUser() {
    let result;
    const user = sessionStorage.getItem('username');
    if (user) {
      result = user;
    } else {
      result = '';
    }
    return {
      username: result,
    };
  },

  setToken(token: string) {
    sessionStorage.setItem('token', token);
  },

  setUser(username: string) {
    sessionStorage.setItem('username', username);
  },

  removeToken() {
    sessionStorage.removeItem('token');
  },

  removeUser() {
    sessionStorage.removeItem('username');
  },

  resetSession() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
  },
};
