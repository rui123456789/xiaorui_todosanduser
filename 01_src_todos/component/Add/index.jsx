import React, { Component } from 'react'
import './index.css'
export default class Add extends Component {
    // 键盘回车事件
    hanldekeyUp=(event)=>{
        // 从App传递过来的props中获取addTodo
        const {addTodo}=this.props
        // 结构
        const {target:{value}} = event
        // 若是按下了回车
        if(event.keyCode === 13){
            if(!value.trim()){
                alert('不能为空')
                return
            }
            // 调用App传过来的addTodo去添加一个todo
            addTodo(value.trim())
            // 清空用户的输入
            event.target.value=''
        }
    }
    render() {
        return (
            <div className="todo-header">
                <input 
                  onKeyUp={this.hanldekeyUp}
                  type="text"
                  placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
