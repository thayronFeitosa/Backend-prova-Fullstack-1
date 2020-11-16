import './css/Cadastro.css';
import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, useHistory, Link } from 'react-router-dom';
import image from '../../../img/img-celular.svg';
import PopUp from '../../../Utils/PopUp';
import ApiService from '../../../Utils/ApiService'
const CPF = require('cpf-check');







function initialState() {
    return {
        name: '', cpf: '', email: '', birthdate: '', password: ''
        , nunber: '', street: '', city: '', state: '', number: '', complement: '',
        confirmpassword: ''
    };
}

function validarSenha(pass, confirmPass, mesage) {
    if((pass === confirmPass ? true : false) ==false){
        PopUp.exibeMensagem("error", mesage);
        return false;
    }
    if(pass.length < 8){
        PopUp.exibeMensagem("error", 'A senha deve ser maior que 8 caracteres');
        return false;
    }
    return true;
}

function validarErroGenerico(data){
    if (data.status > 400) {
        const {cpf, email} = data.data
        if(cpf !== undefined)PopUp.exibeMensagem("error", cpf, 3000);
        if(email !== undefined)PopUp.exibeMensagem("error", email,3000);

        return false;
    }else{
        PopUp.exibeMensagem("success", 'Cadastro realizado com sucesso',3000);

    }
}

function validarCpf(cpf){
    return CPF.validate(cpf);
}

const CadastrarUser = () => {
    const [values, setValues] = useState(initialState);
    // const [error, setError] = useState(null);
    // const { setToken } = useContext(StoreContext);
    // const history = useHistory();

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    async function validSubmit() {
        var cont = 0;
        Object.keys(values).forEach(function (item) {
            if (values[item] === "") {
                // console.log("O campo " + item + " é Obrigatorio");
                return item;

            } else {
                cont++;
            }
        });

       

        return cont;
    }

    async function onSubmit(event) {

        try {
            event.preventDefault();
            const validar = await validSubmit();
            console.log(validar);
            if (validar !== 12) {
                PopUp.exibeMensagem("error", "Todos os campos são obrigatorios");
            } else {
                const { name, cpf, email, birthdate, password, confirmpassword, nunber, street, city, state, number, complement } = values;
                const dataUser = { name, cpf, email, birthdate, password, password_confirmation: confirmpassword };
                const dataAddress = { street, city, state, number, complement };
                const dataTelephone = { nunber }
                // console.log(dataUser)
                // console.log(dataAddress)
                // console.log(dataTelephone)
                if (!validarSenha(password, confirmpassword, "As senhas digitadas não são iguais")) {
                    return
                }


                const response = await ApiService.userRegister(dataUser);

                validarErroGenerico(response);
              
            }


        } catch (err) {
            alert(err)
        }

    }

    return (
        <div id="cadastro-user-row" >
            <img id="cadatro-image" src={image} alt="" />
            <div id="cadastro-user-form" className="content-box">
                <form id="formulario" onSubmit={onSubmit}>
                    <div id="cadastro-user-dados-pessoais">
                        <div id="cadastro-user-dados-pessoais-label">
                            <label htmlFor="">Preencha seus dados pessoais</label>

                        </div>
                        <div id="cadastro-user-name">

                            <input type="text"
                                placeholder="Nome"
                                name="name"
                                value={values.name}
                                onChange={onChange}
                            />
                        </div>

                        <div id="cadastro-user-p2">
                            <input type="text"
                                placeholder="CPF"
                                maxlength="11"
                                name="cpf"
                                value={values.cpf}
                                onChange={onChange}
                            />
                            <input type="email"
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                onChange={onChange}
                            />
                            <input type="date"
                                placeholder="Data de nascimento"
                                value={values.birthdate}
                                name="birthdate"
                                onChange={onChange}
                                color="#FFFF"
                            />
                            <input type="text"
                                placeholder="telefone"
                                max="14"
                                value={values.nunber}
                                name="nunber"
                                onChange={onChange}


                            />
                        </div>

                    </div>



                    <div id="cadastro-user-endereco">
                        <div id="cadastro-user-endereco-label">
                            <label htmlFor="">Preencha seu endereço</label>
                        </div>

                        <div id="input-address">
                            <input type="text"
                                placeholder="Rua"
                                value={values.street}
                                name="street"
                                onChange={onChange}

                            />
                            <input type="text"
                                placeholder="Cidade"
                                value={values.city}
                                name="city"
                                onChange={onChange}
                            />
                            <input type="text"
                                placeholder="Estado"
                                value={values.state}
                                name="state"
                                onChange={onChange}
                            />
                            <input type="text"
                                placeholder="Numero"
                                value={values.number}
                                name="number"
                                onChange={onChange}
                            />
                            <input type="text"
                                placeholder="Complemento"
                                value={values.complement}
                                name="complement"
                                onChange={onChange}
                            />
                        </div>


                    </div>


                    <div id="cadastro-user-password">
                        <div id="cadastro-user-password-label">

                            <label htmlFor="">Escolha uma senha segura para acessar o sistema</label>
                        </div>


                        <div>
                            <input type="password"
                                placeholder="Senha"
                                value={values.password}
                                name="password"
                                onChange={onChange}

                            />
                            <input type="password"
                                placeholder="Confirmar senha"
                                value={values.confirmpassword}
                                name="confirmpassword"
                                onChange={onChange}
                            />
                        </div>

                    </div>
                    <Link to="/login"> <input id="cancelar" value="VOLTAR" /></Link>
                    <input id="enviar-cadastro" type="submit" value="ENVIAR" />


                </form>
            </div>

        </div>


    )
};

export default CadastrarUser;