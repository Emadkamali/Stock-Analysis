// Function to handle dropdown menu change
function optionChanged(selectedValue) {
    var ticker = selectedValue; 
    console.log("Selected ticker:", ticker);
    fetchStockPredictionData(ticker); 
}

// Function to fetch stock 
function fetchStockPredictionData(selectedTicker = null) {
    d3.json("../Output/all_stocks_prediction_and_test_data.json").then(function(predictions) {
        console.log("Stock prediction data:", predictions); 

       
        var dropdown = document.getElementById("selTicker");
        dropdown.innerHTML = ''; 
        Object.keys(predictions).forEach(function(ticker) {
            var option = document.createElement("option");
            option.text = ticker;
            option.value = ticker;
            dropdown.add(option);
        });

        // Set the dropdown to the selected ticker 
        if (selectedTicker) {
            dropdown.value = selectedTicker;
        } else {
           
            selectedTicker = dropdown.value;
        }

        // Update the plot 
        updateStockPlot(selectedTicker, predictions[selectedTicker]);
    }).catch(function(error) {
        console.error("Error loading stock prediction data:", error);
    });
}

// Function to update stock plot 
function updateStockPlot(ticker, data) {
    console.log("Updating stock plot for ticker:", ticker);

    // Get stock prediction data 
    var testDates = data.test.dates;
    var testPrices = data.test.prices;
    var forecastDates = data.forecast.dates;
    var forecastPrices = data.forecast.prices;

    // Create traces
    var trace1 = {
        x: testDates,
        y: testPrices,
        mode: 'lines',
        name: 'Test Data'
    };

    var trace2 = {
        x: forecastDates,
        y: forecastPrices,
        mode: 'lines',
        name: 'Forecast Data'
    };

    var plotData = [trace1, trace2];

    // Layout
    var layout = {
        title: `Stock Prediction for ${ticker}`,
        xaxis: {
            title: 'Date'
        },
        yaxis: {
            title: 'Price'
        },
        autosize: true, 
                margin: { 
                     l: 90, 
                     r: 90,
                     t: 90, 
                     b: 90, 
                     pad: 4 
    }
    };

    // Clear any previous plots
    document.getElementById('stockPlots').innerHTML = '';

   
    var plotContainer = document.createElement('div');
    plotContainer.id = `stockPlot_${ticker}`;
    plotContainer.style.marginBottom = '20px';
    document.getElementById('stockPlots').appendChild(plotContainer);

    // Plot the stock plot
    Plotly.newPlot(plotContainer, plotData, layout).then(function() {
        console.log(`Stock plot for ${ticker} updated successfully`);
    }).catch(function(error) {
        console.error(`Error plotting stock data for ${ticker}:`, error);
    });
}


fetchStockPredictionData();