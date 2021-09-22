import axios from 'axios';
import authHeader from './auth.header'
const API_URL = 'http://localhost:3000/api/v1/expenses';


const getAll = (params = {}) => {
    return axios.get(`${API_URL}/`, {
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
    return axios.post(`${API_URL}/`,
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