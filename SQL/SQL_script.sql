-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/h5Cmeh
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


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