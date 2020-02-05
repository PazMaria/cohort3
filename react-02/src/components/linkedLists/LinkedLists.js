import React, { useState, useContext } from "react";
import "../../../src/linkedList.css";
import { LinkedList } from "./scripts/linkedList";
import { ThemeContext } from "../context/context";

const list = new LinkedList();

const LinkedLists = () => {
  const { isLightTheme, green, white } = useContext(ThemeContext);
  const theme = isLightTheme ? green : white;
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const [position, setPosition] = useState("List is empty");
  let [message, setMessage] = useState("");

  const handleAdd = () => {
    if (subject !== "" && amount !== "") {
      list.insertNode(subject, Number(amount));
      setPosition(list.current.subject);
      setSubject("");
      setAmount("");
      setMessage("");
    } else {
      setMessage("Please enter subject and amount");
    }
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
    if (list.current) {
      list.firstPosition();
      setPosition(list.current.subject);
    } else {
      setPosition("List is empty");
    }
  };

  const handlePrevious = () => {
    if (list.current) {
      list.previousNode();
      setPosition(list.current.subject);
    } else {
      setPosition("List is empty");
    }
  };

  const handleNext = () => {
    if (list.current) {
      list.nextNode();
      setPosition(list.current.subject);
    } else {
      setPosition("List is empty");
    }
  };

  const handleLast = () => {
    if (list.current) {
      list.lastPosition();
      setPosition(list.current.subject);
    } else {
      setPosition("List is empty");
    }
  };

  const handleTotal = () => {
    let tot = list.totalAmount();
    setMessage(tot);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleDelete = () => {
    if (list.current) {
      list.deleteNode();
      if (list.current) {
        setPosition(list.current.subject);
      } else {
        setPosition("List is empty");
      }
    }
  };

  return (
    <div className="linkContainer" style={{ background: theme.bgDiv }}>
      <div className="linkItem">
        Item:
        <input
          type="text"
          id="idSubject"
          value={subject}
          onChange={event => setSubject(event.target.value)}
        />
        Amount:
        <input
          type="number"
          id="idAmount"
          value={amount}
          onChange={event => setAmount(event.target.value)}
        />
        <input
          className="addNode"
          type="button"
          value="Add Item"
          onClick={handleAdd}
          style={{ color: theme.text, background: theme.bgBut }}
        />
      </div>
      <div className="message">{message}</div>
      <div className="current">Current Item: {position}</div>
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
        <input
          className="buttonNode"
          type="button"
          value="Total"
          onClick={handleTotal}
        />
        <input
          className="delNode"
          type="button"
          value="Delete Item"
          onClick={handleDelete}
          style={{ color: theme.text, background: theme.bgBut }}
        />
      </div>
      <div className="list">
        <ol>{displayList()}</ol>
      </div>
    </div>
  );
};

export default LinkedLists;
