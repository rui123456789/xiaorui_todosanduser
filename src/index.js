//引入React核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
//引入“外壳”组件——App
import App from './App'

ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    ,document.getElementById('root'))