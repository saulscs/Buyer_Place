import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu,Input, Button } from 'antd';
const { Header} = Layout;
const Search = Input.Search;

export default class NavBar extends Component {
  render() {
    return (
      
      <Layout className="layout">
      <Header>
        <div className="logo"/>
        
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys =  "false"
          style={{ lineHeight: '50px' }}
        >
          
          <Search
      placeholder="Buscar"
      onSearch={value => console.log(value)}
      style={{ width: 400 }}
      />
        {/* login */}
          <Menu.Item key="Iniciar Sesión">
          <Link to= {'/login'}>
          Iniciar Sesión
          </Link>

          </Menu.Item>
          <Link to= {'/signup'}>
          <Button type="primary">Registrate</Button>
          </Link>
        </Menu>
      </Header>
      </Layout>
      
    )
  }
}

