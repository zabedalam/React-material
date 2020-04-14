import React,{Component} from "react"

class Welcome extends Component{
    render(){
        return (<div>
        <h1>Hello i am {this.props.name} a.k.a {this.props.hero}</h1>
        {this.props.children}
        </div>)

    }
}

export default Welcome