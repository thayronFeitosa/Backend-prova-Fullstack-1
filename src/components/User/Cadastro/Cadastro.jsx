import React, { useState, useContext } from 'react';

import './css/Cadastro.css';
import image from '../../../img/img-celular.svg'
function initialState() {
    return {
        name: '', cpf: '', email: '', birthdate: '', password: ''
        , nunber: '', street: '', city: '', state: '', number: '', complement: ''
    };
}

async function onSubmit(event) {
    try {
        event.preventDefault();

        console.log(event)
    } catch (err) {
        alert(err)
    }



}

const UserLogin = () => {
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

    async function onSubmit(event) {
        
        try {
            event.preventDefault();


        } catch (err) {
            alert(err)
        }

    }

    return (
        <div id="cadastro-user-row" >
            <img id="cadatro-image" src={image} alt="" />
            <div id="cadastro-user-form" className="content-box">
                <form onSubmit={onSubmit}>
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
                            <input type="password" placeholder="Confirmar senha" />
                        </div>

                    </div>
                    <input id="enviar-cadastro" type="submit" value="Enviar" />

                </form>
            </div>

        </div>


    )
};

export default UserLogin;


    // <div id="cadastro-user-row">
    //     <div id="cadastro-user-form">
    //         <form action="">
    //             <div id="cadastro-user-dados-pessoais">
    //                 <div id="cadastro-user-home">
    //                     <label htmlFor="">Dassos pessoais</label>

    //                 </div>
    //                 <div id="cadastro-user-name">

    //                     <input type="text" placeholder="Nome" />
    //                 </div>

    //                 <div id="cadastro-user-p2">
    //                     <input type="text" placeholder="CPF" maxlength="11" name="cpf" value={values.cpf} />
    //                     <input type="email" placeholder="Email" />
    //                     <input type="date" placeholder="Data de nascimento" />
    //                     <input type="text" placeholder="telefone" max="14" />
    //                 </div>

    //                 <div id="cadastro-user-password">
    //                     <input type="password" placeholder="Password" />
    //                     <input type="password" placeholder="Confirm password" />
    //                 </div>


    //             </div>



    //             <div id="cadastro-user-endereco">
    //                 <div id="cadastro-user-telefone">
    //                     <label htmlFor="">Endereço</label>
    //                 </div>

    //                 <div>
    //                     <input type="text" placeholder="street" />
    //                     <input type="text" placeholder="city" />
    //                     <input type="text" placeholder="state" />
    //                     <input type="text" placeholder="number" />
    //                     <input type="text" placeholder="complement" />
    //                 </div>

    //             </div>
    //         </form>
    //     </div>

    // </div>





