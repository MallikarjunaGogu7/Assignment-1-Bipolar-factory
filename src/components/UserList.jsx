import React from 'react'; 
import 'bootstrap-icons/font/bootstrap-icons.css';  // Ensure you have Bootstrap icons imported

const UserList = ({ users }) => {
  return (
    <div className="container mt-5 ">
      <div className="row d-flex justify-content-center flex-wrap">
        {users.map((user) => {
          const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

          return (
            <div key={user.id} className="col-md-3 mb-4  ">
              <div className="card shadow-sm">
                <img src={avatarUrl} alt={`${user.username}'s avatar`} className="card-img-top pt-5 px-5 pb-0" />
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">
                    <strong><i className="bi bi-envelope mx-1"></i></strong> {user.email} <br />
                    <strong><i className="bi bi-telephone mx-1"></i></strong> {user.phone} <br />
                    <strong><i className="bi bi-browser-chrome mx-1"></i></strong> {user.company.name}
                  </p>
                  {/* Action icons (Like, Edit, Delete) */}
                  <div className="d-flex justify-content-around icon-2">
                    <i className="bi bi-heart-fill text-danger py-3" style={{ cursor: 'pointer' }} title="Like"></i>
                    <i className="bi bi-pencil-fill text-primary py-3" style={{ cursor: 'pointer' }} title="Edit"></i>
                    <i className="bi bi-trash-fill text-secondary py-3" style={{ cursor: 'pointer' }} title="Delete"></i>
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
