// Write a js program to input electricity unit charges and calculate total
// electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

let unit = 100;
let basicBill = 0;
let bill = 0;

if (unit <= 50) {
    basicBill = unit * 0.50;
    surcharge =  (20 / 100) * basicBill;
    bill = (basicBill + surcharge);
    console.log("Total Electricity Bill: " + bill);
} else 
if (unit > 50 && unit <= 100 ) {
    fiftyUitBill =  50 * 0.50;
    unit = unit - 50;
    basicBill = (unit * 0.75) + fiftyUitBill;
    surcharge = (20 / 100) * basicBill;
    bill = ( basicBill + surcharge);
    console.log("Total Electricity Bill: " + bill);
} else 
if (unit > 150 && unit <= 250 ) {
    fiftyUitBill =  50 * 0.50;
    unit = unit - 50;
    hundredUnitBill = 100 * 0.75;
    unit = unit -100;
    basicBill = (unit * 1.2) + fiftyUitBill + hundredUnitBill;
    surcharge = (20 / 100) * basicBill;
    bill = ( basicBill + surcharge);
    console.log("Total Electricity Bill: " + bill);
}else
if (unit > 250 ) {
    fiftyUitBill =  50 * 0.50;
    unit = unit - 50;
    hundredUnitBill = 100 * 0.75;
    unit = unit -100;
    nextHundredUnitBill = 100 * 1.2;
    unit = unit - 100;
    basicBill = (unit * 1.50) + fiftyUitBill + hundredUnitBill + nextHundredUnitBill;
    surcharge = (20 / 100) * basicBill;
    bill = ( basicBill + surcharge);
    console.log("Total Electricity Bill: " + bill);
}

