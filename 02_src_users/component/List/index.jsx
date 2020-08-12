import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
    render() {
        const {
            isFirst,//是不是第一次展示
            isLoading,//标识是否处于加载中
            error,//错误信息
            users 
        } = this.props
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
