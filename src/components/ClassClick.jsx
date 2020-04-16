import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandle(){
        console.log("Button")
    }
  render() {
    return (
      <>
       <div>
           <button onClick={this.clickHandle}>Click me </button>
    </div> 
      </>
    )
  }
}

export default ClassClick

