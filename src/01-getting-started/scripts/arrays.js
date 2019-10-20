//Array functions

const arrayFunctions = {
  addArrayF: val1 => {
    let msg;
    if (isNaN(val1) == true) {
      msg = "Input is not a valid number.";
    } else {
      msg = "Number has been added to the array.";
    }
    return msg;
    // return 0;
  },

  totalArrayF: arr => {
    let tot;
    tot = arr.reduce(function(total, num) {
      return total + num;
    });
    // console.log(tot);
    return tot;
    // return 0;
  },

  clearArrayF: arr => {
    arr.length = 0; //set array length to zero to clear array
    return arr;
  }
};

export default arrayFunctions;
