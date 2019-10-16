//Calculator functions

const operandFunctions = {
  addFunc: (val1, val2) => {
    let res = 0;
    res = val1 + val2;
    return res;
    // return 0;
  },

  minusFunc: (val1, val2) => {
    let res = 0;
    res = val1 - val2;
    return res;
    // return 0;
  },

  timesFunc: (val1, val2) => {
    let res = 0;
    res = val1 * val2;
    return res;
    // return 0;
  },

  divFunc: (val1, val2) => {
    let res = 0;
    res = val1 / val2;
    return res;
    // return 0;
  }
};

export default operandFunctions;
