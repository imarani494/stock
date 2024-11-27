import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "../styles/StockDetails.css";

const StockDetails = () => {
  const { symbol } = useParams();
  const [details, setDetails] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`/api/quote-equity?symbol=${symbol}`); 
        const data = response.data;

       
        setDetails({
          companyName: data.info.companyName,
          lastPrice: data.priceInfo.lastPrice,
          history: data.priceInfo.history || [],
        });

     
        setChartData({
          labels: data.priceInfo.history.map((p) => p.timestamp),
          datasets: [
            {
              label: "Price",
              data: data.priceInfo.history.map((p) => p.price),
              borderColor: "blue",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching stock details:", error.message);
      }
    };

    fetchDetails();
  }, [symbol]);

  return details ? (
    <div className="container stock-details">
      <h1>{details.companyName}</h1>
      <p className="stock-price">Current Price: {details.lastPrice}</p>
      <div className="chart-container">
        {chartData && <Line data={chartData} />}
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default StockDetails;
