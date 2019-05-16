import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'antd';


class Home extends React.Component {
  render() {
    return (
      <>
      <Layout>
        
          <header className="cover">
        <h1>Home</h1>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
          </header>
        
        </Layout>
      </>
    )
  }
}

export default Home


