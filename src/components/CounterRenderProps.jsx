import React, { Component } from 'react'

class CounterRenderProps extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      
      incrementHandler=()=>{
          this.setState((prevState=>{
              return{count:prevState.count+1}
          }))
      }
  render() {
    return (
      <>
        {/* {this.props.render(this.state.count,this.incrementHandler)} */}
        {this.props.children(this.state.count,this.incrementHandler)}

      </>
    )
  }
}

export default CounterRenderProps
