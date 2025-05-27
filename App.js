import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import BillingPage from './pages/BillingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/billing" element={<BillingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
