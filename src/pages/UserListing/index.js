import React, { useState } from 'react';
import Header from '../../components/Header';
import KPIBox from '../../components/KPIBox';
import UserTable from '../../components/UserTable';
import Pagination from '../../components/Pagination';
import { users as initialUsers } from '../../services/dummyData';
import totalUsersIcon from '../../assets/user-icon.png'; 
import activeUsersIcon from '../../assets/active-icon.png'; 
import './index.css';

const UserListing = () => {
  const [users, setUsers] = useState(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; 

  const handleEdit = (id) => {
    const updatedUsername = prompt('Enter new username:');
    const updatedName = prompt('Enter new name:');
    const updatedEmail = prompt('Enter new email:');

    setUsers(users.map(user =>
      user.id === id ? { ...user, username: updatedUsername, name: updatedName, email: updatedEmail } : user
    ));
  };

  const handleBan = (id) => {
    if (window.confirm('Are you sure you want to ban this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const totalUsers = users.length;
  const activeUsers = users.filter(user => user.active).length;


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <div className="user-listing-container">
        <div className="kpi-boxes">
          <KPIBox 
            title="Total Users" 
            value={totalUsers} 
            logo={totalUsersIcon} 
          />
          <KPIBox 
            title="Active Users (Last 24h)" 
            value={activeUsers} 
            logo={activeUsersIcon} 
          />
        </div>
        <UserTable 
          users={currentUsers} 
          onEdit={handleEdit} 
          onBan={handleBan} 
        />
        <Pagination 
          postsPerPage={usersPerPage} 
          totalPosts={users.length} 
          paginate={paginate} 
        />
      </div>
    </>
  );
};

export default UserListing;
