import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../config/config';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${config.API_URL}customers`);
      setCustomers(response.data);
    };

    fetchData();
  }, []);

  const handleDelete = async (customerId) => {
    try {
      await axios.delete(`${config.API_URL}customers/${customerId}`);
      const updatedCustomers = customers.filter((customer) => customer.id !== customerId);
      setCustomers(updatedCustomers);
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <Link to={`/customers/${customer.id}`}>{customer.first_name} {customer.last_name}</Link> (
            <button onClick={() => handleDelete(customer.id)}>Delete</button>
            )
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
