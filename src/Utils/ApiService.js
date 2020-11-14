/**
 * ApiService e uma array que e responsavel por fazer todas as 
 * requisições com o banco (CRUD) e retornar para o usuario a resposta
 */

const ApiService = {

    loginValidator: async (data) => {


            return await fetch('http://localhost:4000/auth/authenticate', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(res => res)
    },

    TratarErros: (res) => {
        if (!res.ok) {
            throw Error(res.responseText)
        }
        return res;
    }
}

export default ApiService;