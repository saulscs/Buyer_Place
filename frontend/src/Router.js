import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Signup from './components/signup/signup'
import Login from './components/login/login'
import Profile from './components/home/profile'
import Logout from './components/logout/logout'

const Router = () => (
  <Switch>
    <Route exact path = {'/'} component = {Home}/>
    <Route exact path ={'/signup'} component ={Signup}/>
    <Route exact path ={'/login'} component ={Login}/>
    <Route exact path = {'/profile'} component ={Profile}/>
    <Route exact path = {'./logout'} component={Logout}/>
  </Switch>
)

export default Router