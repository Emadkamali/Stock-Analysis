// Load the JSON data containing stock predictions
d3.json("../Output/predictions.json").then(function(data) {
    console.log("Data loaded successfully:", data); 
    
    // Extract the tickers from the data
    var tickers = Object.keys(data);
    console.log("Tickers extracted:", tickers); 
    
    // Create dropdown options
    var dropdown = d3.select("#selTicker");
    dropdown.selectAll("option")
        .data(tickers)
        .enter().append("option")
        .attr("value", function(d) { return d; })
        .text(function(d) { return d; });

    // plot based on the first ticker
    var initialTicker = tickers[0];
    console.log("Initial ticker:", initialTicker); 
    
    updateStockPlot(initialTicker, data[initialTicker]); 

    function updateStockPlot(ticker, predictionData) {
        console.log("Updating plot for:", ticker); 
        
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

        Plotly.newPlot('stockPlot', plotData, layout).then(gd => {
            console.log("Plot updated successfully for:", ticker);
        }).catch(error => {
            console.error("Error updating plot for:", ticker, error);
        });
    }

    // Define the optionChanged 
function optionChanged(selectedTicker) {
    
    console.log("Selected ticker:", selectedTicker);

    
    updateStockPlot(selectedTicker);
}

    // Function to handle dropdown 
    dropdown.on("change", function() {
        var selectedTicker = this.value;
        console.log("Selected ticker:", selectedTicker); 
        
        updateStockPlot(selectedTicker, data[selectedTicker]); 
    });
    
}).catch(function(error) {
    console.error("Error loading data:", error); 
});