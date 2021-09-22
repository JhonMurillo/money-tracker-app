import axios from 'axios';
const API_URL = 'http://localhost:3000/api/v1/auth';

const register = (name, email, password) => {
    return axios.post(`${API_URL}/signup`, {
        name,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(`${API_URL}/login`, {
            username,
            password,
        });
};

export default {
    register,
    login,
};