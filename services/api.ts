import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://rastreador-carga.up.railway.app/api/',
});

export default api;
