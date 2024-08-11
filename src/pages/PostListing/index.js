import React, { useState } from 'react';
import Header from '../../components/Header'; 
import KPIBox from '../../components/KPIBox';
import PostTable from '../../components/PostTable';
import Pagination from '../../components/Pagination';
import { posts as initialPosts } from '../../services/dummyData';
import totalPostsIcon from '../../assets/post-icon.png'; 
import publishedPostsIcon from '../../assets/recent-icon.png'; 
import './index.css';

const PostListing = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleHide = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, hidden: !post.hidden } : post
    ));
  };

  const totalPosts = posts.length;
  const publishedPosts = posts.filter(post => !post.hidden && post.published).length;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <div className="post-listing-container">
        <div className="kpi-boxes">
          <KPIBox 
            title="Total Posts" 
            value={totalPosts} 
            logo={totalPostsIcon} 
          />
          <KPIBox 
            title="Published Posts (Last 24h)" 
            value={publishedPosts} 
            logo={publishedPostsIcon} 
          />
        </div>
        <PostTable 
          posts={currentPosts} 
          onDelete={handleDelete} 
          onHide={handleHide} 
        />
        <Pagination 
          postsPerPage={postsPerPage} 
          totalPosts={posts.length} 
          paginate={paginate} 
        />
      </div>
    </>
  );
};

export default PostListing;
