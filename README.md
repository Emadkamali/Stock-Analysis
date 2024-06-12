![Header](https://github.com/vanillatyy1/23_Stock_price_prediction/blob/cba086b4ff6b098335b2f87cdee2a96823f3be96/Images/readme_image.jpg)
# Stock-Analysis and Prediction
***Comprehensive Project Analysis and Comparison of Models***

## Introduction:
The project aims to forecast stock prices using machine learning models and technical indicators. Three main models were explored: Prophet with Technical Indicators, Prophet without Technical Indicators, and Gradient Boosting Regression. These models were analyzed and compared to determine the most suitable approach for stock price prediction.

## Libraries Used:
The project utilized various Python libraries, including:

    -   yfinance, requests, vaderSentiment
    -   pandas, pandas_ta
    -   Prophet, scikit-learn, numpy
    -   matplotlib, plotly
    -   Flask (for hosting Gradient Boosting Regression model)
    -   HTML, CSS (for web interface creation)
    -   Tableau (for storyboarding)

## Model Conditions and Use Cases:

### **Base Model - Addictive Regression Model (Without Technical Indicators):**

-   **Strengths:**
    -   Simpler and faster implementation,  focusing solely on historical price data
    -   Effective to visualize the shape and provide head start with trend analysis
    
-   **Weaknesses:**
    -   Lack of detailed technical indicators limits short-term and long term accuracy
    
-   **Performance:**
    -   Higher MSE compared to Gradient Boosting Model

-   **Conditions for Use:**
    -   Requires clean and preprocessed historical price data
    -   Suitable for quick trend analysis without the complexity of technical indicators

### Sentiment Analysis with Addictive Regression Model  (With Technical Indicators):

-   **Strengths:**
    -   Incorporates multiple technical indicators (SMA, EMA, RSI, MACD) for comprehensive market analysis
    -   Captures seasonality and trends for long-term strategies, providing valuable insights for long-term investment strategies
    
-   **Weaknesses:**
    -   Computationally intensive due to the complexity of technical indicators
    -   Requires meticulous data preparation and cleaning
    
-   **Performance:**
    -   Higher MSE than the Gradient Boosting Model indicates less accuracy for short-term forecasting

-   **Conditions for Use:**
	- Requires sufficient historical stock price data and accurate technical indicators
	- Ideal for long-term investors focusing on market trends and patterns

### Gradient Boosting Regression Model:

-   **Strengths:**
    -   Predicts next day's closing price using current day's closing price, providing a straightforward approach
    -   High accuracy and robustness with ensemble techniques
    
-   **Weaknesses:**
    -   Simple feature set may limit its ability to capture complex market dynamics
    -   Hyperparameter tuning may be required for optimal performance
    
-   **Performance:**
    -   Lowest MSE among the models, indicating the highest accuracy for short-term forecasting

-   **Conditions for Use:**
    -   Requires clean historical price data with no missing values
    -   Suitable for accurate short-term price prediction with minimal preprocessing

## Performance Metrics for Evaluation:

-    **Mean Squared Error (MSE) :**
    -   Measures average squared difference between actual and predicted values
-    **Mean Absolute Error (MAE):**
    -   Represents average absolute difference between actual and predicted values
-    **Root Mean Squared Error (RMSE):**
    -   Interpretable metric (square root of MSE)

## Visual Comparison of Models:

-   **Base Model:** Simpler visualization focusing on historical and forecasted prices
-   **Sentiment Analysis with Addictive Regression Model:** Comprehensive visualization with technical indicators, suitable for understanding market sentiment and long-term trends
-   **Gradient Boosting Model:** Clear visualization of historical, test, and predicted prices for short-term forecasts

## Features Added:

**1. Hosting Gradient Boosting Model with Flask:**

-   Integration with Flask for hosting on a local server
-   Real-time prediction requests and responses

**2. HTML and CSS for Easy Access:**

-   User-friendly web interface for organized presentation
-   Enhances user experience and accessibility

**3. Tableau Storyboarding:**

-   Visual narrative of project journey and insights
-   Dynamic and interactive platform for data exploration

## Conclusion:
-   Gradient Boosting Regression Model is optimal for stock price forecasting due to lowest MSE
-   Flask integration, HTML/CSS interface, and Tableau storyboarding enhance usability and presentation
-   Models using the Prophet Library offer comprehensive insights but are less suited for short-term forecasts

## Future Scope:

-   **Fine-tuning Models**: Improve accuracy through hyperparameter tuning
-   **Enhanced Web Interface**: Interactive and responsive design improvements
-   **Incorporating Additional Data**: Integration of economic indicators and news sentiment
-   **Ensemble Methods**: Combine multiple models for enhanced predictive power
-    **Deployment on Cloud**: For scalability and accessibility