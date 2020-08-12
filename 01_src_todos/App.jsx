//引入react核心库
import React,{Component} from 'react'
import './App.css'
import Add from './component/Add'
import List from './component/List'
import Footer from './component/Footer'
import {nanoid} from 'nanoid'

// 定义并暴露App组件
export default class App extends Component{
  state = {
    todos:[
      {id:'001',title:'吃饭',completed:false},
      {id:'002',title:'睡觉',completed:true},
      {id:'003',title:'打豆豆',completed:false},
    ]
  }
  // 添加一个todo
  addTodo=(title)=>{
    // 准备一个todo对象
    const todo = {id:nanoid(),title:title,completed:false}
    // 向App的state中向前追加一个todo
    this.setState({todos:[todo,...this.state.todos]})
  }
  /**
   * 勾选某一个todo
   * @author:xiaorui
   * @param {*} id todod的id
   * @param {*} completed 标识todo是否已完成
   */
  checkTodo=(id,completed)=>{
    // 遍历数组中每个对象
    const todos = this.state.todos.map((todo)=>{
      // 如果点击选中的id和遍历中的id是一样的，那么复制一份新的，把选中状态的一起返回
      if(todo.id === id) return {...todo,completed}
      // 如果没有选中，那么久返回自己
      return todo
    })
    // 更新状态 重名了后面可以不写
    this.setState({todos})
  }

  // 删除一个todo
  deleteTodo=(id)=>{
    // 使用findIndex实现(效率高)
    const index = this.state.todos.findIndex((todo) => {
     
      return todo.id === id
    })
   
    const todos = [...this.state.todos]
    todos.splice(index,1)
    this.setState({todos})
  }

  // 全选所有todos
  chekeAll=(checked)=>{
    const todos = this.state.todos.map((todo) =>{
      return {...todo,completed:checked}
    })
    this.setState({todos})
  }
  // 清除所有选中的todo
  clearAllCompleted=()=>{
    // 将状态中的所有数据，遍历一遍，
    const todos = this.state.todos.filter((todo)=>{
      // 如果当前todo没有选中，直接返回
      if(!todo.completed) return todo
    })
    // 更新状态
    this.setState({todos})
  }
	render(){
    // 将todos从this.state中结构出来
    const {todos} = this.state
    return(
      <div className="todo-container">
      <div className="todo-wrap">
        <Add addTodo={this.addTodo} />
        <List 
          todos={todos} 
          checkTodo={this.checkTodo}
          deleteTodo={this.deleteTodo}  
        />
        <Footer todos={todos} chekeAll={this.chekeAll} clearAllCompleted={this.clearAllCompleted}/>
      </div>
    </div>
    )
  }
}