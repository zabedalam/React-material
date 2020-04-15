import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleIncrement() {
    // this.state.count=this.state.count+1
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("call back", this.state.count);
    //   }
    // );
    // console.log(this.state.count)

    this.setState((prevState,props)=>({
        count:prevState.count+1
        // count:prevState.count+props.addvalue

    }
      ),() => {
        console.log("call back", this.state.count);
      }
      );
  }

  handleIncrementFive() {
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
  }

  render() {
    return (
      <>
        <div>Count- {this.state.count}</div>
        {/* <button onClick={()=>this.handleIncrement()}>Increment</button> */}
        <button onClick={() => this.handleIncrementFive()}>Increment</button>
      </>
    );
  }
}

export default Counter;
