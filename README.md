# Filtering Query Data Web Application
## Challenge completed for Data Analytics Bootcamp at the University of Texas

![Photo of Web App at Completion](UFO-level-1/static/images/screenshot.png)

### Skills Used

* Coding Languages
  * JavaScript
  * HTML
  * CSS
* Libraries
  * d3
  
### Example Code
```javascript
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

    // Reset the table
    tbody.html("");

    filteredData.forEach(function(dataReport) {
        console.log(dataReport);
        // Create empty rows for data query results
        var row = tbody.append("tr");
        Object.entries(dataReport).forEach(function([key,value]) {
            var cell = row.append("td");
            cell.text(value);
        })
    });
};
```
