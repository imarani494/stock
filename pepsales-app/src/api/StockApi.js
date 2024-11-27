import axios from "axios";


const fetchStockData = (symbol) => {
  return axios.get(`https://www.nseindia.com/api/quote-equity?symbol=${symbol}`);
};

export default fetchStockData;
