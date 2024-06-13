// Load the JSON data containing stock predictions
d3.json("../Output/predictions.json").then(function(data) {
    console.log("Data loaded successfully:", data); // Log data to check if it's loaded correctly
    
    // Extract the tickers from the data
    var tickers = Object.keys(data);
    console.log("Tickers extracted:", tickers); // Log tickers to verify
    
    // Create dropdown options
    var dropdown = d3.select("#selTicker");
    dropdown.selectAll("option")
        .data(tickers)
        .enter().append("option")
        .attr("value", function(d) { return d; })
        .text(function(d) { return d; });

    // Initial plot based on the first ticker
    var initialTicker = tickers[0];
    console.log("Initial ticker:", initialTicker); // Log initial ticker to verify
    
    updateStockPlot(initialTicker, data[initialTicker]); // Call updateStockPlot with initial data
    
    // Function to update the stock plot based on selected ticker
    function updateStockPlot(ticker, predictionData) {
        console.log("Updating plot for:", ticker); // Log to check which ticker is being updated
        
        var layout = {
            title: "Stock Prediction for " + ticker,
            xaxis: { title: "Date" },
            yaxis: { title: "Price" },
            autosize: true, 
            margin: { l: 50, r: 50, t: 50, b: 50, pad: 4 }
        };

        var trace1 = {
            x: predictionData.train.dates,
            y: predictionData.train.prices,
            mode: 'lines',
            name: 'Train Data'
        };

        var trace2 = {
            x: predictionData.test.dates,
            y: predictionData.test.prices,
            mode: 'lines',
            name: 'Test Data'
        };

        var trace3 = {
            x: predictionData.forecast.dates,
            y: predictionData.forecast.prices,
            mode: 'lines',
            name: 'Forecasted Data'
        };

        var plotData = [trace1, trace2, trace3];

        // Ensure Plotly is properly initialized
        Plotly.newPlot('stockPlot', plotData, layout).then(gd => {
            console.log("Plot updated successfully for:", ticker);
        }).catch(error => {
            console.error("Error updating plot for:", ticker, error);
        });
    }

    // Define the optionChanged function
function optionChanged(selectedTicker) {
    // Log the selected ticker to verify
    console.log("Selected ticker:", selectedTicker);

    // Call the updateStockPlot function with the selected ticker
    updateStockPlot(selectedTicker);
}

    // Function to handle dropdown menu change
    dropdown.on("change", function() {
        var selectedTicker = this.value;
        console.log("Selected ticker:", selectedTicker); // Log selected ticker
        
        updateStockPlot(selectedTicker, data[selectedTicker]); // Update plot based on selected ticker
    });
    
}).catch(function(error) {
    console.error("Error loading data:", error); // Log any errors during data loading
});