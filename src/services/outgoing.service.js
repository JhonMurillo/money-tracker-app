import axios from 'axios';
import authHeader from './auth.header'
const { API_URL = 'http://localhost:3000' } = process.env;
const API = `${API_URL}/api/v1/expenses`;


const getAll = (params = {}) => {
    return axios.get(`${API}/`, {
        params: {
            ...params,
            page: (params.page || 0) + 1
        },
        headers: {
            ...authHeader(),
        }
    });
};

const create = (input = {}) => {
    return axios.post(`${API}/`,
        input,
        {
            headers: {
                ...authHeader(),
            }
        }
    );
};

export default {
    getAll,
    create,
};