import React from 'react';
import "../styles.css"

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
            <a id={number} onClick={() => {
              // var element = document.getElementById(number);
              // element.classList.toggle("active");
              // document.getElementsByTagName("a").classList.toggle("active")
              paginate(number)}} href='!#'>
              {number}
            </a>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;