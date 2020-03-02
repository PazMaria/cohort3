import os


def readDir(dirPath):
    numFile = 0
    size = 0
    with os.scandir(dirPath) as content:
        for entry in content:
            if entry.is_file():
                info = entry.stat()
                numFile += 1
                size += info.st_size
    return f'The directory has {numFile} files and the total size is {size} b'
