import React from "react";

class OddComp extends React.Component {
  render() {
    if (this.props.counter % 2 == 0) {
      return null;
    } else {
      return (
        <div>
          <h1>Odd Component</h1>
        </div>
      );
    }
  }
}

export default OddComp;
