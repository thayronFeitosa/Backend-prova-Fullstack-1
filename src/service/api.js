import axios from 'axios';

const token = window.localStorage.getItem('@controllertokenacessauth');
export const headers = {
    headers: {
        Authorization: `Bearer ${token}`, 
            'Content-Type': 'application/json'
        
    }
}
export default axios.create({
    baseURL: "http://localhost:8080",

})