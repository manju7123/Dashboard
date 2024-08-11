import React from 'react';
import './index.css'; 
const PostTable = ({ posts, onDelete, onHide }) => {
  return (
    <table className="post-table">
      <thead>
        <tr>
          <th>Post ID</th>
          <th>Post Caption</th>
          <th>Media URL</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          !post.hidden && (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.caption}</td>
              <td><a href={post.mediaUrl} target="_blank" rel="noopener noreferrer">View Media</a></td>
              <td>
                <button onClick={() => onHide(post.id)}>
                  {post.hidden ? 'Show' : 'Hide'}
                </button>
                <button onClick={() => onDelete(post.id)}>
                  Delete
                </button>
              </td>
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
