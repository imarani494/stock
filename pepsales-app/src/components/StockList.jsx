import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStockData } from "../store/stocksSlice";
import { useNavigate } from "react-router-dom";
import "../styles/StockList.css";

const symbols = ["RELIANCE", "TCS", "INFY", "HDFC", "ICICIBANK"];

const StockList = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks.data);
  const navigate = useNavigate();

  useEffect(() => {
    symbols.forEach((symbol) => dispatch(fetchStockData(symbol)));
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Stock List</h1>
      <ul className="stock-list">
        {stocks.map((stock) => (
          <li key={stock.symbol} onClick={() => navigate(`/details/${stock.symbol}`)}>
            <span className="stock-symbol">{stock.symbol}</span>
            <span className="stock-price">{stock.data.priceInfo?.lastPrice}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
