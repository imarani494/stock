import React, { useState, useEffect } from "react";
import { market } from "../data/market";
import { Link } from "react-router-dom";
import "../styles/stocklist.css";

const StockList = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchStocks = () => {
      setTimeout(() => {
        setStockData(market);
        setLoading(false);
      }, 2000); 
    };
    fetchStocks();
  }, []);

  if (loading) {
    return <div className="loading">Loading stock data...</div>;
  }

  return (
    <div className="stock-list-container">
      <h1>Stock Prices</h1>
      <div className="stock-cards">
        {stockData.map((stock) => (
          <div key={stock.id} className="stock-card">
            <h2>{stock.name}</h2>
            <p>
              <strong>Price:</strong> {stock.price}
            </p>
            <p>
              <strong>Change:</strong> {stock.change}
            </p>
            <Link to={`/stock/${stock.id}`} className="details-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockList;
