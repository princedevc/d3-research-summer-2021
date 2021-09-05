let margin = { top: 30, right: 30, bottom: 30, left: 30 };
let width = 450 - margin.left - margin.right;
let height = 450 - margin.top - margin.bottom;

let main_data;
let svg = d3.select(".sg")
    .append("g")
    .attr("transform",
        "translate(30,30)"); //to give a padding

let section = ["P", "P0", "P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9", "P10", "P11"];
let theLabel = ["00", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

let section_2 = ["P0", "P1", "P2", "P3", "P4", "P5"];
let x_scale = d3.scaleBand()
    .range([0, width]).domain(section)
    .padding(0.01);

let y_scale = d3.scaleBand()
    .range([0, height]).domain(theLabel);
//.padding(0.01);

//2nd svg
let svg2 = d3.select(".sg2")
    .append("g")
    .attr("transform",
        "translate(30,30)");


function append_signs() {
    svg.append("g")
        .attr("transform", "translate(0," + height - 10 + ")")
        .append("text").text("Data View").attr('font-weight', 'bold').attr('font-size', '25');
    svg2.append("g").attr("transform", "translate(0," + height - 10 + ")")
        .append("text").text("Adjacency Matrix").attr('font-weight', 'bold').attr('font-size', '25');
    svg2.append("rect").attr("x", 200).attr("y", 370).attr("width", 20).attr("height", 20).style("fill", "red");
    svg2.append("rect").attr("x", 100).attr("y", 370).attr("width", 20).attr("height", 20).style("fill", "green");
    svg2.append("text").attr("x", 130).attr("y", 385).text("Send").style("font-size", "15px");
    svg2.append("text").attr("x", 230).attr("y", 385).text("Receive").style("font-size", "15px");
}


d3.csv("index.csv").then(function (data) {
    main_data = data;
    append_signs();
    svg.selectAll().data(data, function (d) { return d.group + d.label; })
        .enter()
        .append("g")
        .append("text")
        .attr("x", function (d) { return x_scale(d.group) })
        .attr("y", function (d) { return y_scale(d.label) })
        .attr("transform", "translate(0," + height * 0.3 + ")")
        .text(function (d) {
            return d.value
        })
        .exit();

    svg2.selectAll()
        .data(data, function (d) { return d.group + d.label; })
        .enter().append("g")
        .append("text")
        .attr("x", function (d) { return x_scale(d.group) })
        .attr("y", function (d) { return y_scale(d.label) })
        .attr("transform", "translate(0," + height * 0.3 + ")")
        .text(function (d) {
            return d.value2;

        });


});

function run() {
    remove();
    svg.selectAll().data(main_data).enter()//.transition()
        //.duration(2000)
        .append("text")
        .attr("x", function (d) { return x_scale(d.group) })
        .attr("y", function (d) { return y_scale(d.label) })
        .attr("transform", "translate(0," + height * 0.3 + ")")
        .text(function (d) {
            //this ensures the colours changes to green from red
            if (d.firstRotation === "01" || d.firstRotation === "12" || d.firstRotation === "23" ||
                 d.firstRotation === "03" || d.firstRotation === "14" || d.firstRotation === "25" ||
                 d.firstRotation === "05" || d.firstRotation === "10" ||d.firstRotation === "21" ||
                 d.firstRotation === "34" || d.firstRotation === "30" || d.firstRotation === "32" ||
                 d.firstRotation === "45" ||d.firstRotation === "41" || d.firstRotation === "43" ||
                 d.firstRotation === "50" || d.firstRotation === "52" || d.firstRotation === "54" 
                 ) {
                d3.select(this).style("fill", "green").attr('font-weight', 'bold');
                
            }
            return d.firstRotation;
        });
        
        //this removes the "Initial data text and shows the next step"
        d3.select("h3").text("Communication step k = 0");
        
        svg2.selectAll()
        .data(main_data, function (d) { return d.group + d.label; })
        .enter().append("g")
        .append("text")
        .attr("x", function (d) { return x_scale(d.group) })
        .attr("y", function (d) { return y_scale(d.label) })
        .attr("transform", "translate(0," + height * 0.3 + ")")
        .text(function (d) {
            if (d.adjacency == "1") {
                d3.select(this).style("fill", "green").attr("font-weight","bold");

            }
            return d.adjacency;

        });
}

function run0(){
    remove();
    svg.selectAll().data(main_data).enter()//.transition()
        //.duration(2000)
        .append("text")
        .attr("x", function (d) { return x_scale(d.group) })
        .attr("y", function (d) { return y_scale(d.label) })
        .attr("transform", "translate(0," + height * 0.3 + ")")
        .text(function (d) {
            //this ensures the colours changes to green from red
            if (d.commStep0 === "50" || d.commStep0 === "12" || d.commStep0 === "34" ||
                 d.commStep0 === "52" || d.commStep0 === "14" || d.commStep0 === "30" ||
                 d.commStep0 === "54" || d.commStep0 === "10" ||d.commStep0 === "32" ||
                 d.commStep0 === "01" || d.commStep0 === "23" || d.commStep0 === "45" ||
                 d.commStep0 === "03" ||d.commStep0 === "25" || d.commStep0 === "41" ||
                 d.commStep0 === "05" || d.commStep0 === "21" || d.commStep0 === "43" 
                 ) {
                d3.select(this).style("fill", "red").attr('font-weight', 'bold');
                
            }
            return d.commStep0;
        });

        //this removes the "Initial data text and shows the next step"
        d3.select("h3").text("Communication step k = 0");

        svg2.selectAll()
        .data(main_data, function (d) { return d.group + d.label; })
        .enter().append("g")
        .append("text")
        .attr("x", function (d) { return x_scale(d.group) })
        .attr("y", function (d) { return y_scale(d.label) })
        .attr("transform", "translate(0," + height * 0.3 + ")")
        .text(function (d) {
            if (d.adjacency0 == "1") {
                d3.select(this).style("fill", "green").attr("font-weight","bold");
            }
            if (d.adjacency0 == "R") {
                d3.select(this).style("fill", "red").attr("font-weight","bold");
            }
            return d.adjacency0;
        });
}

function run1(){
    remove();
    svg.selectAll().data(main_data).enter()//.transition()
        //.duration(2000)
        .append("text")
        .attr("x", function (d) { return x_scale(d.group) })
        .attr("y", function (d) { return y_scale(d.label) })
        .attr("transform", "translate(0," + height * 0.3 + ")")
        .text(function (d) {
            //this ensures the colours changes to green from red
            if (d.commStep0 === "13" || d.commStep0 === "24" || d.commStep0 === "35" ||
                 d.commStep0 === "03" || d.commStep0 === "14" || d.commStep0 === "25" ||
                  d.commStep0 === "40" ||
                  d.commStep0 === "30" || 
                 d.commStep0 === "41" ||
                 d.commStep0 === "02" || d.commStep0 === "51" || d.commStep0 === "52") 
                 
                 {
                d3.select(this).style("fill", "green").attr('font-weight', 'bold');
                
            }
            return d.commStep0;
        });

        //this removes the "Initial data text and shows the next step"
        d3.select("h3").text("Communication step k = 1");

        svg2.selectAll()
        .data(main_data, function (d) { return d.group + d.label; })
        .enter().append("g")
        .append("text")
        .attr("x", function (d) { return x_scale(d.group) })
        .attr("y", function (d) { return y_scale(d.label) })
        .attr("transform", "translate(0," + height * 0.3 + ")")
        .text(function (d) {
            if (d.adjacency1 == "1") {
                d3.select(this).style("fill", "green").attr("font-weight","bold");
            }
            // if (d.adjacency1 == "R") {
            //     d3.select(this).style("fill", "red").attr("font-weight","bold");
            // }
            return d.adjacency1;
        });
}

function run2(){
    remove();
    svg.selectAll().data(main_data).enter()//.transition()
        //.duration(2000)
        .append("text")
        .attr("x", function (d) { return x_scale(d.group) })
        .attr("y", function (d) { return y_scale(d.label) })
        .attr("transform", "translate(0," + height * 0.3 + ")")
        .text(function (d) {
            //this ensures the colours changes to green from red
            if (d.commStep1 === "13" || d.commStep1 === "24" || d.commStep1 === "35" ||
                 d.commStep1 === "03" || d.commStep1 === "14" || d.commStep1 === "25" ||
                  d.commStep1 === "40" ||
                  d.commStep1 === "30" || 
                 d.commStep1 === "41" ||
                 d.commStep1 === "02" || d.commStep1 === "51" || d.commStep1 === "52") 
                 
                 {
                d3.select(this).style("fill", "red").attr('font-weight', 'bold');
                
            }
            return d.commStep1;
        });

        //this removes the "Initial data text and shows the next step"
        d3.select("h3").text("Communication step k = 1");

        svg2.selectAll()
        .data(main_data, function (d) { return d.group + d.label; })
        .enter().append("g")
        .append("text")
        .attr("x", function (d) { return x_scale(d.group) })
        .attr("y", function (d) { return y_scale(d.label) })
        .attr("transform", "translate(0," + height * 0.3 + ")")
        .text(function (d) {
            if (d.adjacency2 == "R") {
                d3.select(this).style("fill", "red").attr("font-weight","bold");
            }
            if (d.adjacency2 == "1") {
                d3.select(this).style("fill", "green").attr("font-weight","bold");
            }
            return d.adjacency2;
        });
}

function run3(){
    remove();
    svg.selectAll().data(main_data).enter()//.transition()
        //.duration(2000)
        .append("text")
        .attr("x", function (d) { return x_scale(d.group) })
        .attr("y", function (d) { return y_scale(d.label) })
        .attr("transform", "translate(0," + height * 0.3 + ")")
        .text(function (d) {
            //this ensures the colours changes to green from red
            if (d.commStep1 === "05" || d.commStep1 === "31" || d.commStep1 === "53" ||
                 d.commStep1 === "54" || d.commStep1 === "21" || d.commStep1 === "43" ||
                  d.commStep1 === "15" ||
                  d.commStep1 === "05" ||  d.commStep1 === "04" ||
                 d.commStep1 === "20" ||
                 d.commStep1 === "10" || d.commStep1 === "42" || d.commStep1 === "32") 
                 
                 {
                d3.select(this).style("fill", "green").attr('font-weight', 'bold');
                
            }
            return d.commStep1;
        });

         //this removes the "Initial data text and shows the next step"
         d3.select("h3").text("Communication step k = 2");

         svg2.selectAll()
         .data(main_data, function (d) { return d.group + d.label; })
         .enter().append("g")
         .append("text")
         .attr("x", function (d) { return x_scale(d.group) })
         .attr("y", function (d) { return y_scale(d.label) })
         .attr("transform", "translate(0," + height * 0.3 + ")")
         .text(function (d) {
             if (d.adjacency3 == "1") {
                 d3.select(this).style("fill", "green").attr("font-weight","bold");
             }
             return d.adjacency3;
         });
}

function run4(){
    remove();
    svg.selectAll().data(main_data).enter()//.transition()
        //.duration(2000)
        .append("text")
        .attr("x", function (d) { return x_scale(d.group) })
        .attr("y", function (d) { return y_scale(d.label) })
        .attr("transform", "translate(0," + height * 0.3 + ")")
        .text(function (d) {
            //this ensures the colours changes to green from red
            if (d.commStep2 === "05" || d.commStep2 === "31" || d.commStep2 === "53" ||
                 d.commStep2 === "54" || d.commStep2 === "21" || d.commStep2 === "43" ||
                  d.commStep2 === "15" ||
                  d.commStep2 === "05" ||  d.commStep2 === "04" ||
                 d.commStep2 === "20" ||
                 d.commStep2 === "10" || d.commStep2 === "42" || d.commStep2 === "32") 
                 
                 {
                d3.select(this).style("fill", "red").attr('font-weight', 'bold');
                
            }
            return d.commStep2;
        });
        d3.select("h3").text("Communication step k = 2");

        svg2.selectAll()
         .data(main_data, function (d) { return d.group + d.label; })
         .enter().append("g")
         .append("text")
         .attr("x", function (d) { return x_scale(d.group) })
         .attr("y", function (d) { return y_scale(d.label) })
         .attr("transform", "translate(0," + height * 0.3 + ")")
         .text(function (d) {
             if (d.adjacency4 == "R") {
                 d3.select(this).style("fill", "red").attr("font-weight","bold");
             }
             if(d.adjacency4 == "1"){
                d3.select(this).style("fill", "green").attr("font-weight","bold");
             }
             return d.adjacency4;
         });
}

function run5(){
    remove();
    svg.selectAll().data(main_data).enter()//.transition()
        //.duration(2000)
        .append("text")
        .attr("x", function (d) { return x_scale(d.group) })
        .attr("y", function (d) { return y_scale(d.label) })
        .attr("transform", "translate(0," + height * 0.3 + ")")
        .text(function (d) { return d.finalRotation;   });
        
        d3.select("h3").text("Final Rotation");

        svg2.selectAll()
        .data(main_data, function (d) { return d.group + d.label; })
        .enter().append("g")
        .append("text")
        .attr("x", function (d) { return x_scale(d.group) })
        .attr("y", function (d) { return y_scale(d.label) })
        .attr("transform", "translate(0," + height * 0.3 + ")")
        .text(function (d) {
            if (d.adjacency5 == "1") {
                d3.select(this).attr("font-weight","bold");
            }
            return d.adjacency5;
        });
}

function remove() {
    d3.selectAll("text").remove();
    append_signs();
}
function vo(){
let v1 = setTimeout(() => {
    run()
}, 3000);

let v2 = setTimeout(() => {
    run0()
}, 6000);

let v3 = setTimeout(() => {
    run1()
}, 9000);

let v4 = setTimeout(() => {
    run2()
}, 12000);

let v5 = setTimeout(() => {
    run3()
}, 15000);

let v6 = setTimeout(() => {
    run4()
}, 18000);

let v7 = setTimeout(() => {
    run5()
}, 21000);

}
