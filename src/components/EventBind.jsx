import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    //Mostly recomended from react official for 3 option
    //   this.clickHandler=this.clickHandler.bind(this)
  }

  // clickHandler(){
  //     this.setState({
  //         message:"Bye"
  //     })
  // }

  //For 3 option this is still on research level but also very good option
  clickHandler = () => {
    this.setState({
      message: "Bye",
    });
  };
  render() {
    return (
      <>
        <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
          {/* this is ok if dont need to re-render child */}
          {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
          {/* <button onClick={this.clickHandler}>Click</button> */}
          {/* related to arrow function */}
          <button onClick={this.clickHandler}>Click</button>
        </div>
      </>
    );
  }
}

export default EventBind;
