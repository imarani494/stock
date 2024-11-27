import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStockData = createAsyncThunk("stocks/fetchStockData", async (symbol) => {
  const response = await axios.get(`/api/quote-equity?symbol=${symbol}`);
  return { symbol, data: response.data };
});

const stocksSlice = createSlice({
  name: "stocks",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStockData.fulfilled, (state, action) => {
        const stock = action.payload;
        
        const existingStockIndex = state.data.findIndex(item => item.symbol === stock.symbol);
        if (existingStockIndex === -1) {
          state.data.push(stock);
        } else {
          state.data[existingStockIndex] = stock;
        }
        state.status = "succeeded";
      })
      .addCase(fetchStockData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default stocksSlice.reducer;
