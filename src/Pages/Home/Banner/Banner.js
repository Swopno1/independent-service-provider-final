import React from 'react';

const Banner = () => {
  return (
    <div className='w-full bg-slate-900'>
      <div className='relative text-center'>
        <img
          className='s opacity-30'
          src='https://i.ibb.co/xHbLqWF/image16.jpg'
          alt='main-banner'
        />
        <div className='banner-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <p className='text-5xl text-white font-extrabold mb-7'>
            Where will you go next?
          </p>
          <p className='mb-7 text-white'>
            Buran Ghati Trek. There is not a single moment on this trek where
            you get frustrated. It's as if someone has pulled out all the best
            parts of our Himalayan tracks and sewn them together to make a
            perfect trek. We are going to Buran Ghati Trek in Himachal Pradesh,
            India to see all the wonderful moments.
          </p>
          <p className='text-2xl text-orange-500 font-bold'>Let's Go.....</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
