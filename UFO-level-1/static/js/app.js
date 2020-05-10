// from data.js
var tableData = data;

// d3 selections
var tbody = d3.select("tbody")
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");

// // Event handler for button click
// button.on("click", someFunction());
// formDate.on("submit", someFunction());

button.on("click", function(){
    // Prevent the page from refresh
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    // Use the form input to filter the data by date
    var filterData = tableData.filter()
})

// data.forEach(function(dataReport) {
//     console.log(dataReport);
//     var row = tbody.append("tr");
    
//     Object.entries(dataReport).forEach(function([key,value]) {
//     console.log(key,value)

//     var cell = tbody.append("td");
//     cell.text(value);
//     });
// });