import React, { useEffect, useState } from 'react';
import Article from '../../components/Article/Article';

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('articles.json')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <h2>Blogs</h2>
      {articles.map((article) => (
        <Article key={article.id} article={article}></Article>
      ))}
    </div>
  );
};

export default Blogs;
