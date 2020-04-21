import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Alam"
      }
      console.log("Constructor A")
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedstatefromprops A")
        return null
    }

    componentDidMount(){
        console.log("Component Did Mount A")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate A")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate A")
        return null
    }
    componentDidUpdate(){
        console.log("componentDidUpdate A")
    }

    changeState=()=>{
        this.setState({
            name:"Zabedul"
        })
    }
    
  render() {
      console.log("render method A")
    return (
      <>
      <div>Life Cycle A</div>
      <button onClick={this.changeState}>State Change</button>
      <LifeCycleB></LifeCycleB>
        
      </>
    )
  }
}

export default LifeCycleA
