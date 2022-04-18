import React from 'react';

const Article = ({ article }) => {
  const { title, post, author, img, date } = article;

  return (
    <div>
      <h3>{title}</h3>
      <p>
        <span>Author: {author}</span> <span>Date: {date}</span>
      </p>
      <p>{post}</p>
    </div>
  );
};

export default Article;
