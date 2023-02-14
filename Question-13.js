// Write a js program to input the basic salary of an employee and calculate
// its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

let basicSalary = 1000;
let HRA
let DA
let GS
if (basicSalary <= 10000) {
    HRA = ((20 / 100) * basicSalary);
    DA = ((80 / 100) * basicSalary);
    GS = (HRA + DA + basicSalary);
    console.log("Basic Salary: " + basicSalary);
    console.log("HRA: " + HRA);
    console.log("DA: " + DA);
    console.log("Gross Salary: " + GS);

} else if (basicSalary <= 20000) {
    HRA = ((25 / 100) * basicSalary);
    DA = ((90 / 100) * basicSalary);
    GS = (HRA + DA + basicSalary);
    console.log("Basic Salary: " + basicSalary);
    console.log("HRA: " + HRA);
    console.log("DA: " + DA);
    console.log("Gross Salary: " + GS);

} else {
    HRA = ((30 / 100) * basicSalary);
    DA = ((95 / 100) * basicSalary);
    GS = (HRA + DA + basicSalary);
    console.log("Basic Salary: " + basicSalary);
    console.log("HRA: " + HRA);
    console.log("DA: " + DA);
    console.log("Gross Salary: " + GS);

}
