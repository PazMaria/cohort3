from readFile import readFile


def test_readingFile():
    f = "/Users/mariapaz/code/cohort3/src/javascript/syntax.js"
    assert readFile(f)["totLines"] == 193
    assert readFile(f)["elseLines"] == 3
    assert readFile(f)["totChar"] == 3639
