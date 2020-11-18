var margin  = {top: 40, bottom: 100, right: 30, left: 70},
    width = 4000 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;
var svg = d3.select("#barChart")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate("+margin.left+","+margin.top+")");

    var initGraph1 = function(passing){
        var subgroups = passing.columns.slice(0)
        
        var groups = d3.map(passing, function(d){return(d.group)}).keys()
    
        console.log("valuegggs", subgroups);
        console.log("values3", passing);
        
        
    var xScale = d3.scaleBand()
    .domain([0,400])
    .range([0,width])
    
    var yScale = d3.scaleLinear()
    .domain([0,500])
    .range([0, height])

    
    
var namesValus = [];
        
passing.forEach(gettingName);
        
        
function gettingName(item, mainScreen) {
    namesValus.push(item.PLAYER_NAME)
}        
        
console.log("values4", namesValus);
        
//add X
    var x = d3.scaleBand()
    .domain(namesValus)
    .range([0,width])
    .padding([.1])
    svg.append("g")
        .attr("class", "text")
    .attr("transform", "translate("+(0)+","+(height)+")")
    .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
        console.log(height);
        
        //add y
var y = d3.scaleLinear()
.domain([0,500])
.range([height, 0])
svg.append("g")
.call(d3.axisLeft(y));
        
//show the bars
svg.append("g")
.selectAll("g")
.data(passing)
.enter()
.append("rect")
.attr("width", function(d){return 45})
.attr("height", function(d){return yScale(parseInt(d.COMPLETED_PASS));})
.attr("fill", "green")
        .attr("x", function(d,i){return i*47})
        .attr('y', function(d){ return (height - parseInt(yScale(d.COMPLETED_PASS)))})
        
    
        
        //tooltip
.on("mouseenter" ,function(passing)
    {
    var xPos = d3.event.pageX;
    var yPos = d3.event.pageY;
    
    d3.select("#tooltip")
    .classed("hidden", false)
    .style("top",yPos+"px")
    .style("left",xPos+"px")
    
    d3.select("#attempted")
    .text("Attempted:"+passing.ATTEMPTED_PASS);
    d3.select("#comp")
    .text("Completed:"+passing.COMPLETED_PASS);
    
    
}) //tool tip off
        .on("mouseleave",function()
            {
    d3.select("#tooltip")
    .classed("hidden",true);
    
})

        var labels = d3.select("svg")
        .append("g")
        .classed("labels", true);
        
        labels.append("text")
        .text("NFL QB efficiency 2019")
        .classed("title", true)
        .attr("text-achor", "middle")
        .attr("x", margin.left+(width/2))
        .attr("y", margin.top)
        
        labels.append("text")
        .text("Player")
        .classed("label", true)
        .attr("text-anchor", "middle")
        .attr("x", margin.left+width/2)
        .attr("y", height+(margin.bottom+margin.top))
        
        labels.append("g")
        .attr("transform", "translate(20,"+(margin.top+(height/2))+")")
        .append("text")
        .text("Completed Passes")
        .classed("label", true)
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(90)")
    }
    
    
    
    
    
    //second graph
    
    var svg2 = d3.select("#touchdowns")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate("+margin.left+","+margin.top+")");

var initGraph2 = function(passes){
var subgroups = passes.columns.slice(0)

var groups = d3.map(passes, function(d){return(d.group)}).keys()

console.log("valuegggs", subgroups);
console.log("values3", passes);

 var xScale= d3.scaleBand()
 .domain([0,100])
 .range([height,0])

 var yScale = d3.scaleLinear()
   .domain([0,50])
 .range([0, height])
 
 
 var namesValus = [];

passes.forEach(gettingName);

function gettingName(item, mainScreen) {
    namesValus.push(item.PLAYER_NAME)
}

console.log("values4", namesValus);

//add x
var x = d3.scaleBand()
.domain(namesValus)
.range([0,width])
.padding([0.2])
svg2.append("g")
.attr("transform", "translate("+(0)+","+(height)+")")
.attr("class", "text")
.call(d3.axisBottom(x))
.selectAll("text")
.attr("transform", "translate(-10,0)rotate(-45)")
.style("text-anchor", "end");          console.log(height)

//add y
var y = d3.scaleLinear()
.domain([0,50])
.range([height, 0])
svg2.append("g")
.call(d3.axisLeft(y));

//show the bars
svg2.append("g")
.selectAll("g")
.data(passes)
.enter()
.append("rect")
.attr("width", function(d){return 45})
.attr("height", function(d){return yScale(parseInt(d.PASSING_TD));})
.attr("fill","purple")
.attr("x", function(d,i){return i*47})
.attr('y', function(d){ return (height - parseInt(yScale(d.PASSING_TD))); })

//tooltip
.on("mouseenter", function(passes)
    {
    
    var xPos = d3.event.pageX;
    var yPos = d3.event.pageY;
    
    d3.select("#tooltip2")
    .classed("hidden2", false)
    .style("top", yPos+"px")
    .style("left", xPos+"px")
    
    d3.select("#comp2")
    .text("Completed Touchdowns:"+" "+passes.PASSING_TD);
    
    d3.select("#attempted2")
    .text("Attempted:"+" "+passes.ATTEMPTED_PASS);
    })
    
    //tool tip off

.on("mouseleave", function()
    {
    d3.select("#tooltip2")
    .classed("hidden2", true);
})

var labels = d3.select("#touchdowns svg")
.append("g")
.classed("labels", true);

labels.append("text")
.text("NFL QB Touchdowns 2019")
.classed("title", true)
.attr("text-anchor", "middle")
.attr("x", margin.left+width/2)
.attr("y", margin.top)

labels.append("text")
.text("Player")
.classed("label", true)
.attr("text-anchor", "middle")
.attr("x", margin.left+width/2)
.attr("y", height+(margin.bottom+margin.top))

labels.append("g")
.attr("transform", "translate(20,"+(margin.top+(height/2))+")")
.append("text")
.text("Touchdowns Completed")
.classed("label", true)
.attr("text-anchor", "middle")
.attr("transform", "rotate(90)")
   
}





//graph 3
initGraph3 = function(percentages) {
    var margins = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margins.left - margins.right,
    height = 450 - margins.top - margins.bottom;

  
var svg = d3.select("#percents")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Add X axis
  var x = d3.scaleLinear()
    .domain([0, 700])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));


// Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 100])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));




 // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(percentages.filter(function(d,i){return i<50})) 
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.ATTEMPTED_PASS); } )
      .attr("cy", function (d) { return y(d.PASS_PCT); } )
      .attr("r", 7)
      .style("fill", "blue")
      .style("opacity", 1)
      .style("stroke", "yellow")

    
            //tooltip
.on("mouseenter" ,function(percentages)
    {
    var xPos = d3.event.pageX;
    var yPos = d3.event.pageY;
    
    d3.select("#tooltip3")
    .classed("hidden3", false)
    .style("top",yPos+"px")
    .style("left",xPos+"px")
    
    d3.select("#percents2")
    .text("Pass Percentage:"+percentages.PASS_PCT);
      
    d3.select("#attempted3")
    .text("Attempted:"+percentages.ATTEMPTED_PASS);
      
      d3.select("#name2")
      .text("Player:"+" "+percentages.PLAYER_NAME)
    
    
}) //tool tip off
        .on("mouseleave",function()
            {
    d3.select("#tooltip3")
    .classed("hidden3",true);
    
})
    

    
var labels = d3.select("#percents svg")
.append("g")
.classed("labels", true);

labels.append("text")
.text("NFL QB Pass Percents 2019")
.classed("title", true)
.attr("text-anchor", "middle")
.attr("x", margin.left+width/2)
.attr("y", margin.top-10)

labels.append("text")
.text("Passes Attempted")
.classed("label", true)
.attr("text-anchor", "middle")
.attr("x", margin.left+width/2)
.attr("y", height+(margin.bottom+margin.top-60))

labels.append("g")
.attr("transform", "translate(20,"+(margin.top+(height/2))+")")
.append("text")
.text("Percent")
.classed("label", true)
.attr("text-anchor", "middle")
.attr("transform", "rotate(90)")
   

}







var succFCN = function(values)
    {
        console.log("values", values);
        var passing = values[0];
        var passes = values[0];
        var percentages = values[0];
        initGraph1(passing)
        initGraph2(passes)
        initGraph3(percentages)
        
    }
    
    var failFCN = function(error)
    {
        console.log("error", error);
    }
    
    var passingPromise = d3.csv("../data/qbStats.csv")
 
    
    var promises = [passingPromise];

Promise.all(promises)
.then(succFCN, failFCN)




