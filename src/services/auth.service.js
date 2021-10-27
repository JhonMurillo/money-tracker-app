import axios from 'axios';
const { API_URL = 'http://localhost:3000' } = process.env;
console.log('API_URL', API_URL)
const API = `${API_URL}/api/v1/auth`;

const register = (name, email, password) => {
    return axios.post(`${API}/signup`, {
        name,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(`${API}/login`, {
            username,
            password,
        });
};

export default {
    register,
    login,
};