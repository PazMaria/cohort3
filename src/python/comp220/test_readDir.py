from readDir import readDir


def test_readDir():
    d = "/Users/mariapaz/code/cohort3/src/python/comp200/"
    assert readDir(
        d) == "The directory has 6 files and the total size is 8196 b"
