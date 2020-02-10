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
