from flask import Flask, render_template
import yfinance as yf
import matplotlib.pyplot as plt
import seaborn as sns
import datetime
import os

app = Flask(__name__)

tickers = ['SHOP', 'KO', 'MDLZ', 'AAPL']
start_date = '2010-01-01'
end_date = datetime.datetime.now()

def get_stock_data(tickers):
    stock_data = yf.download(tickers, start=start_date, end=end_date)['Close']
    stock_data.sort_index(inplace=True)
    return stock_data

def calculate_moving_averages(data, window=30):
    moving_averages = data.rolling(window=window).mean()
    return moving_averages.dropna()

def calculate_daily_returns(data):
    returns = data.pct_change().dropna()
    return returns

def plot_data(data, moving_averages, returns, ticker):
    # Create the static directory if it doesn't exist
    if not os.path.exists('static'):
        os.makedirs('static')

    # Plot closing prices and moving averages
    plt.figure(figsize=(14, 7))
    data[ticker].plot(label=f'{ticker} Close')
    moving_averages[ticker].plot(label=f'{ticker} 30-Day MA')
    plt.title(f'{ticker} Closing Prices and 30-Day Moving Averages')
    plt.xlabel('Date')
    plt.ylabel('Price')
    plt.legend()
    plt.savefig(f'static/{ticker}_prices_ma.png')
    plt.close()

    # Plot daily returns
    plt.figure(figsize=(14, 7))
    returns[ticker].plot(label=ticker)
    plt.title(f'{ticker} Daily Returns')
    plt.xlabel('Date')
    plt.ylabel('Daily Return')
    plt.legend()
    plt.savefig(f'static/{ticker}_daily_returns.png')
    plt.close()

@app.route('/')
def index():
    data = get_stock_data(tickers)
    moving_averages = calculate_moving_averages(data)
    returns = calculate_daily_returns(data)

    # Create the static directory if it doesn't exist
    if not os.path.exists('static'):
        os.makedirs('static')

    # Plot box-and-whisker for closing prices
    plt.figure(figsize=(10, 5))
    sns.boxplot(data=data)
    plt.title('Box-and-Whisker Plot of Stock Closing Prices')
    plt.xlabel('Stock')
    plt.ylabel('Price')
    plt.savefig('static/boxplot.png')
    plt.close()

    for ticker in tickers:
        plot_data(data, moving_averages, returns, ticker)

    return render_template('index.html', tickers=tickers)

if __name__ == '__main__':
    app.run(debug=True)
