import csv


def census(filePath):
    with open(filePath, "r") as file:
        data = {}
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
    data['Class'] = resultClass
    data['Sector'] = resultSector
    generateReport(data, line_count)
    return data, line_count


def generateReport(data, count):
    with open("/Users/mariapaz/code/cohort3/src/python/comp220/report.txt", "w+") as report:
        report.write("Census by Community 2018".center(60, '-') + "\n\n")
        report.write(f"Total lines from file: {count}".center(60) + "\n")
        report.write(60*"=" + "\n")
        report.write("\nBy Class:\n\n")
        report.write("Class Name".ljust(30) + "Population".ljust(30) + "\n")
        report.write("-".center(60, "-") + "\n")
        for key, value in data['Class'].items():
            report.write(f"{key}".ljust(30) + f"{value}".ljust(30) + "\n\n")
        report.write(60*"=" + "\n")
        report.write("\nBy Sector:\n\n")
        report.write("Sector Name".ljust(30) + "Population".ljust(30) + "\n")
        report.write("-".center(60, "-") + "\n")
        for key, value in data['Sector'].items():
            report.write(f"{key}".ljust(30) + f"{value}".ljust(30) + "\n")
