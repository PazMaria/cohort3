# Coding Exercise 1: Variables

var1 = "My variable"
var2 = "My variable"

num1 = 2
num2 = 8

# Coding Exercise 2: Lists, tuples and sets
# Create a list, called my_list, with three numbers. The total of the numbers added together should be 100.

my_list = [65, 10, 25]

# Create a tuple, called my_tuple, with a single value in it

my_tuple = (5,)

# Modify set2 so that set1.intersection(set2) returns {5, 77, 9, 12}

set1 = {14, 5, 9, 31, 12, 77, 67, 8}
set2 = {5, 77, 9, 12}
print(set1.intersection(set2))

# Coding Exercise 3: Flow control - loops and ifs

# -- Part 1 --
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

evens = []
for number in numbers:
    if number % 2 == 0:
        evens.append(number)


# -- Part 2, must be completed before submitting! --
user_input = input("Enter your choice: ").lower()
if user_input == "a":
    print("Add")
elif user_input == "q":
    print("Quit")

# Coding Exercise 4: Functions

# Complete the function by making sure it returns 42. .


def return_42():
    # Complete function here
    return 42

# Create a function below, called my_function, that takes two arguments and returns the result of its two arguments multiplied together.


def my_function(num1, num2):
    return num1 * num2


# Coding Exercise 5: Dictionaries and students
# Create a variable called student, with a dictionary.
# The dictionary must contain three keys: 'name', 'school', and 'grades'.
# The values for each must be 'Jose', 'Computing', and a tuple with the values 66, 77, and 88.
student = {'name': 'Jose', 'school': 'Computing', 'grades': (66, 77, 88)}

# Assume the argument, data, is a dictionary.
# Modify the grades variable so it accesses the 'grades' key of the data dictionary.


def average_grade(data):
    grades = data['grades']
    return sum(grades) / len(grades)


# Implement the function below
# Given a list of students (a list of dictionaries), calculate the average grade received on an exam, for the entire class
# You must add all the grades of all the students together
# You must also count how many grades there are in total in the entire list
def average_grade_all_students(student_list):
    total = 0
    count = 0
    for student in student_list:
        total += sum(student['grades'])
        count += len(student['grades'])
    return total / count


# Coding Exercise 6: Classes and objects

class Store:
    def __init__(self, name):
        # You'll need 'name' as an argument to this method.
        # Then, initialise 'self.name' to be the argument, and 'self.items' to be an empty list.
        self.name = name
        self.items = []

    def add_item(self, name, price):
        # Create a dictionary with keys name and price, and append that to self.items.
        item = {'name': name, 'price': price}
        self.items.append(item)

    def stock_price(self):
        # Add together all item prices in self.items and return the total.
        tot = 0
        for item in self.items:
            tot += item['price']
        return tot
