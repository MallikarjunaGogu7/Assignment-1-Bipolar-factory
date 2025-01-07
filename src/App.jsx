import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import './App.css'; // For SpinKit styles
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data.slice(0, 10)); // Limit to 10 users
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="app">
      
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        </div>
      ) : (
        <UserList users={users} />
      )}
    </div>
  );
};

export default App;
