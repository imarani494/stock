import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StockList from "./components/StockList";
import StockDetail from "./components/StockDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StockList />} />
        <Route path="/stock/:id" element={<StockDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
