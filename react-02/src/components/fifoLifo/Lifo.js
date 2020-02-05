import React from "react";

const Lifo = props => {
  return (
    <div>
      {props.stackL.stackArr.map(data => (
        <li>{data}</li>
      ))}
    </div>
  );
};

export default Lifo;
