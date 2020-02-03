import React from "react";

const Fifo = props => {
  const displayFifo = () => {
    // for (let i = 0; i < props.queueL.queueArr.length; i++) {
    //   return <li key={i}>{props.queueL.queueArr[i]}</li>;

    // }
    return props.queueL.queueArr;
  };

  return (
    <div>
      <ul>{displayFifo()}</ul>
    </div>
  );
};

export default Fifo;
