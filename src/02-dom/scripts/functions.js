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
    return newNod.nodeName.toLowerCase();
    // return "";
  }
};

export default functions;
