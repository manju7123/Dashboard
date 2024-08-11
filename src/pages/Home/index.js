import React from 'react';
import Header from '../../components/Header';
import KPIBox from '../../components/KPIBox';
import { users, posts } from '../../services/dummyData';
import './index.css';

import userIcon from '../../assets/user-icon.png';
import activeIcon from '../../assets/active-icon.png'
import postIcon from '../../assets/post-icon.png';
import recentIcon from '../../assets/recent-icon.png'; 

const Home = () => {
  const totalUsers = users.length;
  const activeUsers = users.filter(user => user.active).length;
  const totalPosts = posts.length;
  const recentPosts = posts.filter(post => post.published).length;

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Welcome to the Dashboard</h1>
          <p className="home-description">
            Monitor your users and posts activity. Manage and control your content effectively.
          </p>
        </div>
        <div className="kpi-boxes">
          <KPIBox title="Total Users" value={totalUsers} logo={activeIcon} />
          <KPIBox title="Active Users (Last 24h)" value={activeUsers} logo={userIcon} />
          <KPIBox title="Total Posts" value={totalPosts} logo={postIcon} />
          <KPIBox title="Published Posts (Last 24h)" value={recentPosts} logo={recentIcon} />
        </div>
      </div>
    </>
  );
};

export default Home;
