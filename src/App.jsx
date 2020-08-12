import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import './App.css'
import Title from './components/Title'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Title/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原始html中的写法，靠a标签切换页面 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              {/* react中 Link标签更改浏览器的历史记录，默认可以有action样式，但是是写死的，
                 如果想要点击切换样式显示高亮需要将标签更改为NavLink,配合activeClassName一起使用
              */}
              <NavLink className="list-group-item " activeClassName='demo 'to="/about">About</NavLink>
              <NavLink className="list-group-item" activeClassName="demo" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* Switch是让路由找到一个就不会再往下继续寻找，效率高，
                    如果不加，如果路由还会向下执行，如果有n个相同路径，那么就会显示多个
                */}
                <Switch>
                  {/* 注册路由 */}
                  {/* exact精准匹配 */}
                  <Route path="/about" exact component={About}/>
                  <Route path="/home" component={Home}/>
                  {/* 重定向，默认匹配到about */}
                  <Redirect to='/about' />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
