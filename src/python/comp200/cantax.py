def fedTax(inc, prov):
    if inc <= 47630:
        fed = inc * 0.15
        pro = provTax(inc, prov)
        arr = [fed, pro]
    elif inc <= 95259:
        fed = (inc - 47630) * 0.205 + 7145
        pro = provTax(inc, prov)
        arr = [fed, pro]
    elif inc <= 147667:
        fed = (inc - 95259) * 0.26 + 16908
        pro = provTax(inc, prov)
        arr = [fed, pro]
    elif inc <= 210371:
        fed = (inc - 147667) * 0.29 + 30535
        pro = provTax(inc, prov)
        arr = [fed, pro]
    elif inc > 210371:
        fed = (inc - 210371) * 0.33 + 48719
        pro = provTax(inc, prov)
        arr = [fed, pro]
    return arr


def provTax(income, provName):
    #  let provin;
    if provName == "AB":
        if income <= 131220:
            provin = income * 0.1
        elif income <= 157464:
            provin = (income - 131220) * 0.12 + 13122
        elif income <= 209952:
            provin = (income - 157464) * 0.13 + 16271
        elif income <= 314928:
            provin = (income - 209952) * 0.14 + 30967
        elif income > 314928:
            provin = (income - 314928) * 0.15 + 78206
    elif provName == "BC":
        provin = "Not Calculated"
    elif provName == "MB":
        provin = "Not Calculated"
    elif provName == "NB":
        provin = "Not Calculated"
    elif provName == "NL":
        provin = "Not Calculated"
    elif provName == "NS":
        provin = "Not Calculated"
    elif provName == "ON":
        provin = "Not Calculated"
    elif provName == "PE":
        provin = "Not Calculated"
    elif provName == "QC":
        provin = "Not Calculated"
    elif provName == "SK":
        provin = "Not Calculated"
    elif provName == "NT":
        provin = "Not Calculated"
    elif provName == "NU":
        provin = "Not Calculated"
    elif provName == "YT":
        provin = "Not Calculated"
    return provin
