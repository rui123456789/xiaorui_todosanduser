import React, { Component } from 'react'
import qs from 'qs'
export default class Detail extends Component {
    state = {
        detailArr:[
            {id:'001',content:'加油！中国',star:10,data:'2020-08-11 12:00'},
            {id:'002',content:'加油！世界',star:60,data:'2020-08-21 12:00'},
            {id:'003',content:'加油！自己',star:90,data:'2020-08-30 12:00'},
        ]
    }
    render() {
        // params方式接受参数
        // const {id,title} = this.props.match.params

        // search方式接受参数
        // let {search} = this.props.location
        // // 借助qs库，解析search参数
        // search = search.split('?')[1]
        // const {id,title} = qs.parse(search)

        // 第三种，获取location.state的参数
        const {id,title} = this.props.location.state

        // 检索数据
        const result = this.state.detailArr.find((detailObj)=>{
          return detailObj.id === id
        })
        return (
            <div>
                <div>ID:{id}</div>
                <div>标题:{title}</div>
                <div>内容:{result.content}</div>
                <div>点赞数:{result.star}</div>
                <div>日期:{result.data}</div>
            </div>
        )
    }
}
