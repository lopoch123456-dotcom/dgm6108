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

let transactionData = [
    {
        date: "2026-01-20",
        amount: 72.75,
        item: "Pirate Ship",
        categories: ["Survival"],
        decisionWindow: 2,
        channel: "Online",
        satisfaction: 4
    }, // Pirate Ship Transaction Records
    {
        date: "2026-01-20",
        amount: 31.85,
        item: "Uber",
        categories: ["Survival", "Spark"], 
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 3
    }, // Uber transaction records
    {
        date: "2026-01-20",
        amount: 10.15,
        item: "Uber",
        categories: ["Survival", "Spark"], 
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 3
    }, // Uber transaction records
    {
        date: "2026-01-20",
        amount: 96.22,
        item: "Instacart",
        categories: ["Survival"],
        decisionWindow: 1,
        channel: "Online",
        satisfaction: 5
    }, // Instacart Supermarket Shopping
    {
        date: "2026-01-20",
        amount: 0.96,
        item: "Visa Fee (Instacart)",
        categories: ["Survival"],
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 2
    }, // Service fee transaction records
    {
        date: "2026-01-22",
        amount: 9.99,
        item: "Uber (via PayPal)",
        categories: ["Survival", "Spark"], 
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 3
    }, // Uber payment records
    {
        date: "2026-01-22",
        amount: 7.59,
        item: "Giovane Cafe",
        categories: ["Spark"],
        decisionWindow: 5,
        channel: "Offline",
        satisfaction: 4
    }, // Coffee shop transaction records
    {
        date: "2026-01-23",
        amount: 33.59,
        item: "Riot Games",
        categories: ["Spark"],
        decisionWindow: 5,
        channel: "Online",
        satisfaction: 5
    }, // Gaming entertainment records
    {
        date: "2026-01-27",
        amount: 24.99,
        item: "Uber",
        categories: ["Survival", "Spark"], 
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 3
    }, // Uber transaction records
    {
        date: "2026-01-29",
        amount: 38.39,
        item: "Uber",
        categories: ["Survival", "Spark"], 
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 3
    }, // Uber transaction records
    {
        date: "2026-01-30",
        amount: 16.07,
        item: "7-Eleven",
        categories: ["Survival", "Spark"], 
        decisionWindow: 5,
        channel: "Offline",
        satisfaction: 2
    }, // Convenience store transaction records
    {
        date: "2026-02-02",
        amount: 110.33,
        item: "Instacart",
        categories: ["Survival"],
        decisionWindow: 1,
        channel: "Online",
        satisfaction: 5
    }, // Instacart Supermarket Shopping
    {
        date: "2026-02-02",
        amount: 1.1,
        item: "Visa Fee (Instacart)",
        categories: ["Survival"],
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 2
    }, // Service fee transaction records
    {
        date: "2026-02-02",
        amount: 10.0,
        item: "PTS (Bank Transfer)",
        categories: ["Survival"],
        decisionWindow: 1,
        channel: "Online",
        satisfaction: 5
    }, // Bill payment records
    {
        date: "2026-02-03",
        amount: 63.31,
        item: "Instacart",
        categories: ["Survival"],
        decisionWindow: 1,
        channel: "Online",
        satisfaction: 5
    }, // Instacart Supermarket Shopping
    {
        date: "2026-02-03",
        amount: 10.64,
        item: "Instacart",
        categories: ["Survival"],
        decisionWindow: 1,
        channel: "Online",
        satisfaction: 4
    }, // Instacart Supermarket Shopping
    {
        date: "2026-02-03",
        amount: 0.63,
        item: "Visa Fee (Instacart)",
        categories: ["Survival"],
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 2
    }, // Service fee transaction records
    {
        date: "2026-02-03",
        amount: 40.0,
        item: "Compass Vending",
        categories: ["Survival"],
        decisionWindow: 3,
        channel: "Offline",
        satisfaction: 5
    }, // Transportation card top-up
    {
        date: "2026-02-03",
        amount: 0.63,
        item: "Visa Fee (Instacart)",
        categories: ["Survival"],
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 2
    }, // Service fee transaction records
    {
        date: "2026-02-03",
        amount: 0.11,
        item: "Visa Fee (Instacart)",
        categories: ["Survival"],
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 2
    }, // Service fee transaction records
    {
        date: "2026-02-04",
        amount: 68.06,
        item: "Kinton Ramen",
        categories: ["Spark"],
        decisionWindow: 5,
        channel: "Offline",
        satisfaction: 4
    }, // Restaurant transaction records
    {
        date: "2026-02-05",
        amount: 49.54,
        item: "Uber",
        categories: ["Survival", "Spark"], 
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 3
    }, // Uber transaction records
    {
        date: "2026-02-06",
        amount: 29.14,
        item: "bb.q Chicken",
        categories: ["Spark"],
        decisionWindow: 5,
        channel: "Offline",
        satisfaction: 4
    }, // Restaurant transaction records
    {
        date: "2026-02-09",
        amount: 30.63,
        item: "Uber",
        categories: ["Survival", "Spark"], 
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 3
    }, // Uber transaction records
    {
        date: "2026-02-09",
        amount: 9.68,
        item: "7-Eleven",
        categories: ["Survival", "Spark"], 
        decisionWindow: 5,
        channel: "Offline",
        satisfaction: 3
    }, // Convenience store transaction records
    {
        date: "2026-02-09",
        amount: 45.28,
        item: "T&T Supermarket",
        categories: ["Survival"],
        decisionWindow: 1,
        channel: "Offline",
        satisfaction: 5
    }, // Supermarket shopping records
    {
        date: "2026-02-09",
        amount: 6.0,
        item: "Fortune Sou",
        categories: ["Spark"],
        decisionWindow: 5,
        channel: "Offline",
        satisfaction: 4
    }, // Food transaction records
    {
        date: "2026-02-10",
        amount: 11.62,
        item: "Uber",
        categories: ["Survival", "Spark"], 
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 3
    }, // Uber transaction records
    {
        date: "2026-02-10",
        amount: 9.96,
        item: "Uber",
        categories: ["Survival", "Spark"], 
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 3
    }, // Uber transaction records
    {
        date: "2026-02-11",
        amount: 25.91,
        item: "Uber",
        categories: ["Survival", "Spark"], 
        decisionWindow: 3,
        channel: "Online",
        satisfaction: 3
    }, // Uber transaction records
    {
    date: "2026-02-18",
    amount: 12.50,
    item: "Milk Tea (Social)",
    categories: ["Spark"],
    decisionWindow: 4, 
    channel: "Offline",
    satisfaction: 4
    } // milk tea
]; 
// moses's trading watchlist ver 2

/*1. Planned Consumption (Long-term planning): For example, weekly grocery shopping (using Instacart).

2. Habitual/Planned Consumption: Planned habits, such as pre-booking delivery services (using Pirate Ship) to save money.

3. Habitual Consumption: Purely daily habits, such as taking Uber to and from get off work every day or paying a fixed monthly fee.

4. Short-Term Impulsive Consumption: Impulsive, non-habitual consumption influenced by external circumstances.

5. Instant Consumption: Sudden, spontaneous purchases like buying Riot Games game skins. */

// console.log(JSON.stringify(transactionData));
showData(transactionData);
