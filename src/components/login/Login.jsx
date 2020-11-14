import '../login/css/Login.css'
import React, { useState, useContext } from 'react';
import {BrowserRouter as Router, useHistory, Link } from 'react-router-dom';
import StoreContext from '../Store/Context'
import UIButton from '../UI/Button/Button'
import imgLogin from '../../img/user-2.png';
import ApiService from '../../Utils/ApiService'


function initialState() {
    return { user: '', password: '' };
}

async function login({ user, password }) {
    const data = {
        email: user,
        password: password
    }
    const response = await ApiService.loginValidator(data);
        console.log(response);
    return response


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
        try{
            event.preventDefault();
            const { token, error } = await login(values);

            if (token) {
                console.log(token)

                var teste = await login(values);
                teste = teste.user.permisao
                setToken(token);
                localStorage.setItem('@keyItemName', teste);
                return history.push('/user/cadastro');
            } else {
                setError(error);
                setValues(initialState);
                return;
            }
        }catch(err){
            alert(err)
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