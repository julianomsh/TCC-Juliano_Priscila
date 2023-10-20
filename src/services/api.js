import axios from 'axios';


const api = axios.create({
    baseURL:'http://10.64.44.223:3333'
})

export default api;