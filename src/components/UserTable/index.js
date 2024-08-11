import React from 'react';
import './index.css';

const UserTable = ({ users, onEdit, onBan }) => {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>User ID</th>
          <th>Username</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => onEdit(user.id)}>Edit</button>
              <button onClick={() => onBan(user.id)}>Ban</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
