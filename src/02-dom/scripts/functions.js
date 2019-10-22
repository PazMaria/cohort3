const functions = {
  eventFunc: eve => {
    return eve.target;
  },

  listChild: ele => {
    return ele.children;
    // return 0;
  },

  addNod: (tag, txt) => {
    const newNod = document.createElement(tag);
    newNod.textContent = txt;
    return newNod;
    // return newNod.nodeName.toLowerCase();
    // return "";
  },

  addCard: (node, counter) => {
    const newCard = document.createElement("div");
    const addBe = document.createElement("input");
    const addAf = document.createElement("input");
    const del = document.createElement("input");
    node.appendChild(newCard);
    newCard.className = "card";
    newCard.setAttribute("counter", counter);
    newCard.textContent = `Card ${counter}`;
    addBe.setAttribute("type", "button");
    addBe.setAttribute("class", "add");
    addBe.setAttribute("id", "addBe");
    addBe.setAttribute("value", "Add Before");
    addAf.setAttribute("type", "button");
    addAf.setAttribute("class", "add");
      addBe.setAttribute("id", "addAf");
    addAf.setAttribute("value", "Add After");
    del.setAttribute("type", "button");
    del.setAttribute("class", "del");
      addBe.setAttribute("id", "del");
    del.setAttribute("value", "Delete");
    newCard.appendChild(addBe);
    newCard.appendChild(addAf);
    newCard.appendChild(del);

    return counter;
  },

  addBefore: 
};

export default functions;
