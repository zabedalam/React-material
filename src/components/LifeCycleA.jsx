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
    
  render() {
      console.log("render method A")
    return (
      <>
      <div>Life Cycle A</div>
      <LifeCycleB></LifeCycleB>
        
      </>
    )
  }
}

export default LifeCycleA
