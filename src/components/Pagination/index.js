import React from 'react';
import './index.css'; 

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        {pageNumbers.map(number => (
          <li key={number} className="pagination-item">
            <button onClick={() => paginate(number)} className="pagination-button">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
