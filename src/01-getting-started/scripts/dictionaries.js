//Dictionary Functions

const dictionaryFunctions = {
  lookUpF: (objD, inpu) => {
    let result;
    if (objD.hasOwnProperty(inpu.toUpperCase())) {
      result = objD[inpu.toUpperCase()];
    } else {
      result = "Please enter a valid province abbreviation";
    }
    return result;
    // return 0;
  }
};

export default dictionaryFunctions;
