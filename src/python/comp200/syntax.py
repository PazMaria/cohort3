# define attributes / variables
# - number


def isNumber(num):
    if type(num) == int or type(num) == float or type(num) == complex:
        return f"{num} is a number."
    else:
        return f"{num} is not a number."

# - string


def isString(string):
    if type(string) == str:
        return f"{string} is a string."
    else:
        return f"{string} is not a string."


#  - boolean
def isBoolean(boolean):
    if type(boolean) == bool:
        return f"{boolean} is a boolean."
    else:
        return f"{boolean} is not a boolean."


#  - array
def isList(arr):
    if type(arr) == list:
        return f"{arr} is a list."
    else:
        return f"{arr} is not a list."


# sample if / else
def isIfElse(value):
    if (value >= 20) and (value < 31):
        return "end of month"
    elif (value > 1) & (value < 20):
        return "beginning of month"
    else:
        return "Not a day of the month"


# arrays
# - add to the front
def isAddFront(addVal):
    myList = [10, 15, 20]
    myList.insert(0, addVal)
    return myList


# - add to the end

def isAddEnd(addVal):
    myList = [10, 15, 20]
    myList.append(addVal)
    return myList


# - update values
def isUpdate(addUpdate):
    aList = [10, 15, 20]
    aList[0] = addUpdate
    return aList


# loops
# - for
def forLoop():
    aList = [10, 15, 20]
    sum = 0
    for number in aList:
        sum += number
    return sum


# - while
def whileLoop():
    i = 0
    while i < 6:
        i += 1
        if i == 3:
            continue
        print(i)


# - declare dictionary
thisdict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}


# - lookup key to retrieve value


def lookUpKey(key):
    result = ""
    person = {"name": "Tom", "age": 35}
    result = person[key]
    return result
