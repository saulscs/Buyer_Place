import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Signup from './components/signup/signup'
import Login from './components/login/login'

const Router = () => (
  <Switch>
    <Route exact path = {'/'} component = {Home}/>
    <Route exact path ={'/signup'} component ={Signup}/>
    <Route exact path ={'/login'} component ={Login}/>
  </Switch>
)

export default Router