import axios from 'axios';
import authHeader from './auth-header';
const { API_URL = 'http://localhost:3000' } = process.env;
const API = `${API_URL}/api/v1/test`;

const getPublicContent = () => {
    return axios.get(API + 'all');
};

const getUserBoard = () => {
    return axios.get(API + 'user', { headers: authHeader() });
};

const getModeratorBoard = () => {
    return axios.get(API + 'mod', { headers: authHeader() });
};

const getAdminBoard = () => {
    return axios.get(API + 'admin', { headers: authHeader() });
};

export default {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};