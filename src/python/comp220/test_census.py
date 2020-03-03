from census import census


def test_census():
    f = "/Users/mariapaz/code/cohort3/src/python/comp220/Census_by_Community_2018.csv"
    result = census(f)
    totLines = result[1]
    assert totLines == 303
    assert result[0]['Class'] == {
        'Industrial': 922, 'Major Park': 0, 'Residential': 1263734, 'Residual Sub Area': 0}
