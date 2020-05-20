import React, { Component } from 'react'
// import updatedComponent from './WithCounter'
import withCounter from './WithCounter'
class HoverComponent extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
    //   incrementCounter=()=>{
    //       this.setState(prevState=>{
    //           return{count:prevState.count+1}
    //       })
    //   }
  render() {
    //   const {count}=this.state
    const {count,incrementCounter}=this.props
    return (
      <>
        <div>
            <h1 onMouseOver={incrementCounter}> Hovered {count} times</h1>
        </div>
      </>
    )
  }
}

export default withCounter(HoverComponent,10)//instead of exporting clickCounter component we are exporting higher order component
