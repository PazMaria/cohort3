import csv


def census(filePath):
    with open(filePath, "r") as file:
        rows = csv.DictReader(file, delimiter=',')
        line_count = 0
        resultClass = {}
        resultSector = {}
        totClass = 0
        totSector = 0
        for row in rows:
            if row['CLASS'] in resultClass:
                totClass = resultClass[row['CLASS']]
                totClass += int(row['RES_CNT'])
                resultClass[row['CLASS']] = totClass
            else:
                resultClass[row['CLASS']] = int(row['RES_CNT'])
            if row['SECTOR'] in resultSector:
                totSector = resultSector[row['SECTOR']]
                totSector += int(row['RES_CNT'])
                resultSector[row['SECTOR']] = totSector
            else:
                resultSector[row['SECTOR']] = int(row['RES_CNT'])
            line_count += 1
    print(resultClass)
    print(resultSector)
    return (resultClass, resultSector, line_count)
