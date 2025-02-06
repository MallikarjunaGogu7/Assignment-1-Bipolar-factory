import React, { useState } from 'react';

const UserList = ({ users, onLike, onEdit, onSave, onDelete }) => {
  const [editValues, setEditValues] = useState({});

  const handleInputChange = (e, userId) => {
    setEditValues({
      ...editValues,
      [userId]: { ...editValues[userId], [e.target.name]: e.target.value },
    });
  };

  return (
    <div className="container mt-5 mx-auto">
      <div className="row d-flex justify-content-center flex-wrap">
        {users.map((user) => {
          const avatarUrl = `https://api.dicebear.com/6.x/avataaars/svg?seed=${encodeURIComponent(user.name + user.id)}`;

          return (
            <div key={user.id} className="col-md-3 mb-4 mx-auto container">
              <div className="card shadow-sm mx-auto">
                <img src={avatarUrl} alt={`${user.username}'s avatar`} className="card-img-top pt-5 px-5 pb-0" />
                <div className="card-body">
                  {user.isEditing ? (
                    <>
                      <input
                        type="text"
                        name="name"
                        value={editValues[user.id]?.name || user.name}
                        onChange={(e) => handleInputChange(e, user.id)}
                        className="form-control mb-2"
                      />
                      <input
                        type="email"
                        name="email"
                        value={editValues[user.id]?.email || user.email}
                        onChange={(e) => handleInputChange(e, user.id)}
                        className="form-control mb-2"
                      />
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => onSave(user.id, editValues[user.id]?.name || user.name, editValues[user.id]?.email || user.email)}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <h5 className="card-title">{user.name.slice(0,23)}</h5>
                      <p className="card-text">
                        <strong><i className="bi bi-envelope mx-1"></i></strong> {user.email.slice(0,20)} <br />
                        <strong><i className="bi bi-telephone mx-1"></i></strong> {user.phone} <br />
                        <strong><i className="bi bi-browser-chrome mx-1"></i></strong> {user.company.name}
                      </p>
                    </>
                  )}
                  {/* Action icons (Like, Edit, Delete) */}
                  <div className="d-flex justify-content-around icon-2">
                    <i
                      className={`bi bi-heart-fill py-3 ${user.liked ? 'text-danger' : 'text-white'}`}
                      style={{ cursor: 'pointer' }}
                      title="Like"
                      onClick={() => onLike(user.id)}
                    ></i>
                    <i
                      className="bi bi-pencil-fill text-primary py-3"
                      style={{ cursor: 'pointer' }}
                      title="Edit"
                      onClick={() => onEdit(user.id)}
                    ></i>
                    <i
                      className="bi bi-trash-fill text-warning py-3"
                      style={{ cursor: 'pointer' }}
                      title="Delete"
                      onClick={() => onDelete(user.id)}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
