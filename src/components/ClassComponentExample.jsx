import React, { Component } from "react";

export class ClassComponentExample extends Component {
  randomNumberVariable = new Date().getTime();
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: new Date().getTime(),
    };
  }
  setNumberState() {
    const newNum = new Date().getTime();
    console.log(" randomNumberState  :", { newNum });
    this.setState({ randomNumber: newNum });
  }

  setNumberVariable() {
    const newNum = new Date().getTime();
    console.log(" randomNumberVariable :", { newNum });
    this.randomNumberVariable = newNum;
  }

  componentDidMount() {
    // this will execute on first page load
    console.log("\ncomponent mountedd succesfuly--------");
  }

  componentDidUpdate(prevProps, prevState) {
    // this will execute when state variable change
    console.log("\ncomponent state updated succesfuly--------");
    console.log({ prevProps, prevState });
  }

  componentWillUnmount() {
    // this will execute when component will unmount
    console.log("\ncomponent about to remove from dom--------");
  }

  render() {
    return (
      <>
        <div>{this.randomNumberVariable}</div>
        <button
          onClick={() => this.setNumberVariable()}
          style={{ border: "1px solid black", margin: "2rem" }}
        >
          Change Random number variable
        </button>

        <div>{this.state.randomNumber}</div>
        <button
          onClick={() => this.setNumberState()}
          style={{ border: "1px solid black", marginTop: "2rem" }}
        >
          Change Random number state
        </button>
      </>
    );
  }
}

export default ClassComponentExample;
