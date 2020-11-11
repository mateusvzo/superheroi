import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.superheroapi.com/api.php/3188100284576809'
});

export default api;
