import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://rastreador-carga.up.railway.app/api/cargos',
});

export default api;
