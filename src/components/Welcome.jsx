import React,{Component} from "react"

class Welcome extends Component{
    render(){
        return (<div>
        <h1>Hello i am {this.props.name} a.k.a {this.props.hero}</h1>
        {this.props.children}
        </div>)

    }
}

//Destructuring
// class Welcome extends Component{
//     render(){
//         const {name,hero}=this.props
//         //Destructuring state
//         const {state1,state2}=this.state
//         return (<div>
//         <h1>Hello i am {name} a.k.a {hero}</h1>
//         {this.props.children}
//         </div>)

//     }
// }

export default Welcome