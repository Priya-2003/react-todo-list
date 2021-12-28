import React, { Component } from "react";

export class ClassClick extends Component {
  clickHandler() {
    console.log("hiii");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}> ClickMe!</button>
      </div>
    );
  }
}

export default ClassClick;
