import React, { useState } from "react";
import { Queue, Stack } from "./fifoLifo.js";
import Fifo from "./Fifo.js";
import Lifo from "./Lifo.js";
import "../../../src/fifoLifo.css";

const queueL = new Queue();
const stackL = new Stack();

const FifoLifos = () => {
  const [firstQueue, setfirstQueue] = useState("");
  const [lastStack, setlastStack] = useState("");
  const [index, setIndex] = useState(0);

  const abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

  const handlePutIn = () => {
    queueL.addQueue(abc[index]);
    if (index === 0) {
      setfirstQueue(abc[index]);
    }
    stackL.addStack(abc[index]);
    setlastStack(abc[index]);
    setIndex(index + 1);
  };

  const handleTakeOut = () => {
    queueL.deleteQueue();
    setfirstQueue(queueL.queueArr[0]);
    stackL.deleteStack();
    setlastStack(stackL.stackArr[stackL.stackArr.length - 1]);
  };

  return (
    <div className="lifoContainer">
      {/* <div className="message">{message}</div> */}
      <div className="itemIn">
        <div className="item">Item to add: {abc[index]} </div>
        <button className="putIn" onClick={handlePutIn}>
          Put In
        </button>
      </div>
      <div className="lists">
        <h3>Queue</h3>
        <h3>Stack</h3>
        <Fifo queueL={queueL} />
        <Lifo stackL={stackL} />
      </div>
      <div className="itemOut">
        <div className="item">Item out of Queue: {firstQueue} </div>
        <div className="item">Item out of Stack: {lastStack}</div>
        <div classname="divOut">
          <button classname="takeOut" onClick={handleTakeOut}>
            Take Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default FifoLifos;
