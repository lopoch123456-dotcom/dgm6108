"use strict"

/*  Variable that enables you to "talk to" your SVG drawing canvas. */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

/* Draw a border that matches the maximum drawing area for this assignment.
    Assign the border to a variable so that:
        (1) We know what the purpose of the shape is, and
        (2) We will have the ability to change it later (in a future assignment)
*/
let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

// DownBlow is Moses Drawing

let butterflyBody = drawing.append("rect")
    .attr("x" , 110)
    .attr("y" , 60)
    .attr("width" , 10)
    .attr("height" , 150)
    .attr("fill", "green")

let butterflyLeftTopWing = drawing.append("polyline")
    .attr("points", closedPolygon(
        20 , 20 , 
        110 , 90 , 
        10 , 130))
    .attr("fill", "yellow")

let butterflyRightTopWing = drawing.append("polyline")
    .attr("points", closedPolygon(
        200 , 20 , 
        120 , 90 , 
        220 , 130))
    .attr("fill", "yellow")

let butterflyRightLowerWing = drawing.append("polyline")
    .attr("points", closedPolygon(
        220 , 140 , 
        120 , 110 , 
        130 , 240))
    .attr("fill", "red") 

let butterflyLeftLowerWing = drawing.append("polyline")
    .attr("points", closedPolygon(
        20 , 140 , 
        110 , 110 , 
        100 , 240))
    .attr("fill", "red")

let butterflyLeftEye = drawing.append("circle")
    .attr("cx", 100)
    .attr("cy", 60)
    .attr("r", 10)
    .attr("fill", "black")

let butterflyRightEye = drawing.append("circle")
    .attr("cx", 130)
    .attr("cy", 60)
    .attr("r", 10)
    .attr("fill", "black")

let butterflyLeftTentacle = drawing.append("line")
    .attr("x1", 110)
    .attr("y1", 60)
    .attr("x2", 40)
    .attr("y2", 10)
    .attr("stroke", "black")
    .attr("stroke-width" , 2)

let butterflyRightTentacle = drawing.append("line")
    .attr("x1", 130)
    .attr("y1", 60)
    .attr("x2", 190)
    .attr("y2", 10)
    .attr("stroke", "black")
    .attr("stroke-width" , 2)