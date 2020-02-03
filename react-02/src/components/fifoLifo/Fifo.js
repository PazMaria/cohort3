import React from "react";

const Fifo = props => {
  const displayFifo = () => {
    return props.queueL.queueArr;
  };

  return (
    <div>
      <ul>{displayFifo()}</ul>
    </div>
  );
};

export default Fifo;
