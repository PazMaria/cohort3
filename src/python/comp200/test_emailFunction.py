from emailFunction import emailFunction


def test_emailFunction():
    result = emailFunction("Larry", "Shumlich")
    assert result == "larry.shumlich@evolveu.ca"
    assert emailFunction("Heiko", "Peters") == "heiko.peters@evolveu.ca"
