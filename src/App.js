import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/admin";
import Home from "./pages/home";
import Asset from "./pages/asset"
import Trade from "./pages/trade";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/asset" element={<Asset />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/wallet" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
