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

  //Working with Cards

  cardNum: 0,

  addCard: node => {
    functions.cardNum++;
    const newCard = document.createElement("div");
    const addBe = document.createElement("input");
    const addAf = document.createElement("input");
    const del = document.createElement("input");

    node.appendChild(newCard);
    newCard.className = "card";
    newCard.setAttribute("counter", functions.cardNum);
    newCard.textContent = `Card ${functions.cardNum}`;

    addBe.setAttribute("type", "button");
    addBe.setAttribute("class", "add");
    addBe.setAttribute("id", "addBe");
    addBe.setAttribute("value", "Add Before");
    addAf.setAttribute("type", "button");
    addAf.setAttribute("class", "add");
    addAf.setAttribute("id", "addAf");
    addAf.setAttribute("value", "Add After");
    del.setAttribute("type", "button");
    del.setAttribute("class", "del");
    del.setAttribute("id", "del");
    del.setAttribute("value", "Delete");

    newCard.appendChild(addBe);
    newCard.appendChild(addAf);
    newCard.appendChild(del);

    return newCard;
  },

  addBeF: (card, parent) => {
    parent.insertBefore(functions.addCard(parent), card);
  },

  addAf: (card, parent) => {
    parent.insertBefore(functions.addCard(parent), card.nextSibling);
  },

  delF: card => {
    card.remove();
  }
};

export default functions;
