import React, { useState } from "react";
import "../../../src/linkedList.css";
import { LinkedList } from "./scripts/linkedList";

const list = new LinkedList();

const LinkedLists = () => {
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const [position, setPosition] = useState("List is empty");

  const handleAdd = () => {
    list.insertNode(subject, amount);
    setPosition(list.current.subject);
    setSubject("");
    setAmount("");
  };

  const displayList = () => {
    if (!list.head) {
      return null;
    } else {
      const listNodes = [];
      let node = list.head;
      let counter = 1;
      while (node) {
        listNodes.push(
          <li key={counter}>
            {node.subject}: {node.amount}
          </li>
        );
        node = node.forwardNode;
        counter++;
      }
      return listNodes;
    }
  };

  const handleFirst = () => {
    list.firstPosition();
    setPosition(list.current.subject);
  };

  const handlePrevious = () => {
    list.previousNode();
    setPosition(list.current.subject);
  };

  const handleNext = () => {
    list.nextNode();
    setPosition(list.current.subject);
  };

  const handleLast = () => {
    list.lastPosition();
    setPosition(list.current.subject);
  };

  const handleDelete = () => {
    list.deleteNode();
    if (list.current) {
      setPosition(list.current.subject);
    } else {
      setPosition("List is empty");
    }
  };

  return (
    <div className="linkContainer">
      <div className="linkItem">
        Item:
        <input
          type="text"
          id="idSubject"
          // value={subject}
          // onChange={itemChange}
          value={subject}
          onChange={event => setSubject(event.target.value)}
        />
        Amount:
        <input
          type="number"
          id="idAmount"
          // value={amount}
          // onChange={amountChange}
          value={amount}
          onChange={event => setAmount(event.target.value)}
        />
        <input
          className="addNode"
          type="button"
          value="Add Item"
          onClick={handleAdd}
        />
      </div>
      <div className="current">Current Item:{position}</div>
      <div className="linkFunctions">
        <input
          className="buttonNode"
          type="button"
          onClick={handleFirst}
          value="First"
        />
        <input
          className="buttonNode"
          type="button"
          value="Previous"
          onClick={handlePrevious}
        />
        <input
          className="buttonNode"
          type="button"
          value="Next"
          onClick={handleNext}
        />
        <input
          className="buttonNode"
          type="button"
          value="Last"
          onClick={handleLast}
        />
        <input className="buttonNode" type="button" value="Total" />
        <input
          className="delNode"
          type="button"
          value="Delete Item"
          onClick={handleDelete}
        />
      </div>
      <div className="list">
        <ol>{displayList()}</ol>
      </div>
    </div>
  );
};

export default LinkedLists;
