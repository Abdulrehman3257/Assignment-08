// Input marks and assign grade according to percentage.

let Physics = 34;
let Chimistry = 66;
let Biology = 55;
let Math = 75;
let Computer = 90;

let totalMarks = (Physics + Chimistry + Biology + Math + Computer);
if (totalMarks <= 500) {
    console.log("Total Marks : ", totalMarks);
    let percentage = (totalMarks / 500) * 100;
    console.log(percentage, "%");

    if (percentage >= 90) {
        console.log("Grade A");
    } else
        if (percentage >= 80) {
            console.log("Grade B");
        } else
            if (percentage >= 70) {
                console.log("Grade C");
            } else
                if (percentage >= 60) {
                    console.log("Grade D");
                } else
                    if (percentage >= 50) {
                        console.log("Grade E");
                    } else
                        if (percentage < 40) {
                            console.log("Grade F");
                        } else {
                            console.log("Invalid Input");
                        }

} else {
    console.log("Number must be less than 101");
}
