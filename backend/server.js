const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5000;


app.use(cors({ origin: 'http://localhost:3000' }));


app.get('/api/quote-equity', async (req, res) => {
  const symbol = req.query.symbol;

  try {
    const response = await axios.get(`https://www.nseindia.com/api/quote-equity?symbol=${symbol}`);
    res.json(response.data); 
  } catch (error) {
    console.error('Error fetching stock data:', error);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});


app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
