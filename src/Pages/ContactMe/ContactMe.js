import React from 'react';

const ContactMe = () => {
  return (
    <div className='container mx-auto'>
      <h2 className='text-4xl text-center font-semibold m-12'>Contact me</h2>
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
          <p>
            email:{' '}
            <span className='font-semibold'>amirhossain.limon@gmail.com</span>
          </p>
          <p>
            Phone: <span className='font-semibold'>01819062270</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
