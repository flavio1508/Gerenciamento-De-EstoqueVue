import axios from 'axios';
import { useCookies } from "vue3-cookies";

export default axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers:{
        "Content-Type": "application/json"
    }
})