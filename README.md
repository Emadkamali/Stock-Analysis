# Stock-Analysis and Prediction
**Comprehensive Project Analysis and Comparison of Models**
**Introduction:**
The project aims to forecast stock prices using machine learning models and technical indicators. Three main models were explored: Prophet with Technical Indicators, Prophet without Technical Indicators, and Gradient Boosting Regression. These models were analyzed and compared to determine the most suitable approach for stock price prediction.

**Libraries Used:**
The project utilized various Python libraries, including:

yfinance
requests
vaderSentiment
pandas
pandas_ta
Prophet
scikit-learn
numpy
matplotlib
plotly
Flask (for hosting the Gradient Boosting Regression model)
HTML, CSS (for creating a web interface)
Tableau (for storyboarding)

**Model Conditions and Use Cases:**

**Prophet Model 1 (With Technical Indicators):**

**Strengths:**
Incorporates multiple technical indicators (SMA, EMA, RSI, MACD, Bollinger Bands) for comprehensive market analysis.
Effectively captures seasonality and trends, providing valuable insights for long-term investment strategies.
**Weaknesses:**
Computationally intensive due to the complexity of technical indicators.
Requires meticulous data preparation and cleaning.
**Performance:**
Higher MSE than the Gradient Boosting Model indicates less accuracy for short-term forecasting.
**Conditions for Use:**
Requires sufficient historical stock price data and accurate technical indicators.
Ideal for long-term investors focusing on market trends and patterns.

**Prophet Model 2 (Without Technical Indicators):**

**Strengths:**
Simpler and faster to implement, focusing solely on historical price data.
Effective in capturing general trends and seasonal patterns over a longer period.
**Weaknesses:**
Lack of detailed technical indicators may limit accuracy for short-term forecasts.
**Performance:**
Higher MSE compared to the Gradient Boosting Model, less suitable for accurate short-term prediction.
**Conditions for Use:**
Requires clean and preprocessed historical price data.
Suitable for quick trend analysis without the complexity of technical indicators.

**Gradient Boosting Regression Model:**

**Strengths:**
Focuses on predicting next day's closing price using current day's closing price, providing a straightforward approach.
Utilizes ensemble techniques for high accuracy and robustness.
**Weaknesses:**
Simple feature set may limit its ability to capture complex market dynamics.
Hyperparameter tuning may be required for optimal performance.
**Performance:**
Lowest MSE among the models, indicating the highest accuracy for short-term forecasting.
**Conditions for Use:**
Requires clean historical price data with no missing values.
Suitable for accurate short-term price prediction with minimal preprocessing.

**Performance Metrics for Evaluation:**
**Mean Squared Error (MSE):** Measures average squared difference between actual and predicted values.
**Root Mean Squared Error (RMSE):** Provides interpretable metric by taking square root of MSE.
**Mean Absolute Error (MAE):** Represents average absolute difference between actual and predicted values.

**Visual Comparison of Models:**

**Prophet Model 1:** Comprehensive visualization with technical indicators, suitable for understanding market sentiment and long-term trends.
**Prophet Model 2:** Simpler visualization focusing on historical and forecasted prices, ideal for straightforward trend analysis.
**Gradient Boosting Model:** Clear and focused visualization of historical, test, and predicted prices, effective for accurate short-term forecasts.

**Features Added:**
**1.Hosting Gradient Boosting Model with Flask:**

Integrates Gradient Boosting Model with Flask application, facilitating hosting on a local server.
Allows real-time prediction requests and responses, enhancing accessibility and usability.

**2. HTML and CSS for Easy Access:**

Creates user-friendly web interface using HTML and CSS for organized presentation of findings and results.
Improves user experience and accessibility, facilitating easy access to information without delving into the code.

**3. Tableau Storyboarding:**

Utilizes Tableau for storyboarding, providing a visual narrative of the project journey and key insights.
Enhances presentation and communication of findings, offering a dynamic and interactive platform for data exploration.

**Conclusion:**
The Gradient Boosting Regression Model emerges as the optimal choice for stock price forecasting due to its superior accuracy, evidenced by the lowest MSE. The addition of Flask integration, HTML/CSS interface, and Tableau storyboarding further enhances usability, accessibility, and presentation of findings. While Prophet models offer comprehensive insights, their higher MSE suggests they are less suited for precise short-term price forecasting in this context. The simplicity, accuracy, and enhanced capabilities of the Gradient Boosting Model make it the preferred choice for stock price prediction.

**Future Scope**

**Fine-tuning Models:**
Further hyperparameter tuning and optimization of models for improved accuracy.
**Enhanced Web Interface:**
Adding interactive features and responsive design to the web interface for better user experience.
**Incorporating Additional Data:**
Integration of external datasets (e.g., economic indicators, news sentiment) for more robust analysis.
**Ensemble Methods:**
Exploration of ensemble methods combining multiple models for enhanced predictive power.
**Deployment on Cloud:**
Deployment of models and web interface on cloud platforms for scalability and accessibility.
