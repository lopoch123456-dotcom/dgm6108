/* Configuration variables: drawing */
let svgWidth = 800;
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

let dataset = [
    { amount: 72.75, satisfaction: 4, category: "Survival", decision: 2 }, // Habit/Plan
    { amount: 31.85, satisfaction: 3, category: "Survival/Spark", decision: 2 }, // Habit
    { amount: 10.15, satisfaction: 3, category: "Survival/Spark", decision: 2 },
    { amount: 96.22, satisfaction: 5, category: "Survival", decision: 3 }, // Plan
    { amount: 0.96, satisfaction: 2, category: "Survival", decision: 2 },
    { amount: 9.99, satisfaction: 3, category: "Survival/Spark", decision: 2 },
    { amount: 7.59, satisfaction: 4, category: "Spark", decision: 1 }, // Instant
    { amount: 33.59, satisfaction: 5, category: "Spark", decision: 1 },
    { amount: 24.99, satisfaction: 3, category: "Survival/Spark", decision: 2 },
    { amount: 38.39, satisfaction: 3, category: "Survival/Spark", decision: 2 },
    { amount: 16.07, satisfaction: 2, category: "Survival/Spark", decision: 1 },
    { amount: 110.33, satisfaction: 5, category: "Survival", decision: 3 },
    { amount: 1.1, satisfaction: 2, category: "Survival", decision: 2 },
    { amount: 10.0, satisfaction: 5, category: "Survival", decision: 3 },
    { amount: 63.31, satisfaction: 5, category: "Survival", decision: 3 },
    { amount: 10.64, satisfaction: 4, category: "Survival", decision: 3 },
    { amount: 0.63, satisfaction: 2, category: "Survival", decision: 2 },
    { amount: 40.0, satisfaction: 5, category: "Survival", decision: 2 },
    { amount: 68.06, satisfaction: 4, category: "Spark", decision: 1 },
    { amount: 49.54, satisfaction: 3, category: "Survival/Spark", decision: 2 },
    { amount: 29.14, satisfaction: 4, category: "Spark", decision: 1 },
    { amount: 30.63, satisfaction: 3, category: "Survival/Spark", decision: 2 },
    { amount: 9.68, satisfaction: 3, category: "Survival/Spark", decision: 1 },
    { amount: 45.28, satisfaction: 5, category: "Survival", decision: 3 },
    { amount: 6.0, satisfaction: 4, category: "Spark", decision: 1 },
    { amount: 11.62, satisfaction: 3, category: "Survival/Spark", decision: 2 },
    { amount: 9.96, satisfaction: 3, category: "Survival/Spark", decision: 2 },
    { amount: 25.91, satisfaction: 3, category: "Survival/Spark", decision: 2 }
]; // data form chart decison window 1:Instant 2:Habit 3:Plan

dataset.sort(function(a, b) {
    return b.decision - a.decision;
}); //Array sort. with no =>.

let xScale = d3.scaleLinear()
    .domain([0,155]) // change it to decisiopn window
    .range([margin, svgWidth - margin]);

let yScale = d3.scaleLinear()
    .domain([0, 5]) // Satisfaction scale is 0-5
    .range([svgHeight - margin, margin]);

let rScale = d3.scaleSqrt() // Square root scale
    .domain([1 , 3]) 
    .range([5, 20]); //range for visibility

let colorScale = d3.scaleOrdinal()
    .domain(["Survival", "Survival/Spark", "Spark"])
    .range(["#7f8c8d", "#f1c40f", "#e67e22"]); // 深灰代表生存，黄色代表过渡，橙色代表火花

let healthColor = d3.scaleLinear()
    .domain([1, 3, 5])
    .range(["#e74c3c", "#f1c40f", "#2ecc71"]); // red to yellow to green

let star = d3.symbol().type(d3.symbolStar).size(200); // I ask AI how to add a star shape
let cross = d3.symbol().type(d3.symbolCross).size(150);

// start drawing 
const trunkX = svgWidth / 2;

svg.append("line")
    .attr("x1", trunkX).attr("x2", trunkX)
    .attr("y1", margin).attr("y2", svgHeight - margin)
    .attr("stroke", "#8b4513").attr("stroke-width", 8);

svg.selectAll(".purchase")
    .data(dataset)
    .enter()
    .each(function(d, i) { //each make a loop to my dataset so run it index time
        let isLeft = i % 2 == 0;// Alternating branches left and right
        let branchLen = d.amount * 2; // Scale amount to pixels
        let yPos = margin + (i * ((svgHeight - margin * 2) / (dataset.length - 1)));// 计算gap
        let x2Value;
        if (isLeft) {
            x2Value = trunkX - branchLen;
        } else {
            x2Value = trunkX + branchLen;
        }
        // Draw the branch
        d3.select(this).append("line")
            .attr("x1", trunkX)
            .attr("x2", x2Value)
            .attr("y1", yPos)
            .attr("y2", yPos)
            .attr("stroke", "#8b4513");
            if (d.category == "Survival") {
            d3.select(this).append("circle") // add shapes to branch
                .attr("cx", x2Value)
                .attr("cy", yPos)
                .attr("r", 8)
                .attr("fill", healthColor(d.satisfaction));
        } else if (d.category == "Spark"){
            d3.select(this).append("path")
                .attr("d", star) // use the star shape
                .attr("transform", `translate(${x2Value}, ${yPos})`) // Move to the end of the branch
                .attr("fill", healthColor(d.satisfaction)) 
                .attr("stroke", "#333") 
                .attr("stroke-width", 1);
        } else {
            d3.select(this).append("path")
                .attr("d", cross)
                .attr("transform", `translate(${x2Value}, ${yPos})`)
                .attr("fill", healthColor(d.satisfaction));
        }
    });

/**** Draw XY Axis line ****/
// Draw Y Axis Line
let satisfactionLevels = [1, 2, 3, 4, 5];