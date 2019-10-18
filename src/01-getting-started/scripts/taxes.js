//Taxes functions

const taxesFunctions = {
  fedTax: inc => {
    switch (true) {
      case inc <= 47630:
        // fed.value = inc * 0.15;
        fed.value = inc * 0.3;
        document.getElementById("provtax").value = provTax(
          income.value,
          province.value
        );
        break;
      case inc <= 95259:
        fed.value = (inc - 47630) * 0.205 + 7145;
        document.getElementById("provtax").value = provTax(
          income.value,
          province.value
        );
        break;
      case inc <= 147667:
        fed.value = (inc - 95259) * 0.26 + 16908;
        document.getElementById("provtax").value = provTax(
          income.value,
          province.value
        );
        break;
      case inc <= 210371:
        fed.value = (inc - 147667) * 0.29 + 30535;
        document.getElementById("provtax").value = provTax(
          income.value,
          province.value
        );
        break;
      case inc > 210371:
        fed.value = (inc - 210371) * 0.33 + 48719;
        document.getElementById("provtax").value = provTax(
          income.value,
          province.value
        );
        break;
    }
  },

  provTax: (inc, provName) => {
    switch (provName) {
      case "AB":
        switch (true) {
          case inc <= 131220:
            prov = inc * 0.1;
            break;
          case inc <= 157464:
            prov = (inc - 131220) * 0.12 + 13122;
            break;
          case inc <= 209952:
            prov = (inc - 157464) * 0.13 + 16271;
            break;
          case inc <= 314928:
            prov = (inc - 209952) * 0.14 + 30967;
            break;
          case inc > 314928:
            prov = (inc - 314928) * 0.15 + 78206;
            break;
        }
        break;
      case "BC":
        break;
      case "MB":
        break;
      case "New Brunswick":
        break;
      case "Newfoundland and Labrador":
        break;
    }
    return prov;
  }
};

export default taxesFunctions;
