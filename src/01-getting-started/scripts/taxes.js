//Taxes functions

const taxesFunctions = {
  fedTax: (inc, prov) => {
    let fed;
    let pro;
    let arr;
    switch (true) {
      case inc <= 47630:
        fed = inc * 0.15;
        // fed = inc * 0.3;
        pro = taxesFunctions.provTax(inc, prov);
        arr = [fed, pro];
        break;
      case inc <= 95259:
        fed = (inc - 47630) * 0.205 + 7145;
        pro = taxesFunctions.provTax(inc, prov);
        arr = [fed, pro];
        break;
      case inc <= 147667:
        fed = (inc - 95259) * 0.26 + 16908;
        pro = taxesFunctions.provTax(inc, prov);
        arr = [fed, pro];
        break;
      case inc <= 210371:
        fed = (inc - 147667) * 0.29 + 30535;
        pro = taxesFunctions.provTax(inc, prov);
        arr = [fed, pro];
        break;
      case inc > 210371:
        fed = (inc - 210371) * 0.33 + 48719;
        pro = taxesFunctions.provTax(inc, prov);
        arr = [fed, pro];
        break;
    }
    return arr;
  },

  provTax: (income, provName) => {
    let provin;
    switch (provName) {
      case "AB":
        switch (true) {
          case income <= 131220:
            provin = income * 0.1;
            break;
          case income <= 157464:
            provin = (income - 131220) * 0.12 + 13122;
            break;
          case income <= 209952:
            provin = (income - 157464) * 0.13 + 16271;
            break;
          case income <= 314928:
            provin = (income - 209952) * 0.14 + 30967;
            break;
          case income > 314928:
            provin = (income - 314928) * 0.15 + 78206;
            break;
        }
        break;
      case "BC":
        provin = "Not Calculated";
        break;
      case "MB":
        provin = "Not Calculated";
        break;
      case "NB":
        provin = "Not Calculated";
        break;
      case "NL":
        provin = "Not Calculated";
        break;
      case "NS":
        provin = "Not Calculated";
        break;
      case "ON":
        provin = "Not Calculated";
        break;
      case "PE":
        provin = "Not Calculated";
        break;
      case "QC":
        provin = "Not Calculated";
        break;
      case "SK":
        provin = "Not Calculated";
        break;
      case "NT":
        provin = "Not Calculated";
        break;
      case "NU":
        provin = "Not Calculated";
        break;
      case "YT":
        provin = "Not Calculated";
        break;
    }
    return provin;
  }
};

export default taxesFunctions;
