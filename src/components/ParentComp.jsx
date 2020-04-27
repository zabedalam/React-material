import React, { Component,PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";


export default class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Zabed",
    };
  }
  componentDidMount() {
    setInterval(() => {
        this.setState({
            name:"Zabed"
        })
    }, 2000);
  }

  render() {
      console.log("I m from Parent component")
    return <>
    {/* <PureComp name={this.state.name}></PureComp>
    <RegComp name={this.state.name}></RegComp> */}
    <MemoComp name={this.state.name}></MemoComp>
    </>;
  }
}
