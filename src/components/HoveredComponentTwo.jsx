import React, { Component } from 'react'

class HoveredComponentTwo extends Component {
// constructor(props) {
//   super(props)

//   this.state = {
//      count:0
//   }
// }

// incrementHandler=()=>{
//     this.setState((prevState)=>{
//         return {count:prevState.count+1}
//     })
// }

  render() {
      // const {count}=this.state
      const {count,incrementHandler}=this.props

    return (
      <>
        <h1 onMouseOver={incrementHandler}>Hovered {count} times</h1>
      </>
    )
  }
}

export default HoveredComponentTwo
