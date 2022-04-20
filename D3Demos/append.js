const svg = d3.select("#chart-area").append("svg")
              .attr("width", 600)
              .attr("height", 400)


// // enter update exit selections
const data = [25, 20, 10, 12, 15, 23]

const circles = svg.selectAll("circle")
                    .data(data)

//d and i
circles.enter().append("circle")
                .attr("cx", (d,i)=>(i*50)+50)
                .attr("cy", 100)
                .attr("r", (d,i)=>d)
                .attr("fill", (d)=>{if(d>20){return "blue"}else {return "red"}})

// svg.append("circle")
//    .attr("cx",100)
//    .attr("cy",250)
//    .attr("r",70)
//    .attr("fill","red")

// svg.append("line")
//     .attr("x1", 20)
//     .attr("xy", 70)
//     .attr("x2", 100)
//     .attr("y2", 350)
//     .attr("stroke","brown")
//     .attr("stroke-width", 5)


// svg.append("rect")
//     .attr("x",200)
//     .attr("y",50)
//     .attr("width",240)
//     .attr("height",120)
//     .attr("fill","yellow")