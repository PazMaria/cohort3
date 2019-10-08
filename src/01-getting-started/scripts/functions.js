const functions = {
  size: num => {
    if (num < 0) return "negative";
    if (num < 10) return "small";
    if (num < 20) return "medium";
    if (num > 100) return "extra large";
    return "large";
  },

  add: (num1, num2) => {
    return num1 + num2;
  },

  subtract: (num1, num2) => {
    return num1 - num2;
  }
};

export default functions;
