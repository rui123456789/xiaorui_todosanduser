import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from '../Detail'
export default class Message extends Component {
    state = {
      messageArr:[
        {id:'001',title:'消息1'},
        {id:'002',title:'消息2'},
        {id:'003',title:'消息3'},
      ]
    }
    back=()=>{
      // console.log(this.props)
      this.props.history.goBack()
    }
    goto=()=>{
      this.props.history.goForward()
    }

    // push查看
    pushShow=(id,title)=>{
      return () =>{
        // 编程式push导航+传递parmas参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`)
        
        //编程式push导航+传递search参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`) 

        // 编程式路由+传递location.state参数
        this.props.history.push('/home/message/detail',{id,title})
      }
     
    }

    // replcae查看
    replaceShow=(id,title)=>{
      return ()=>{
        // 编程式replace导航+传递parmas参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // 编程式replace导航 +传递search参数
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        // 编程式replace导航+传递location.state参数
        this.props.history.replace('/home/message/detail',{id,title})
      }
    }
    render() {
        return (
            <div>
            <ul>
              {
                this.state.messageArr.map(msg =>{
                  return (
                    <li key={msg.id}>
                      {/* params传参方式 */}
                      <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>message001</Link>
                      {/* search传参方式 */}
                      {/* <Link to={`/home/message/detail?id=${msg.id}&title=${msg.title}`}>message001</Link>&nbsp; */}
                      {/* localtion.state传参方式 */}

                      <button onClick={this.pushShow(msg.id,msg.title)}>push查看</button>&nbsp;
                      <button onClick={this.replaceShow(msg.id,msg.title)}>replace查看</button>
                    </li>
                  )
                })
              }
             
            </ul>
            
            <hr/>
            {/* 回退，前进按钮 */}
            <button onClick={this.back}>《=回退</button>&nbsp;
            <button onClick={this.goto}>前进=》</button>
            {/* params传参需要占位 */}
            {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}
            {/* search传参和localtion.statec传参正常写即可，不需要占位 */}
            <Route path="/home/message/detail" component={Detail}/>
           
          </div>
         
        )
    }
}
