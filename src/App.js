import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerList />} />  {/* Route for customer list */}
        <Route path="/customers" element={<CustomerList />} />  {/* Route for customer list */}
        <Route path="/customers/:customerId" element={<CustomerDetails />} />  {/* Route for individual customer details (dynamic route) */}
      </Routes>
    </Router>
  );
};

export default App;