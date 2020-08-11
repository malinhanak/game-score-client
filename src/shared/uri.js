import axios from 'axios';
import Cookies from 'universal-cookie';

import { year } from './';

export const baseURI_Dev = 'http://localhost:4000';
export const baseURI = 'https://new-game-store.herokuapp.com';

export const api = axios.create({
  baseURL: baseURI_Dev
});

const cookies = new Cookies();

api.interceptors.request.use(
  (config) => {
    const cookie = cookies.get('sid');
    config.headers['Content-Type'] = 'application/json';
    if (cookie) {
      config.headers.Authorization = `Bearer ${cookie.token}`;
      return config;
    }
    return config;
  },
  (error) => {
    console.error('interceptor errors', error);
    Promise.reject(error);
  }
);

export const GET_SCORE = '/api/teams/get-score';
export const LOGIN_TEAM = '/api/sessions/login-team';
export const GET_NAVLINKS = `/api/game/${year}`;
