CREATE TABLE "Stocks_Data" (
    "Date" DATE PRIMARY KEY,
    "AAPL" FLOAT   NOT NULL,
    "KO" FLOAT   NOT NULL,
    "MDLZ" FLOAT   NOT NULL,
    "SHOP" FLOAT   NOT NULL
);

SELECT * FROM "Stocks_Data" 
LIMIT 5;

SELECT * FROM "Stocks_Data" 
WHERE "SHOP" != 0
LIMIT 5 ;