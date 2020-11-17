import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import image from '../../../img/img-celular.svg';
import ApiService from '../../../Utils/ApiService'

import './css/Cadastro.css';

export default function CadastrarUser() {
    const [values, setValues] = useState(userInitialState);
    const [address, setAdress] = useState(addressInitialState);

    function userInitialState() {
        return {
            name: "",
            cpf: "",
            email: "",
            birthdate: "",
            password: "",
            password_confirmation: "",
            number:""
        };
    }
    
    function addressInitialState() {
        return {
            street: "",
            city: "",
            state: "",
            number: "",
            neighborhood: "",
            complement: "",
        };
    }

    function onChange(event) {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
    }
    
    function onChangeAddress(event) {
        const { value, name } = event.target;
        setAdress({ ...address, [name]: value });
    }

    async function onSubmit(event) {
        event.preventDefault();
        values['address'] = address;
        await ApiService.createUser(values);
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
                                value={values.numaber}
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
                                onChange={onChangeAddress}

                            />
                            <input type="text"
                                placeholder="Cidade"
                                value={values.city}
                                name="city"
                                onChange={onChangeAddress}
                            />
                            <input type="text"
                                placeholder="Estado"
                                value={values.state}
                                name="state"
                                onChange={onChangeAddress}
                            />
                            <input type="text"
                                placeholder="Numero"
                                value={values.number}
                                name="number"
                                onChange={onChangeAddress}
                            />
                            <input type="text"
                                placeholder="Complemento"
                                value={values.complement}
                                name="complement"
                                onChange={onChangeAddress}
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
                                value={values.password_confirmation}
                                name="password_confirmation"
                                onChange={onChange}
                            />
                        </div>

                    </div>
                    <Link to="/login">
                        <button id="cancelar" type="button">VOLTAR</button>
                    </Link>
                    <button id="enviar-cadastro">ENVIAR</button>
                </form>
            </div>

        </div>


    )
};






