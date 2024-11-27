import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { market } from "../data/market";
import "../styles/stockdetail.css";

const StockDetail = () => {
  const { id } = useParams();
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchStockDetail = () => {
      setTimeout(() => {
        const stockDetail = market.find((s) => s.id === parseInt(id));
        setStock(stockDetail);
        setLoading(false);
      }, 2000); 
    };
    fetchStockDetail();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading stock details...</div>;
  }

  if (!stock) {
    return <div className="loading">Stock not found!</div>;
  }

  return (
    <div className="stock-detail-container">
      <div className="stock-detail-card">
        <h2>{stock.name} Details</h2>
        <p>
          <strong>Price:</strong> {stock.price}
        </p>
        <p>
          <strong>Change:</strong> {stock.change}
        </p>
        <div className="graph">
          <h3>Price Movement (Graph) [Optional]</h3>
          <div className="placeholder-graph">Graph would go here</div>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;
