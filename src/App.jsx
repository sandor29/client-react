/**
 * App
 */

import React from 'react'
import { Route } from 'react-router-dom';

import './App.css'

import NavHeader from './components/nav/NavHeader';
import NavFooter from './components/nav/NavFooter';

import UsersList from './components/chat/UsersList';

/**
 * Router
 */

import Portada from './views/Portada';
import Ajustes from './views/Ajustes';
import Ayuda from './views/Ayuda';

const App = () => {

  return (
    <div>
      <NavHeader />

      <div>
        <Route exact path='/' component={Portada} />
        <Route path='/ajustes' component={Ajustes} />
        <Route path='/ayuda' component={Ayuda} />
      </div>

      <UsersList />

      <NavFooter />
    </div>
  )
}

export default App
