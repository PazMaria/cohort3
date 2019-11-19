import React, { Component } from "react";

class EvenComp extends Component {
  render() {
    if (this.props.counter % 2 == 0) {
      return (
        <div>
          <h1>Even Component</h1>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default EvenComp;
