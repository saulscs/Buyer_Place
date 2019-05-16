import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu,Input, Button,Icon } from 'antd';

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
          style={{ lineHeight: '45px', padding: '7px 5px',color: 'white' ,display: 'flex', justifyContent: 'space-around'}}
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


