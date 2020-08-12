import React, { Component } from 'react'
import './App.css'
import Search from './component/Search'
import List from './component/List'
export default class App extends Component {
  state={
    isFirst:true,//是不是第一次展示
    isLoading:false,//标识是否处于加载中
    error:'',//错误信息
    users:[] // 用户列表
  }
  /**
   * 更新App的state状态，将整个状态封装为obj传入，
   * 接收的时候，把他复制一份，就不算直接修改状态
   * obj是state的对象形参
   */
  updateAppState=(obj)=>{
    this.setState({...obj})
  }
  render() {
    return (
      <div >
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
          {/* 将state整体传进来 */}
          <List {...this.state}/>  
       </div>
      </div>
    )
  }
}
