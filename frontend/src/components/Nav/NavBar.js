import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Input, Button} from "antd";
import axios from "axios";
const { Header } = Layout;
const Search = Input.Search;

export default class NavBar extends Component {
  state = {
    isLogged: false,
    menu_class: "",
    search: ""
  };
  checkLogged = () => {
    let loggedUrl = localStorage
    axios
      .get(loggedUrl, { withCredentials: true })
      .then(res => {
        this.setState({ isLogged: true, user: res.data.user }, state => {});
      })
      .catch(e => console.log(e));
  };

  componentDidMount() {
    this.checkLogged();
  }

  
  render() {
    let { isLogged } = this.state;
    
    return (
      <Layout className="layout">
        <Header>
          

          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys="false"
            style={{
              lineHeight: "45px",
              padding: "7px 5px",
              color: "white",
              display: "flex",
              justifyContent: "space-around"
            }}
            
          >
            <Menu.Item key="Logo">
              <Link to={"/"}>
              <img className="logo" alt="logo" src="logo2.PNG" ></img>
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
                  <Link to={"/logout"}>Salir</Link>
                </Menu.Item>

                <Link to={"/publicar"}>
                  <Button type="primary">Publicar</Button>
                </Link>
              </>
            ) : (
              <>
                <Menu.Item key="Iniciar Sesión">
                  <Link to={"/login"}>Iniciar Sesión</Link>
                </Menu.Item>

                <Link to={"/signup"}>
                  <Button type="primary">Registrate</Button>
                </Link>
              </>
            )}
          </Menu>
        </Header>
      </Layout>
    );
  }
}
