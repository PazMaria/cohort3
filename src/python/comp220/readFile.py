def readFile(filePath):
    file = open(filePath, "r")
    content = file.read()
    file.close()
    totLines = content.count('\n')
    elseLines = 0
    totChar = 0
    for line in content:
        totChar += len(line)
    words = content.split()
    for word in words:
        if(word == 'else'):
            elseLines += 1
    return {'totLines': totLines, 'elseLines': elseLines, 'totChar': totChar}
