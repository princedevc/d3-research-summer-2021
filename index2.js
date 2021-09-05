// var margin = {top:30, right:30, bottom:30, left:30};
// var width = 450 - margin.left - margin.right;
// var height = 450 - margin.top - margin.bottom;
// var svg = d3.select(".sg2")
// .append("g")
// .attr("transform", 
//     "translate(30,30)"); //to give a padding

// var section2 = ["P1", "P2", "P3", "P4", "P5", "P6"];
// var theLabel2 = ["1", "2", "3", "4", "5", "6"];

// var x = d3.scaleBand()
// .range([0, width]).domain(section2)
// .padding(0.05);
// svg.append("g")
// .attr("transform","translate(0," + height + ")")
// .call(d3.axisBottom(x));


// var y = d3.scaleBand()
// .range([0, height]).domain(theLabel2)
// .padding(0.02);
// svg.append("g")
// .call(d3.axisLeft(y));

// var myColor = d3.scaleLinear()
// .range(["white", "#f20"])
// .domain([1,200]);


// //fetch the data
// d3.csv("index2.csv").then(function (data) {
//     svg.selectAll().data(data, function(d){return d.group+d.label;})
//     .enter()
//     .append("rect")
//     .attr("x",function(d) {return x_scale(d.group) })
//     .attr("y", function(d) {return y_scale(d.label)})
//     .attr("width",x_scale.bandwidth())
//     .attr("height", y_scale.bandwidth())
//     .style("fill", function(d){return myColor(d.value2)});
// });

