from census import census


def test_census():
    f = "/Users/mariapaz/code/cohort3/src/python/comp220/Census_by_Community_2018.csv"
    result = census(f)
    assert result[0]['Industrial'] == 922
    totLines = result[2]
    assert totLines == 303
