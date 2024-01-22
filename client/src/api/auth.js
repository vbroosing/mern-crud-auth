import axios from 'axios';

const API = 'http://localhost:3000/api';

const registerRequest = user => axios.post(`${API}/register`, user);
const loginRequest = user => axios.post(`${API}/login`, user);
const logoutRequest = user => axios.post(`${API}/logout`, user);
const profileRequest = user => axios.get(`${API}/request`, user);

export {
    registerRequest,
    loginRequest,
    logoutRequest,
    profileRequest
}
