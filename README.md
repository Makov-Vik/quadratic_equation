# quadratic_equation

Короткий опис застосунку, що він робить (напр. Quadratic Equation Solver)
Інструкція, як зібрати та запустити проект
Опис формату файлу для неінтерактивного режиму
Вказання на revert-коміт

# What is it?
This program solves a quadratic equation in two ways: 1. The coefficients of the equation are loaded into a file. 2. coefficients are loaded via the console

# Installation
First - clone this repository
`git clone https://github.com/Makov-Vik/quadratic_equation.git`

Second - install necessary dependencies
`$ npm install`

# How it use?

## Interactive mode
For starting interactive mode write command:
`npm start`

Then you must enter all the coefficients one by one

### Example

`$ npm start`
`> Enter a: 2`
`> Enter b: 3`
`> Enter c: -1`
`> Equation is: (2)x^2 + (3)x + (-1) = 0`
`> There are 2 roots`
`> x1: 0.28`
`> x2: -1.781`

## non-Interactive mode (file mode)
In the data folder, create a file with the *.txt extension, in which you specify the coefficients a, b, and c separated by a space. Like here:
`2 3 -1`

Further just write the command below, instead of 'file_name' put the file name
`$ npm run 'file_name'.txt`

# Link to Revert commit
[Here][1]

[1]: https://github.com/Makov-Vik/quadratic_equation/commit/1effe90e0d7980b2884e2f9eb1a459884607c537