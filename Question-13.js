// Write a js program to input the basic salary of an employee and calculate
// its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

let basicSalary = 5000;
if (basicSalary <= 10000) {
    console.log((basicSalary /20)*100);
} else {
    console.log(basicSalary);
}