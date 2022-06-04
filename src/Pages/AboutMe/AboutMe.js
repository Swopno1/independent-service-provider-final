import React from 'react';
import { BeakerIcon, LocationMarkerIcon } from '@heroicons/react/solid';

const AboutMe = () => {
  return (
    <div className='container mx-auto max-w-2xl'>
      <h2 className='text-4xl text-center font-semibold m-12'>About Me</h2>
      <div className='flex border shadow-md rounded-md'>
        <div className=''>
          <img
            className='p-2 w-36 rounded'
            src='https://i.ibb.co/Lz8MXhq/Amir.jpg'
            alt='Md Amir hossain'
          />
        </div>
        <div className='p-2'>
          <h3 className='text-2xl font-bold text-slate-900'>Md Amir Hossain</h3>
          <h4 className='text-sm font-semibold text-orange-500'>
            Freelancer, Spreadsheet-expert
          </h4>
          <p>
            Education:{' '}
            <span className='font-semibold'>
              M.B.A (Accounting and Information Systems
            </span>
          </p>
          <p>
            Address:{' '}
            <span className='font-semibold'>
              Sitakundo, Chittagong, Bangladesh
            </span>
          </p>
        </div>
      </div>
      <div className='border shadow-md rounded-md my-3'>
        <div className='my-3'>
          <div className='w-full'>
            <h4 className='text-center text-xl font-bold'>My Goal</h4>
            <hr className='mx-auto w-11/12 my-2' />
          </div>
          <p className='w-full p-3 text-justify'>
            I've an objective of becoming a web-programmer specially for cloud
            computing. Also I have keen interest in blockchain technology. That
            is why I am developing my skills in different programming language
            specially in Javascript. This is what makes me enrol in this course
            I am proud myself to take the decision.
            <br />
          </p>
        </div>
        <div className='my-3'>
          <div className='w-full'>
            <h4 className='text-center text-xl font-bold'>
              How I'm Preparing Myself
            </h4>
            <hr className='mx-auto w-11/12 my-2' />
          </div>
          <p className='w-full p-3 text-justify'>
            I've started my journey a long before with understanding core
            concept of different technology. In this long journey, I always keep
            me learning new things. I never miss a single day without trying to
            learn something. Actually, Learning Is My Hobby...
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
