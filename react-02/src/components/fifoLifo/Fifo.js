import React from "react";

const Fifo = props => {
  //   const displayFifo = () => {
  //     return props.queueL.queueArr;
  //   };

  return (
    <div>
      {/* <ul>{displayFifo()}</ul> */}
      {props.queueL.queueArr.map(data => (
        <li>{data}</li>
      ))}
    </div>
  );
};

export default Fifo;
