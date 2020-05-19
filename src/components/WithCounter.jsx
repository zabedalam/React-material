import React from 'react'

const withCounter=WrappedComponent=>{
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          incrementCounter=()=>{
              this.setState(prevState=>{
                  return{count:prevState.count+1}
              })
          }
        render(){
            // return <OriginalComponent name="zabed"></OriginalComponent>
            return <WrappedComponent count={this.state.count} incrementCounter={this.incrementCounter}></WrappedComponent>

        }
    }
    return WithCounter 
}

export default withCounter