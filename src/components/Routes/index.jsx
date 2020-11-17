import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import StoreProvider from '../../components/Store/Provider';
import RoutesPrivate from '../../components/Routes/Private/Private';
import Login from '../../components/login/Login';
import Cadastro from '../../components/User/Cadastro/Cadastro';
import Home from '../../pages/Home';
import Pem from '../../pages/importar/Importar'

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Route path="/login" component={Login} exact />
      <Route path="/user/cadastro" component={Cadastro} exact />
      <RoutesPrivate path="/" component={Home} exact />
      <RoutesPrivate path="/upload" component={Pem} exact />
    </StoreProvider>
  </Router>
)


export default PagesRoot;