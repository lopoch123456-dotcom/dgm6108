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
    let evaluationCompleted = false;
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
    let o = document.getElementById("output");// define the output 
    o.replaceChildren(); //Clear the old output before each verification.
    if (cc.length !== 6 || isNaN(cc)) {
        output("Please enter a valid 6-digit credit card number.")
        return false;
    }

    if (ccv.length !== 3 || isNaN(ccv)) {
        output("Please enter a valid 3-digit CCV code.");
        return false;
    } // those 2 if function is checking user input is a 6 / 3 digi or not. “||" means also. so it checking the input is a number or not at sametime.

    return true; 
}

function evaluateAnswers() { //start evaluate steps
    let cc = document.getElementById("ccNumber").value;
    let ccv = document.getElementById("ccvNumber").value; // samething with my validate setp i just redo for fun kindof
    let cardSelectElement = document.getElementById("cardSelect"); // Get the value of the drop-down menu
    
    let sum1 = Number(cc[0]) + Number(cc[1]); // The sum of the first two
    let sum2 = Number(cc[2]) + Number(cc[3]); // The sum of the two middle 
    let sum3 = Number(cc[4]) + Number(cc[5]); // The sum of the last two

    if (sum1 > 9 || sum2 > 9 || sum3 > 9) { // Use ifelse to check if the number exceeds the single digit limit (whether it is > 9).  
    output("Incorrect credit card information entered."); 
    return false;
    } 
    if (Number(ccv[0]) !== sum1 || Number(ccv[1]) !== sum2 || Number(ccv[2]) !== sum3) { // samething with above but check is ccv digi sum === to cc digi number
        output("Incorrect credit card information entered.");
        return false;
    }

    let selectedCard = cardSelectElement.value;
    let basePrice = 0;
    let shippingFee = 0;

    let isOverLimit = false;
    if (selectedCard === "booster") {
        basePrice = 5;      //  Set price for boostere
        shippingFee = 2;    // Shipping fees will be increased for orders under $50.
    } 
    else if (selectedCard === "starter") {
        basePrice = 50;     // set price for stater 
    } 
    else if (selectedCard === "complete") {
        basePrice = 5000;   // samething set price for complete 
        isOverLimit = true;    // if they choose complete pack they reach to over limit 
    }
    if (isOverLimit) { //  If the order exceeds $1000, an error will be output and the order will not be completed. if not show nothing
        output("Unfortunately, the price of this item exceeds your credit limit.");
        return false;
    }

    let cardTypeName = cardSelectElement.options[cardSelectElement.selectedIndex].text; // define a text value use to output
    let finalPrice = basePrice + shippingFee; // if not reach overlimit will give the final price
    output("Your " + cardTypeName + " for Magic: The Gathering will be delivered to you as soon as possible.", true);
    output("Your credit card will be billed a total of $" + finalPrice.toFixed(2) + ".", true); // use tofix to show of total price as $D.CC
    if (shippingFee > 0) {
        output("This includes a $2.00 shipping fee.", true);
    } else {
        output("You received FREE shipping on this order.", true);
    } //If shipping fee added: This includes a $2.00 shipping fee. If no shipping fee added: You received FREE shipping on this order.

    return true
}