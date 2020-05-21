import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    
    // incrementHandler=()=>{
    //     this.setState((prevState=>{
    //         return{count:prevState.count+1}
    //     }))
    // }
  render() {
      // const {count}=this.state
      const {count,incrementHandler}=this.props

    return (
      <>
        <button onClick={incrementHandler}>Count {count} times</button>
      </>
    )
  }
}

export default ClickCounterTwo
