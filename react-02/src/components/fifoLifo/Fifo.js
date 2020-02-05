import React from "react";

const Fifo = props => {
  return (
    <div>
      {props.queueL.queueArr.map(data => (
        <li>{data}</li>
      ))}
    </div>
  );
};

export default Fifo;
