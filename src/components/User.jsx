import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <>
        {this.props.render(false)}
      </>
    )
  }
}

export default User
