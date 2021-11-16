
const container = d3.select(".container");

const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 70
};

const width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

const tooltip = container
    .append("div")
    .attr("id", "tooltip")
    .style("opacity", 0);

// include in the div tooltip, two paragraphs to detail the information in two lines
tooltip
    .append("p")
    .attr("class", "title");

tooltip
    .append("p")
    .attr("class", "description");



// VERTICAL BAR CHART
const marginLeftAge = margin.left/2;
const marginBottomAge = margin.bottom + 20;
const heightAge = height/2;

// replicate the reasoning applied to the first visualization, inclluding a wrapping section and introductory HTML elements
const age = container
    .append("section");

age
    .append("h2")
    .text("Data Table");

age
    .append("p")
    .text("Air Quality Index for Beijing");


// strucure the data in an array of objects, similarly to the first viz
const dataAge = [
    {
        category: '10/17',
        value: '41'
    },
    {
        category: '10/18',
        value: '38'
    },
    {
        category: '10/19',
        value: '30'
    },
    {
        category: '10/20',
        value: '48'
    },
    {
        category: '10/21',
        value: '33'
    },
    {
        category: '10/22',
        value: '35'
    },
    {
        category: '75 +',
        value: '24'
    }
];


// SVG
// using the updated values for the left margin and height values
const ageSVG = age
    .append("svg")
    .attr("viewBox", `0 0 ${width + marginLeftAge + margin.right} ${heightAge + margin.top + marginBottomAge}`)
    .append("g")
    .attr("transform", `translate(${marginLeftAge}, ${margin.top})`);

// SCALES
// switching the reasoning applied to the previous viz, as to have the bars drawn vertically

const ageYScale = d3
    .scaleLinear()
    // domain to go from 0 to 50 (as from 0 to 100 would render miniscule bars)
    .domain([0, 50])
    // range from the height to 0 to complement the top to bottom SVG logic
    .range([heightAge, 0]);

const ageXScale = d3
    .scaleBand()
    .domain(dataAge.map(dataLicense => dataLicense.category))
    .range([0, width]);

// AXES
const ageXAxis = d3
    .axisBottom(ageXScale);

const ageYAxis = d3
    .axisLeft(ageYScale)
    // reduce the number of ticks
    .ticks(5)

ageSVG
    .append("g")
    .attr("class", `axis`)
    .attr("id", `x-axis`)
    .attr("transform", `translate(0, ${heightAge})`)
    .call(ageXAxis)
    // select the tick labels and rotate them
    .selectAll("text")

ageSVG
    .append("g")
    .attr("id", `y-axis`)
    .attr("class", `axis`)
    .call(ageYAxis);

// GRID LINES
// include grid lines, on the basis of horizontal ticks
ageSVG
    .select("g#y-axis")
    .append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", width)
    .attr("y2", 0)
    .style("opacity", 0.3);

// FORMAT
// formatting function to have round numbers
const formatPercent = d3.format("d");

// VERTICAL BARS
ageSVG
    .selectAll("rect")
    .data(dataAge)
    .enter()
    .append("rect")
    
    // position the rectangle elements alongside the horizontal axis
    .attr("x", (d) => ageXScale(d.category) + ageXScale.bandwidth()/4)
    .attr("width", ageXScale.bandwidth()/2)

    // transition the bars
    .attr("y", ageYScale(0))
    .attr("height", 0)
    .transition()
    .duration((d, i) => 1000 - 100 * i)
    .delay((d, i) => 500 + 100 * i)
    .attr("y", (d) => ageYScale(d.value))
    .attr("height", (d) => (heightAge) - ageYScale(d.value));