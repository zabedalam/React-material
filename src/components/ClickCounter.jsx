import React, { Component } from 'react'
// import updatedComponent from './WithCounter'
import withCounter from './WithCounter'

class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    // incrementCounter=()=>{
    //     this.setState(prevState=>{
    //         return{count:prevState.count+1}
    //     })
    // }
  render() {
    //   const {count}=this.state
    const {count,incrementCounter}=this.props
    return (
      <>
        <button onClick={incrementCounter}> count {count} times</button>
      </>
    )
  }
}

export default withCounter(ClickCounter)//instead of exporting clickCounter component we are exporting higher order component
