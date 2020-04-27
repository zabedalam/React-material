import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'

export default class componentName extends PureComponent {
//   static propTypes = {

//   }

  render() {
      console.log("I m from purecomponent")
    return (
      <>
        <div>I am pure component {this.props.name}</div>
      </>
    )
  }
}
