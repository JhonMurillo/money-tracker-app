import axios from "axios";
import { Context } from '../Context'

const {} = useContext(Context)

const { API_URL = 'http://localhost:3000' } = process.env;
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
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getUserLogged = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getUserLogged,
};