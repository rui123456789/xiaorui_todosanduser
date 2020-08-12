import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
// class Title extends Component {
//     back = () =>{
//         this.props.history.goBack()
//     }
//     goto=()=>{
//         this.props.history.goForward()
//     }
//     render() {
//         return (
//             <div className="page-header">
//               <h2>React Router Demo</h2>
//               <button onClick={this.back}>《=回退</button>
//               <button onClick={this.goto}>前进=》</button>
//             </div>
//         )
//     }
// }
// export default withRouter(Title)

@withRouter
class Title extends Component {
        back = () =>{
            this.props.history.goBack()
        }
        goto=()=>{
            this.props.history.goForward()
        }
        render() {
            return (
                <div className="page-header">
                  <h2>React Router Demo</h2>
                  <button onClick={this.back}>《=回退</button>
                  <button onClick={this.goto}>前进=》</button>
                </div>
            )
        }
}
export default Title