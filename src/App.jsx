import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import './App.css'; // For SpinKit styles
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null); // Track the user being edited

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const updatedUsers = response.data.slice(0, 10).map(user => ({
          ...user,
          liked: false, 
          isEditing: false, // Track edit mode
        }));
        setTimeout(() => {
          setUsers(updatedUsers);
          setLoading(false);
        }, 2000); //  Added a 3-second delay
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Handle Like Function (Toggle Heart Color)
  const handleLike = (userId) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, liked: !user.liked } : user
      )
    );
  };

  // Handle Edit Function
  const handleEdit = (userId) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId
          ? { ...user, isEditing: !user.isEditing, liked: !user.liked } // Toggle edit mode & heart
          : user
      )
    );

    // Set the user in edit mode
    setEditingUser(users.find(user => user.id === userId));
  };

  // Handle Save Function (After Editing)
  const handleSave = (userId, updatedName, updatedEmail) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId
          ? { ...user, name: updatedName, email: updatedEmail, isEditing: false }
          : user
      )
    );
    setEditingUser(null);
  };

  // Handle Delete Function
  const handleDelete = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };

  return (
    <div className="app mx-5 container">
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        </div>
      ) : (
        <div className="border border-2">
          <UserList
            users={users}
            onLike={handleLike}
            onEdit={handleEdit}
            onSave={handleSave}
            onDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
};

export default App;
