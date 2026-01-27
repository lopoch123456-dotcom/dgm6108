"use strict"//add use strict

document.getElementById("submit").addEventListener("click", processForm);
document.getElementById("reset").addEventListener("click", function () {
    clear();
    document.getElementById("submit").toggleAttribute("hidden");
    document.getElementById("reset").toggleAttribute("hidden");
}); // connect the submit butten with action ,and when user click ,the function start run

let cardSelect, ccNumber, ccvNumber; //store user's input

function processForm() {
    let cc = document.getElementById("ccNumber").value;
    let ccv = document.getElementById("ccvNumber").value; // those 2 lines is defined the user input creidt card number and CCV number to a string. because in Project2_Overview_and_Draft.pdf TIP said "Remember, 0 might be the first digit for any of the numeric inputs!" so i need convert it to a string not a number.

    if (validateData()) {
        evaluationCompleted = evaluateAnswers();
    }

     if (evaluationCompleted) {
        document.getElementById("submit").toggleAttribute("hidden");
        document.getElementById("reset").toggleAttribute("hidden");
    } // grab validate and evaluation form, and connect them. I have not finsih my evaluation yet. but anyway.
}

function validateData() {
    let cc = document.getElementById("ccNumber").value;
    let ccv = document.getElementById("ccvNumber").value; // I need do the define again in my validateData cause if Im not, a define error will show up
    let o = document.getElementById("output"); // define the output 
    if (cc.length != 6 || isNaN(cc)) {
        output("Please enter a valid 6-digit credit card number.")
        return false;
    }

    if (ccv.length !== 3 || isNaN(ccv)) {
        output("Please enter a valid 3-digit CCV code.");
        return false;
    } // those 2 if function is checking user input is a 6 / 3 digi or not. “||" means also. so it checking the input is a number or not at sametime.

    return true; 
}