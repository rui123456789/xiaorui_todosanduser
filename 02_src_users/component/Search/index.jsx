import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    state={
        keyWord:'' //输入的关键字
    }
    saveKeyWord=(event)=>{
        // 获取用户的输入信息
        const {target:{value:keyWord}} = event
        // 进入维护状态
        this.setState({keyWord})
    }
    // 点击按钮
    hanldleSearch=()=>{
        // 获取用户输入的信息
        // alert(this.state.keyWord)
        // 1.获取用户输入
        const {keyWord} = this.state
        const {updateAppState} = this.props
         // 2.发送请求前，展示加载界面
         updateAppState({isLoading:true,isFirst:false})
        //3. 发送请求
        axios.get(`/api/search/users?q=${keyWord}`).then(
            response=>{
                updateAppState({users:response.data.items,isLoading:false})
            },
            err=>{
                updateAppState({error:err.message,isLoading:false})
            })
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                <input onChange={this.saveKeyWord} type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={this.hanldleSearch}>Search</button>
                </div>
            </section>
        )
    }
}
