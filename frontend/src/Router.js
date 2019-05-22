import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Signup from './components/signup/signup'
import Login from './components/login/login'
import Profile from './components/home/profile'
import Logout from './components/logout/logout'
import Macs from './components/Mac/allMacs'
import CardDetails from './components/Mac/CardDetail'
import Form from './components/publicar/form' 
import Iphone from './components/Iphone/allIphones'
import CardDetail from './components/Iphone/CardDetail'
import Ipad from './components/Ipad/allIpads'
import CardDetail2 from './components/Ipad/CardDetail'


const Router = () => (
  <Switch>
    <Route exact path = '/' component = {Home}/>
    <Route exact path ='/signup' component ={Signup}/>
    <Route exact path ='/login' component ={Login}/>
    <Route exact path = '/profile' component ={Profile}/>
    <Route exact path = '/logout' component={Logout}/>
    <Route exact path = '/publicar' component ={Form}/>
    <Route exact path = '/mac' component ={Macs}/>
    <Route exact path = '/mac/:id' component ={CardDetails}/>
    <Route exact path ='/iphone' component ={Iphone}/>
    <Route exact path = '/iphone/:id' component = {CardDetail}/>
    <Route exact path = '/ipad' component ={Ipad}/>
    <Route exact path = '/ipad/:id' component ={CardDetail2}/>
  </Switch>
)

export default Router