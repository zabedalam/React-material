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
        <button onClick={incrementCounter}>{this.props.name} count {count} times</button>
      </>
    )
  }
}

export default withCounter(ClickCounter,5)//instead of exporting clickCounter component we are exporting higher order component
