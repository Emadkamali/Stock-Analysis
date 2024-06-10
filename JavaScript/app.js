// Load the JSON data containing stock predictions
d3.json("../Output/predictions.json").then(function(data) {
    // Extract the tickers from the data
    var tickers = Object.keys(data);
    
    // Create dropdown options
    var dropdown = d3.select("#selTicker");
    dropdown.selectAll("option")
        .data(tickers)
        .enter().append("option")
        .attr("value", function(d) { return d; })
        .text(function(d) { return d; });

    // Initial plot based on the first ticker
    var initialTicker = tickers[0];
    updateStockPlot(initialTicker, data[initialTicker]);

    // Function to update the stock plot based on selected ticker
    function updateStockPlot(ticker, predictionData) {
        var layout = {
            title: "Stock Prediction for " + ticker,
            xaxis: { title: "Date" },
            yaxis: { title: "Price" },
            autosize: true, 
                margin: { 
                     l: 50, 
                     r: 50,
                     t: 50, 
                     b: 50, 
                     pad: 4 
    }
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

        var data = [trace1, trace2, trace3];

        Plotly.newPlot('stockPlot', data, layout);
    }

    // Function to handle dropdown menu change
    dropdown.on("change", function() {
        var selectedTicker = this.value;
        updateStockPlot(selectedTicker, data[selectedTicker]);
    });
}).catch(function(error) {
    console.error("Error loading data:", error);
});