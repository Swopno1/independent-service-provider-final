import React, { useEffect, useState } from 'react';

const LatestPost = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('articles.json')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <section className='services container mx-auto my-12'>
      <h2 className='text-4xl text-center font-semibold mb-12'>Latest Posts</h2>
      <div>
        {articles.map((post) => (
          <PostCard posts={post} key={post.id} />
        ))}
      </div>
    </section>
  );
};

const PostCard = ({ posts }) => {
  const { title, post, author, img, date } = posts;

  return (
    <div className='flex mb-6 rounded-md border shadow-md'>
      <div className='w-52 rounded-l-md mr-3'>
        <img src={img} alt={title} />
      </div>
      <div className='my-2 mr-2 w-full'>
        <div className='block w-auto border-b-2'>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <p>
            <small>
              <span className='font-bold'>Author: </span>
              {author} || <span className='font-bold'> Published: </span>
              {date}
            </small>
          </p>
        </div>
        <p className='mt-2 text-sm'>
          {post.length > 150 ? post.slice(0, 150) : post}{' '}
          <button className='text-orange-500 font-bold'>See More...</button>
        </p>
      </div>
    </div>
  );
};

export default LatestPost;
