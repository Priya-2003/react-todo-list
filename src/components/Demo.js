import React, { Component } from "react";
import Dem1 from "./Dem1";

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome vistors",
    };
  }

  changeHandler() {
    this.setState({
      message: "data changes",
    });
  }

  render() {
    return (
      <div>
        <Dem1 text={"hello everyone"} />
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeHandler()}> subscribe</button>
      </div>
    );
  }
}

export default Demo;
