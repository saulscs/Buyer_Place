import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu,Input, Button,Icon } from 'antd';
import axios from 'axios'
const { Header} = Layout;
const Search = Input.Search;

export default class NavBar extends Component {

  state = {
    isLogged: false,
    menu_class: "",
    search: ""
  }
  checkLogged = () => {
    let loggedUrl = "http://localhost:3000/auth/loggedin"
    axios
      .get(loggedUrl, { withCredentials: true })
      .then(res => {
        this.setState({ isLogged: true, user: res.data.user }, state => {})
      })
      .catch(e => console.log(e))
  }

  componentDidMount() {
    this.checkLogged()
  }

  setToggleTopMenuClass = () => {
    if (this.state.menu_class === "") {
      this.setState({
        menu_class: "toggled"
      })
    } else {
      this.setState({
        menu_class: ""
      })
    }
  }

  render() {
    let { isLogged } = this.state
    let top_menu_class = `top-menu ${this.state.menu_class}`
    return (
      <Layout className="layout" >
      <Header>
      
        <div className="logo"/>
        
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys =  "false"
          style={{ lineHeight: '45px', padding: '7px 5px',color: 'white' ,display: 'flex', justifyContent: 'space-around'}}
          className={top_menu_class}
        >
          <Menu.Item key="Home" >
      <Link to ={'/'}>
       <Icon type="home" theme="filled" />
       </Link>
      </Menu.Item>

          <Search
      placeholder="Buscar"
      onSearch={value => console.log(value)}
      style={{ width: 300 }}
      />
       
        
        {isLogged ? (
          <>
          <Menu.Item key="Iniciar Sesión">
          <Link to= {'/logout'}>
          Salir
          </Link>
          </Menu.Item>

          
          <Link to= {'/publicar'}>
          <Button type="primary">Publicar</Button>
          </Link>
          
          </>
        ) : (
          <>
          <Menu.Item key="Iniciar Sesión">
          <Link to= {'/login'}>
          Iniciar Sesión
          </Link>
          </Menu.Item>

          <Link to= {'/signup'}>
          <Button type="primary">Registrate</Button>
          </Link>
        </>
         
         )}
         </Header>
         </Layout>
        
      
    )
  }
}


