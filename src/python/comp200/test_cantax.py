from cantax import fedTax
from cantax import provTax


def test_fed_prov_tax():
    assert fedTax(1, "AB") == [0.15, 0.1]
    assert fedTax(50000, "AB") == [7630.85, 5000]
    assert fedTax(100000, "AB") == [18140.66, 10000]
    assert fedTax(180000, "AB") == [39911.57, 19200.68]
    assert fedTax(300000, "AB") == [78296.57, 43573.72]
