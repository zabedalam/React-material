import React, { Component } from "react";

class UserGreetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    //   4 types of conditional rendering
    // short circuit operator
    return this.state.isLoggedIn && <div>Welcome Alam</div>;
    //   ternary conditional operator,most recomended

    // return (this.state.isLoggedIn?(<div>Welcome Alam</div>):(<div>Thank you so much</div>))

    // elements variable conditional rendering
    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Alam</div>
    // }else
    // {
    //     message=<div>Thank you so much</div>
    // }
    // return (
    //     <div>{message}</div>
    // )
    // if else conditional
    //   if(this.state.isLoggedIn){
    //       return<div>Welcome Alam</div>
    //   }else
    //   {return <div>Thank you so much</div>
    //   }

    // return (
    //   <>
    //     <div>Welcome Alam</div>
    //     <div>Thank you so much</div>
    //   </>
    // )
  }
}

export default UserGreetings;
