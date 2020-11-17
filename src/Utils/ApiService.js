/**
 * ApiService e uma array que e responsavel por fazer todas as 
 * requisições com o banco (CRUD) e retornar para o usuario a resposta
 */
const axios = require('axios').default;
const token = window.localStorage.getItem('@controllertokenacessauth');

const ApiService = {
    getUserValues: async (data) => {
        var URL = 'http://localhost:8080/user'
        const AuthStr = 'Bearer ' + localStorage.getItem('@controllertokenacessauth').replace(/(^"|"$)/g, '')
        const dados = await axios.get(`${URL}`, { headers: { Authorization: AuthStr } })
        return dados.data


    },
    uploadPem: async (data) =>{
        const AuthStr = 'Bearer ' + localStorage.getItem('@controllertokenacessauth').replace(/(^"|"$)/g, '')
        const response = await axios.post('http://localhost:8080/upload', (data), { headers: { Authorization: AuthStr } });
        console.log(response);

    },

    createUser: async (data)=>{
        const response = await axios.post('http://localhost:8080/register', data)
        console.log(response)
        return response.data
    },
    loginValidator: async (data) => {
        const response = await axios.post('http://localhost:8080/login', data)
        console.log(response)
        return response.data
    },


    // userRegister: async (props) => {
    //     const response = await api.post('http://localhost:8080/user', props)
    //     console.log(response)
    // },


    TratarErros: (res) => {
        if (!res.ok) {
            throw Error(res.responseText)
        }
        return res;
    }
}

export default ApiService;