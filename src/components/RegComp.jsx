import React, { Component } from 'react'

export default class RegComp extends Component {
  render() {
      console.log("I m Reqcomponent")
    return (
      <>
        <div>I am  Regular Component {this.props.name}</div>
        
      </>
    )
  }
}
