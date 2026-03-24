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
    { amount: 25.91, satisfaction: 3, category: "Survival/Spark", decision: 2 },
    { amount: 22.99, satisfaction: 3, category: "Survival",        decision: 2 }, // Granville Kebab
    { amount: 11.08, satisfaction: 3, category: "Survival",        decision: 2 }, // Nesters Market
    { amount: 10.00, satisfaction: 2, category: "Survival",        decision: 2 }, // PTS transfer
    { amount: 22.89, satisfaction: 4, category: "Survival",        decision: 2 }, // Kinkura Sushi
    { amount: 39.36, satisfaction: 3, category: "Survival",        decision: 1 }, // Susu Hair Bar
    { amount: 2.72,  satisfaction: 2, category: "Survival/Spark",  decision: 1 }, // Macs Convenience
    { amount: 40.00, satisfaction: 3, category: "Survival/Spark",  decision: 2 }, // Compass Vending
    { amount: 43.66, satisfaction: 4, category: "Spark",           decision: 1 }, // Steam Games
    { amount: 21.00, satisfaction: 3, category: "Survival/Spark",  decision: 1 }, // Enerpro (energy drink)
    { amount: 33.59, satisfaction: 4, category: "Spark",           decision: 1 }, // Riot Games
    { amount: 63.00, satisfaction: 4, category: "Survival",        decision: 2 }, // Shabusen Yakini
    { amount: 60.00, satisfaction: 3, category: "Survival/Spark",  decision: 2 }, // Compass Vending
    { amount: 4.35,  satisfaction: 2, category: "Survival/Spark",  decision: 1 }, // Macs Convenience Mar12
    { amount: 23.80, satisfaction: 3, category: "Survival",        decision: 1 }, // Jollibee
    { amount: 20.52, satisfaction: 3, category: "Survival/Spark",  decision: 1 }, // Enerpro Mar9
    { amount: 4.35,  satisfaction: 2, category: "Survival/Spark",  decision: 1 }, // Macs Convenience Mar5
    { amount: 62.80, satisfaction: 3, category: "Survival",        decision: 3 }, // Shaw Cable (bill)
    { amount: 24.38, satisfaction: 3, category: "Survival/Spark",  decision: 1 }, // Uber Mar17
    { amount: 34.94, satisfaction: 3, category: "Survival/Spark",  decision: 1 }, // Uber Mar16
    { amount: 40.43, satisfaction: 3, category: "Survival",        decision: 2 }, // Instacart Mar13
    { amount: 78.71, satisfaction: 4, category: "Survival",        decision: 2 }, // Instacart Mar11
    { amount: 25.52, satisfaction: 3, category: "Survival/Spark",  decision: 1 }, // Uber Mar6
    { amount: 26.97, satisfaction: 3, category: "Survival/Spark",  decision: 1 }, // Uber Mar3
    { amount: 8.99,  satisfaction: 2, category: "Survival/Spark",  decision: 1 }, // Uber Mar2
    { amount: 53.85, satisfaction: 4, category: "Survival",        decision: 2 }, // Instacart Mar2
    { amount: 25.68, satisfaction: 3, category: "Survival/Spark",  decision: 1 }, // Uber Feb27
]; // data form chart decison window 1:Instant 2:Habit 3:Plan

dataset.sort(function(a, b) {
    return b.decision - a.decision;
}); //Array sort. with no =>.

let xScale = d3.scaleLinear()
    .domain([0, 220])   // 最大 amount*2 ≈ 110.33*2=220，代表最长的枝
    .range([0, svgWidth/2 - margin]);  // 从树干到边缘的距离

let yScale = d3.scaleLinear()
    .domain([0, 5]) // Satisfaction scale is 0-5
    .range([svgHeight - margin, margin]);

let rScale = d3.scaleSqrt() // Square root scale
    .domain([1 , 3]) 
    .range([5, 20]); //range for visibility

let colorScale = d3.scaleOrdinal()
    .domain(["Survival", "Survival/Spark", "Spark"])
    .range(["#1eb125", "#f1c40f", "#e67e22"]); // 深灰代表生存，黄色代表过渡，橙色代表火花

let healthColor = d3.scaleLinear()
    .domain([1, 2, 3, 4, 5])
    .range(["#363f36","#3c553d","#336433", "#60c034", "#0fe96a"]); // red to yellow to green

let star = d3.symbol().type(d3.symbolStar).size(200); // I ask AI how to add a star shape
let cross = d3.symbol().type(d3.symbolCross).size(150);

// start drawing 
const trunkX = svgWidth / 2;

for (let i = 1; i <= 5; i++) {
    svg.append("line")
        .attr("x1", trunkX).attr("x2", trunkX)
        .attr("y1", yScale(i - 1))
        .attr("y2", yScale(i))
        .attr("stroke", healthColor(i))
        .attr("stroke-width", 8);
}

svg.selectAll(".purchase")
    .data(dataset)
    .enter()
    .each(function(d, i) { //each make a loop to my dataset so run it index time
        let isLeft = i % 2 == 0;// Alternating branches left and right
        let branchLen = d.amount * 2; // Scale amount to pixels but hard to match with x aixs..
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
                .attr("fill", colorScale(d.category));
        } else if (d.category == "Spark"){
            d3.select(this).append("path")
                .attr("d", star) // use the star shape
                .attr("transform", `translate(${x2Value}, ${yPos})`) // Move to the end of the branch
                .attr("fill", colorScale(d.category)) 
                .attr("stroke", "#333") 
                .attr("stroke-width", 1);
        } else {
            d3.select(this).append("path")
                .attr("d", cross)
                .attr("transform", `translate(${x2Value}, ${yPos})`)
                .attr("fill", colorScale(d.category));
        }

        svg.append("text")// add price to it.
            .attr("x", x2Value)
            .attr("y", yPos - 10)  
            .attr("text-anchor", isLeft ? "end" : "start")  // Ternary operator so i don't need use if Learn from https://baike.baidu.com/item/%E4%B8%89%E5%85%83%E8%BF%90%E7%AE%97%E7%AC%A6/1394210
            .attr("font-size", "11px")
            .text(`$${d.amount}`);
    });

/**** Draw XY Axis line ****/
// Draw Y Axis Line
let yAxis = d3.axisLeft(yScale)
    .ticks(5);

svg.append("g")
    .attr("transform", `translate(${margin}, 0)`)
    .call(yAxis);

// Y Axis Label
svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -svgHeight / 2)
    .attr("y", margin - 15)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .text("Satisfaction level");

// Draw X Axis
let xAxisRight = d3.axisBottom(xScale)
    .ticks(4);

svg.append("g")
    .attr("transform", `translate(${trunkX}, ${svgHeight - margin})`)
    .call(xAxisRight);

let xScaleLeft = d3.scaleLinear()
    .domain([0, 220])
    .range([0, -(svgWidth/2 - margin)]);  // so theres 2 x aixs I have to setup a “-” scale

let xAxisLeft = d3.axisBottom(xScaleLeft).ticks(4);
svg.append("g")
    .attr("transform", `translate(${trunkX}, ${svgHeight - margin})`)
    .call(xAxisLeft);

// X Axis Label
svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - 5)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .text("Amount ($)");

// Color Key and shape key Container
let colorKeyX = 650;
let colorKeyY = 500;
let shapeKeyX = 650;
let shapeKeyY = 360; 

// Color key box
svg.append("rect")
    .attr("x", colorKeyX - 10)
    .attr("y", colorKeyY - 30)
    .attr("width", 155)
    .attr("height", 100)
    .attr("fill", "none")
    .attr("stroke", "black");

svg.append("text")
    .attr("x", colorKeyX)
    .attr("y", colorKeyY - 15)
    .text("Spending Category")
    .style("font-weight", "bold")
    .style("font-size", "12px");

let colorData = [
    { label: "Survival",        color: "#1eb125" },
    { label: "Survival/Spark",  color: "#f1c40f" },
    { label: "Spark",           color: "#e67e22" }
];

svg.selectAll(".colorDots")
    .data(colorData)
    .join("circle")
    .attr("cx", colorKeyX + 8)
    .attr("cy", function(d, i) { return colorKeyY + (i * 25); })
    .attr("r", 6)
    .attr("fill", function(d) { return d.color; });

svg.selectAll(".colorLabels")
    .data(colorData)
    .join("text")
    .attr("x", colorKeyX + 22)
    .attr("y", function(d, i) { return colorKeyY + (i * 25) + 4; })
    .text(function(d) { return d.label; })
    .style("font-size", "12px");

// shape Key (Decision Window)
//shape key darw box
svg.append("rect")
    .attr("x", shapeKeyX - 10)
    .attr("y", shapeKeyY - 10)
    .attr("width", 155)
    .attr("height", 115)
    .attr("fill", "none")
    .attr("stroke", "black");

svg.append("text")
    .attr("x", shapeKeyX)
    .attr("y", shapeKeyY )
    .text("Decision Window")
    .style("font-weight", "bold")
    .style("font-size", "12px");

// Instant → circle
svg.append("circle")
    .attr("cx", shapeKeyX + 8)
    .attr("cy", shapeKeyY + 10)
    .attr("r", 8)
    .attr("fill", "gray")
    .attr("opacity", 0.6);

svg.append("text")
    .attr("x", shapeKeyX + 25)
    .attr("y", shapeKeyY + 14)
    .style("font-size", "12px")
    .text("Instant (circle)");
    
// Habit → cross 
svg.append("path")
    .attr("d", cross)
    .attr("transform", `translate(${shapeKeyX + 8}, ${shapeKeyY + 45})`)
    .attr("fill", "gray")
    .attr("opacity", 0.6);

svg.append("text")
    .attr("x", shapeKeyX + 25)
    .attr("y", shapeKeyY + 49)
    .style("font-size", "12px")
    .text("Habit (cross)");

// Plan → star 
svg.append("path")
    .attr("d", star)
    .attr("transform", `translate(${shapeKeyX + 8}, ${shapeKeyY + 83})`)
    .attr("fill", "gray")
    .attr("opacity", 0.6);

svg.append("text")
    .attr("x", shapeKeyX + 25)
    .attr("y", shapeKeyY + 87)
    .style("font-size", "12px")
    .text("Plan (star)");