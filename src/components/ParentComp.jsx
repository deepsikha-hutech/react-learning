import React, { Component, PureComponent } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "User",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        ...this.state,
        name: "User",
      });
    }, 3000);
  }
  render() {
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/*<RegularComp name={this.state.name} />
        <PureComp name={this.state.name} */}
      </div>
    );
  }
}

export default ParentComp;
