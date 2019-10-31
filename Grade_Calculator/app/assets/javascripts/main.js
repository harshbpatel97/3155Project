// JavaScript file for the Grade Calculator

// declare variables for data
var grade1Input = grade2Input = grade3Input = grade4Input = grade5Input = grade6Input = grade7Input = grade8Input = grade9Input = grade10Input = 0;
var weight1Input = weight2Input = weight3Input = weight4Input = weight5Input = weight6Input = weight7Input = weight8Input = weight9Input = weight10Input = 0;
var assignment1Result = assignment2Result = assignment3Result = assignment4Result = assignment5Result = assignment6Result = assignment7Result = assignment8Result = assignment9Result = assignment10Result = 0;

// make sure vars are valid
function validate() {
    // get the input
    grade1Input = document.forms["studentInfo"]["grade1"].value;
    grade2Input = document.forms["studentInfo"]["grade2"].value;
    grade3Input = document.forms["studentInfo"]["grade3"].value;
    grade4Input = document.forms["studentInfo"]["grade4"].value;
    grade5Input = document.forms["studentInfo"]["grade5"].value;
    grade6Input = document.forms["studentInfo"]["grade6"].value;
    grade7Input = document.forms["studentInfo"]["grade7"].value;
    grade8Input = document.forms["studentInfo"]["grade8"].value;
    grade9Input = document.forms["studentInfo"]["grade9"].value;
    grade10Input = document.forms["studentInfo"]["grade10"].value;

    weight1Input = document.forms["studentInfo"]["weight1"].value;
    weight2Input = document.forms["studentInfo"]["weight2"].value;
    weight3Input = document.forms["studentInfo"]["weight3"].value;
    weight4Input = document.forms["studentInfo"]["weight4"].value;
    weight5Input = document.forms["studentInfo"]["weight5"].value;
    weight6Input = document.forms["studentInfo"]["weight6"].value;
    weight7Input = document.forms["studentInfo"]["weight7"].value;
    weight8Input = document.forms["studentInfo"]["weight8"].value;
    weight9Input = document.forms["studentInfo"]["weight9"].value;
    weight10Input = document.forms["studentInfo"]["weight10"].value;

    // calculate using the calculate function
    calculate();
}


// Calculate PSIA RESULT
function calculate() {
    // make the weights decimals
    weight1Input = weight1Input / 100;
    weight2Input = weight2Input / 100;
    weight3Input = weight3Input / 100;
    weight4Input = weight4Input / 100;
    weight5Input = weight5Input / 100;
    weight6Input = weight6Input / 100;
    weight7Input = weight7Input / 100;
    weight8Input = weight8Input / 100;
    weight9Input = weight9Input / 100;
    weight10Input = weight10Input / 100;

    // calculate the grade for each of the assignments
    assignment1Result = grade1Input * weight1Input;
    assignment2Result = grade2Input * weight2Input;
    assignment3Result = grade3Input * weight3Input;
    assignment4Result = grade4Input * weight4Input;
    assignment5Result = grade5Input * weight5Input;
    assignment6Result = grade6Input * weight6Input;
    assignment7Result = grade7Input * weight7Input;
    assignment8Result = grade8Input * weight8Input;
    assignment9Result = grade9Input * weight9Input;
    assignment10Result = grade10Input * weight10Input;

    var weightTotal = weight1Input + weight2Input + weight3Input + weight4Input + weight5Input + weight6Input + weight7Input + weight8Input + weight9Input + weight10Input;

    // if the weight is equal to 1
    if (weightTotal == 1) {
        // calculate the grade normally
        var finalGrade = assignment1Result + assignment2Result + assignment3Result + assignment4Result + assignment5Result + assignment6Result + assignment7Result + assignment8Result + assignment9Result + assignment10Result;
    } else {
        // if the grade is not equal to one, divide by the current total weight
        var finalGrade = (assignment1Result + assignment2Result + assignment3Result + assignment4Result + assignment5Result + assignment6Result + assignment7Result + assignment8Result + assignment9Result + assignment10Result) / weightTotal;
    }

    // OUTPUT the final grade and combined weight
    gradeResult = '<p>Your calculated final grade is  <strong>' + finalGrade.toFixed(3) + '</strong></p>' +
        '<p>The combined weights of the assignments you entered is <strong>' + (weightTotal*100).toFixed(0) + '</strong> percent.</p>';

    document.getElementById("gradeResult").innerHTML = gradeResult;

}


