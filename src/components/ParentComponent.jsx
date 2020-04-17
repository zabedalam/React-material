import React, { Component } from 'react'
import ChildComponent from "./ChildComponent"

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"parent"
      }
      this.greetParent=this.greetParent.bind(this)
    }

    // greetParent(){
    //     alert(`Hello ${this.state.parentName}`)
    // }
    // if u wanna pass a parameter from child

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
  render() {
    return (
      <>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </>
    )
  }
}

export default ParentComponent
