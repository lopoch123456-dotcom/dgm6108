"use strict"


// let yourVariableHere = [{
//     studentName: "Susie",
//     numberOfFriends: 3,
//     namesOfEnemies: ["Terry", "Allison"]
// }, {
//     studentName: "Terry",
//     numberOfFriends: 4,
//     namesOfEnemies: ["Susie", "Jamie", "Horace"]
// }, {
//     studentName: "Horace",
//     numberOfFriends: 2,
//     namesOfEnemies: ["Susie"]
// }];

let transactionData = [{
        date: "2026-01-20",
        amount: 72.75,
        item: "Pirate Ship",
        categories: ["Survival"],
        decisionWindow: "Habit/Plan",
        channel: "Online",
        satisfaction: 4
    }, // Pirate Ship Transaction Records
    {
        date: "2026-01-20",
        amount: 31.85,
        item: "Uber",
        categories: ["Survival", "Spark"], 
        decisionWindow: "Habit",
        channel: "Online",
        satisfaction: 3
    }, // Uber transaction records
    {
        date: "2026-01-22",
        amount: 7.59,
        item: "Giovane Cafe",
        categories: ["Spark"],
        decisionWindow: "Instant Purchase",
        channel: "Offline",
        satisfaction: 4
    }, // Coffee shop transaction records
    {
        date: "2026-02-02",
        amount: 110.33,
        item: "Instacart",
        categories: ["Survival"],
        decisionWindow: "Plan",
        channel: "Online",
        satisfaction: 5
    }, // Instacart Supermarket Shopping
    {
        date: "2026-02-03",
        amount: 40.0,
        item: "Compass Vending",
        categories: ["Survival"],
        decisionWindow: "Habit",
        channel: "Offline",
        satisfaction: 5 // Transportation card top-up
    }]; 
    // moses's trading watchlist ver 1

// console.log(JSON.stringify(transactionData));
showData(transactionData);
