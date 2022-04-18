import React from 'react';
import Article from '../../components/Article/Article';

const articles = [
  {
    id: 1,
    title: 'Difference between `authorization` and `authentication`',
    post: 'Post text Post text Post text Post text Post text Post text Post text Post text Post text Post text Post text.',
    author: 'Md Amir Hossain',
    img: 'https://i.ibb.co/9Y6FCpP/image7.jpg',
    date: 'January 1, 2022',
  },
  {
    id: 2,
    title:
      'Why are you using `firebase`? What other options do you have to implement authentication?',
    post: 'Post text Post text Post text Post text Post text Post text Post text Post text Post text Post text Post text.',
    author: 'Md Amir Hossain',
    img: 'https://i.ibb.co/9Y6FCpP/image7.jpg',
    date: 'January 1, 2022',
  },
  {
    id: 3,
    title:
      'What other services does `firebase` provide other than authentication',
    post: 'Post text Post text Post text Post text Post text Post text Post text Post text Post text Post text Post text.',
    author: 'Md Amir Hossain',
    img: 'https://i.ibb.co/9Y6FCpP/image7.jpg',
    date: 'January 1, 2022',
  },
];

const Blogs = () => {
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
