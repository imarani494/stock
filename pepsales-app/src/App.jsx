import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css'

const App = () => {
  const [stockData, setStockData] = useState(null);
  const [symbol, setSymbol] = useState('RELIANCE'); 

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/quote-equity?symbol=${symbol}`);
        setStockData(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };
    
    fetchStockData();
  }, [symbol]);

  return (
    <div>
      <h1>Stock Data for {symbol}</h1>
      {stockData ? (
        <div>
          <p>Stock Price: {stockData.price}</p>
          <p>Company: {stockData.companyName}</p>
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
