import '../login/css/Login.css'
import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, useHistory, Link } from 'react-router-dom';
import StoreContext from '../Store/Context'
import UIButton from '../UI/Button/Button'
import imgLogin from '../../img/user-2.png';
import ApiService from '../../Utils/ApiService'
import PopUp from '../../Utils/PopUp'

function initialState() {
    return { user: '', password: '' };
}
function validarLogin(data, erro) {
    const { password, email, message, token } = data


    if (password !== undefined) {
        PopUp.exibeMensagem("error", password, 3000);
        return { error: password };
    }
    if (email !== undefined) {
        PopUp.exibeMensagem("error", email, 3000)
        return { error: email }

    }
    if (message !== undefined || data === 'Usuário ou senha inválidos') {
        PopUp.exibeMensagem("error", message || data, 3000);
        return { error: message };
    }





    PopUp.exibeMensagem("success", 'Seja Bem vindo', 3000);
    return { token: token }

}
async function login({ user, password }) {
    const data = {
        email: user,
        password: password
    }
    const response = await ApiService.loginValidator(data);

    console.log(response)


    return validarLogin(response)


}

const UserLogin = () => {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(null);
    const { setToken } = useContext(StoreContext);
    const history = useHistory();

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    async function onSubmit(event) {
        try {
            event.preventDefault();
            const { token, error } = await login(values);
            if (token) {
                console.log(token);

                setToken(token);
                return history.push('/home');
            } else {
                setError(error);
                setValues(initialState);
                return;
            }
        } catch (err) {

            PopUp.exibeMensagem("error", "Nao foi possivel realizar o login. tente mais tarde");

        }



    }

    return (
        <div id="row">
            <div id="login-row">
                <div id="div-img1-login">
                    <img id="img1-login" src={imgLogin} alt="loginImagem" />

                    <div id="login-form">
                        <label htmlFor="">Login</label>

                        <form onSubmit={onSubmit}>
                            <div className="user-login__form-control">
                                <input
                                    id="user"
                                    type="text"
                                    name="user"
                                    onChange={onChange}
                                    value={values.user}
                                    placeholder="Usuário"
                                />
                            </div>
                            <div className="user-login__form-control">
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={onChange}
                                    value={values.password}
                                    placeholder="Senha"
                                />
                            </div>
                            {error && (
                                <div className="user-login__error">{error}</div>
                            )}
                            <div id="criarConta">

                                <Link to="/user/cadastro"> <span> Criar contra</span></Link>
                            </div>


                            <UIButton
                                type="submit"
                                theme="contained-green"
                                className="user-login__submit-button"
                                rounded
                            >
                                Entrar
                            </UIButton>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
};

export default UserLogin;