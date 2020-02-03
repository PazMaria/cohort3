import React from "react";

const Lifo = props => {
  const displayLifo = () => {
    // for (let i = 0; i < props.stackL.stackArr.length; i++) {
    //   return <li key={i}>{props.stackL.stackArr[i]}</li>;
    return props.stackL.stackArr;
    // }
  };

  return (
    <div>
      <li>{displayLifo()}</li>
    </div>
  );
};

export default Lifo;
