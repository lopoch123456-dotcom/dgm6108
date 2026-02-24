"use strict"

/* Configuration variables: drawing */
let svgWidth = 900;
let svgHeight = 600;
let margin = 25;

/* Resize  div to match width of visualization. */
d3.select("#container")
    .style("width", String(svgWidth) + "px");

/* Create drawing canvas */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw canvas border */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw margin border. */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-dasharray", "5")
    .attr("x", margin)
    .attr("y", margin)
    .attr("width", svgWidth - margin * 2)
    .attr("height", svgHeight - margin * 2);

let dataset = [
    { amount: 72.75, satisfaction: 4, decision: 2 },
    { amount: 31.85, satisfaction: 3, decision: 2 }, 
    { amount: 10.15, satisfaction: 3, decision: 2 },
    { amount: 96.22, satisfaction: 5, decision: 3 }, 
    { amount: 0.96, satisfaction: 2, decision: 2 },
    { amount: 9.99, satisfaction: 3, decision: 2 },
    { amount: 7.59, satisfaction: 4,  decision: 1 }, 
    { amount: 33.59, satisfaction: 5, decision: 1 },
    { amount: 24.99, satisfaction: 3, decision: 2 },
    { amount: 38.39, satisfaction: 3, decision: 2 },
    { amount: 16.07, satisfaction: 2, decision: 1 },
    { amount: 110.33, satisfaction: 5, decision: 3 },
    { amount: 1.1, satisfaction: 2, decision: 2 },
    { amount: 10.0, satisfaction: 5, decision: 3 },
    { amount: 63.31, satisfaction: 5, decision: 3 },
    { amount: 10.64, satisfaction: 4, decision: 3 },
    { amount: 0.63, satisfaction: 2, decision: 2 },
    { amount: 40.0, satisfaction: 5, decision: 2 },
    { amount: 68.06, satisfaction: 4, decision: 1 },
    { amount: 49.54, satisfaction: 3, decision: 2 },
    { amount: 29.14, satisfaction: 4, decision: 1 },
    { amount: 30.63, satisfaction: 3, decision: 2 },
    { amount: 9.68, satisfaction: 3, decision: 1 },
    { amount: 45.28, satisfaction: 5, decision: 3 },
    { amount: 6.0, satisfaction: 4, decision: 1 },
    { amount: 11.62, satisfaction: 3, decision: 2 },
    { amount: 9.96, satisfaction: 3, decision: 2 },
    { amount: 25.91, satisfaction: 3, decision: 2 }
]; // data form chart, decison window 1:Instant 2:Habit 3:Plan

dataset.sort(function(a, b) {
    return b.decision - a.decision;
}); //Array sort since we already use it in lab8 i just move it here. so i don't need to move my array manualy.

let xScale = d3.scaleLinear()
    .domain([0, 115]) // Max amount is about 110.33
    .range([margin, svgWidth - margin]);

let yScale = d3.scaleLinear()
    .domain([0, 5]) // Satisfaction scale is 0-5
    .range([svgHeight - margin, margin]);

let rScale = d3.scaleSqrt() // Square root scale
    .domain([1, 3]) 
    .range([5, 18]); //range for visibility

let circles = svg.selectAll("circle")
    .data(dataset)
    .join("circle");

circles.attr("r", function(d) {
        return rScale(d.decision); // add r function with decision data in array.
    })
    .attr("opacity", 0.6) 
    .attr("cx", function (value, index) {
        return xScale(value.amount);
    })
    .attr("cy", function (value, index) {
        return yScale(value.satisfaction); 
    }); //Bind dot property and amount


/**** label the axes ****/
let xAxisLabel = svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("Transaction Amount (CAD)");

let yAxisLabel = svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", margin / 2)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text("Satisfaction Level (0=Low, 5=High)")
    .attr("transform", "rotate(-90)");

/**** label key graph coordinates ****/
let xHighLabel = svg.append("text")
    .attr("x", xScale(115))
    .attr("y", svgHeight - margin + 15)
    .attr("text-anchor", "middle")
    .text("115");

let yHighLabel = svg.append("text")
    .attr("x", margin - 5)
    .attr("y", yScale(5))
    .attr("text-anchor", "end")
    .attr("alignment-baseline", "middle")
    .text("5");

let originLabel = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - margin + 15)
    .attr("text-anchor", "middle")
    .text("0");

// Sizekey only Container
let sizeKeyX = 650;
let sizeKeyY = 440; 

svg.append("text")
    .attr("x", sizeKeyX)
    .attr("y", sizeKeyY - 15)
    .text("Decision Windon") 
    .style("font-weight", "bold");

svg.append("rect")
    .attr("x", sizeKeyX - 10)
    .attr("y", sizeKeyY - 30)
    .attr("width", 160)
    .attr("height", 140)
    .attr("fill", "none")
    .attr("stroke", "black"); // creat box aorund size key

svg.append("circle")
    .attr("cx", sizeKeyX + 15)
    .attr("cy", sizeKeyY + 10)
    .attr("r", rScale(1))
    .attr("fill", "gray") 
    .attr("opacity", 0.6);

svg.append("text")
    .attr("x", sizeKeyX + 50)
    .attr("y", sizeKeyY + 10)
    .attr("alignment-baseline", "middle")
    .text("Instant"); // first level of r

svg.append("circle")
    .attr("cx", sizeKeyX + 15)
    .attr("cy", sizeKeyY + 45)
    .attr("r", rScale(2))
    .attr("fill", "gray")
    .attr("opacity", 0.6);

svg.append("text")
    .attr("x", sizeKeyX + 50)
    .attr("y", sizeKeyY + 45)
    .attr("alignment-baseline", "middle")
    .text("Habit"); // second level of r

svg.append("circle")
    .attr("cx", sizeKeyX + 15)
    .attr("cy", sizeKeyY + 85)
    .attr("r", rScale(3))
    .attr("fill", "gray")
    .attr("opacity", 0.6);

svg.append("text")
    .attr("x", sizeKeyX + 50)
    .attr("y", sizeKeyY + 85)
    .attr("alignment-baseline", "middle")
    .text("Plan"); // 3rd level of r


