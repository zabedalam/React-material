import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Alam"
      }
      console.log("Constructor B")
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedstatefromprops B")
        return null
    }

    componentDidMount(){
        console.log("Component Did Mount B")
    }
    
  render() {
      console.log("render method B")
    return (
      <>
      <div>Life Cycle B</div>
      
        
      </>
    )
  }
}

export default LifeCycleB
