import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'
export default class List extends Component {
  state={
    isFirst:true,//是不是第一次展示
    isLoading:false,//标识是否处于加载中
    error:'',//错误信息
    users:[] // 用户列表
  }
  // 组件挂载完毕
  componentDidMount(){
    // 订阅消息
    this.token= PubSub.subscribe('UPDATE_LIST_STATE',(_,stateObj)=>{
      // console.log(stateObj)
      this.setState(stateObj)
    })
  }
  // 组件将要销毁
  componentWillUnmount(){
    //取消订阅
    PubSub.unsubscribe(this.token)
  }
    render() {
        const {
            isFirst,//是不是第一次展示
            isLoading,//标识是否处于加载中
            error,//错误信息
            users 
        } = this.state
        return (
            <div className="row">
              {
                isFirst ? 
                  <h1>输入关键字，随后点击搜索</h1> :
                isLoading ?
                  <h1>loading.....</h1> :
                error ? 
                  <h1 style={{color:'red'}}>{error}</h1> :
                users.map((user)=>{
                    return (
                        <div key={user.id} className="card">
                        <a href={user.html_url} target="_blank">
                            <img src={user.avatar_url} style={{width:'100px'}}/>
                        </a>
                        <p className="card-text">reactjs</p>
                        </div>
                    )
                })      
              }
            </div>
    
        )
    }
}
