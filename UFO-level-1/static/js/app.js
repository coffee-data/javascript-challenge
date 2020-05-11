// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Select the table body element
var tbody = d3.select("tbody");

// Event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// // Create the table and display
// data.forEach(function(dataReport) {
//     console.log(dataReport);
//     var row = tbody.append("tr");
    
//     Object.entries(dataReport).forEach(function([key,value]) {
//     console.log(key,value)

//     var cell = tbody.append("td");
//     cell.text(value);
//     });
// });

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    console.log(inputElement);

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    // Use the form input to filter the data by date
    var filteredData = tableData.filter(function(data) {
        return data.datetime === inputValue;
    })

    console.log(filteredData);

}

// button.on("click", function(){
//     // Prevent the page from refresh
//     d3.event.preventDefault();

//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#datetime");

//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");

//     console.log(inputValue);
//     console.log(tableData);

//     // Use the form input to filter the data by date
//     var filterData = tableData.filter()
// })