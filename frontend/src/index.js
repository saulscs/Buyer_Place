import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'
import 'toastr/build/toastr.css'
import Navbar from './components/Nav/NavBar'


const Router = () => (
  <BrowserRouter>
  <Navbar/>
    <App />
  </BrowserRouter>
)

ReactDOM.render(<Router />, document.getElementById('root'))

serviceWorker.unregister()
