import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../config/config';

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${config.API_URL}customers/${customerId}`);
      setCustomer(response.data);
    };

    if (customerId) {
      fetchData();
    }
  }, [customerId]);

  if (!customer) {
    return <div>Loading customer details...</div>;
  }

  return (
    <div>
      <h2>Customer Details</h2>
      <p>ID: {customer.id}</p>
      <p>Name: {customer.first_name} {customer.last_name}</p>
      <p>Email: {customer.email}</p>
      {/* Add more details based on your data structure */}
    </div>
  );
};

export default CustomerDetails;
