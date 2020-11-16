import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import StoreProvider from './components/Store/Provider'
import RoutesPrivate from './components/Routes/Private/Private'

import Login from './components/login/Login'
import Cadastro from './components/User/Cadastro/Cadastro'
import Home from './pages/Home'




const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Route path="/login" component={Login} exact />
      <Route path="/user/cadastro" component={Cadastro} exact />
      <RoutesPrivate path="/home" component={Home} exact />
      <RoutesPrivate path="/" component={Home} exact />
   
      {/* <RoutesPrivate path="/*"component={Home} exact  /> */}
      {/* <RoutesPrivate path="/user/cadastro" component={Cadastro} exact /> */}
      {/* <RoutesPrivate path="/*" component={div} exact /> */}

    </StoreProvider>

  </Router>
)


export default PagesRoot;