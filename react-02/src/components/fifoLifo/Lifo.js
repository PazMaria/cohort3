import React from "react";

const Lifo = props => {
  const displayLifo = () => {
    return props.stackL.stackArr;
  };

  return (
    <div>
      <ul>{displayLifo()}</ul>
    </div>
  );
};

export default Lifo;
