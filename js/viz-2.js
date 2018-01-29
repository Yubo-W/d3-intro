// 2 
// Let's append one element to the SVG element.
$(function () {
    // Select the element from the HTML DOM. 
    var svg = d3.select("#one-element");

    // Append the element to the svg. 
    svg.append('circle') // append a new circle, returning the circle
        .attr('cx', 50) // x position of the center of the circle
        .attr('cy', 50) // y position of the center of te circle
        .attr('r', 30) // Radius of te circle
        .attr('fill', 'red') // Fill color
        .attr('stroke', 'black') // Border of the circle
        .attr('stroke-width', 5); // Width of the border

    // Append the element to the svg. 
    svg.append('rect')
        .attr('x', 100)
        .attr('y', 50)
        .attr('width', 100)
        .attr('height', 50)
        .attr('fill', 'pink')
        .attr('stroke', 'purple')
        .attr('stroke-width', 5);

    // Feel free to play with SVG elements here
    // Try changing values or adding new elements above
})