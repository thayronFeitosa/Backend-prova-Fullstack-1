/**
 * ApiService e uma array que e responsavel por fazer todas as 
 * requisições com o banco (CRUD) e retornar para o usuario a resposta
 */
const axios = require("axios").default

const ApiService = {

    loginValidator: async (data) => {

        return await fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(res => res)

    },
    createUser: async (data) => {
       

        return await fetch('http://localhost:8080/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
           
    },
    userRegister: async (props) => {
        var URL = 'http://localhost:8080/register';
        var data = props;
        console.log(data)

    
        return await axios.post(`${URL}`, data, { headers: { 'Content-Type': 'application/json' } })
            .then(response => {
               console.log(response)
                return response.data
            }).catch(error => {
                console.log(error)

                return error.response

            })
    },

    TratarErros: (res) => {
        if (!res.ok) {
            throw Error(res.responseText)
        }
        return res;
    }
}

export default ApiService;