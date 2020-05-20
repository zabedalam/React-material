import React from "react";

const withCounter = (WrappedComponent,incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCounter = () => {
      this.setState((prevState) => {
        // return { count: prevState.count + 1 };
        return { count: prevState.count + incrementNumber };

      });
    };
    render() {
      // return <OriginalComponent name="zabed"></OriginalComponent>
      console.log(this.props.name);
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
          {...this.props}
        ></WrappedComponent>
      );
    }
  }
  return WithCounter;
};

export default withCounter;
