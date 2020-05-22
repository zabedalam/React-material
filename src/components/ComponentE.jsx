import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
  render() {
    return (
      <>
      component E context {this.context}

        <ComponentF></ComponentF>
      </>
    )
  }
}
ComponentE.contextType=UserContext

export default ComponentE
